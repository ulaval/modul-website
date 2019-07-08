import ExpandableLayoutPlugin from '@ulaval/modul-components/dist/components/expandable-layout/expandable-layout';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';
import Component from 'vue-class-component';
import { Vue, Watch } from 'vue-property-decorator';
import { GettingStarted } from '../../components/pages/page';
import MetaAll, { ModulComponentStatus } from '../../meta/meta-all';
import { ModulWebsite } from '../modul-website';
import WithRender from './modul.html?style=./modul.scss';

Vue.use(ExpandableLayoutPlugin);

console.debug('TODO: eliminate regex to identify current page');

// animation constant shared with css in header.scss and menu.scss
const CSS_ANIMATION_HEADER_DURATION: number = 100;
const CSS_ANIMATION_MENU_DURATION: number = 650;

type Category = {
    id: string;
    text: string;
};

type Component = {
    tag: string;
    category: string;
    text: string;
};

type CategoryIndexMap = {
    [id: string]: number;
};

export enum ModulMenuSection {
    Home = 'home',
    Philosophy = 'philosophy',
    Components = 'components',
    Standards = 'standards'
}

@WithRender
@Component({
    mixins: [MediaQueries]
})
export default class Modul extends ModulWebsite {

    private menuOpen: boolean = false;
    private searchOpen: boolean = false;
    private animMenuOpen: boolean = false;
    private menuSection: string = '';

    private searchModel: string = '';
    private searchWidth: string = '400px';

    private components: Component[] = [];
    private logo: any = require('./logo-ul.svg');
    private menuFirstStep: boolean = true;

    protected mounted(): void {
        this.isMqMinSChanged(this.as<MediaQueriesMixin>().isMqMinS);
    }

    // computed
    get modulVersion() {
        return MetaAll.getModulVersion();
    }

    @Watch('isMqMinS')
    private isMqMinSChanged(value): void {
        this.searchWidth = value ? '400px' : '100%';
    }

    get isHomePage(): boolean {
        return this.$route.path == '/';
    }

    private get isComponentsPage(): boolean {
        let regExp: RegExp = new RegExp('([a-z\:0-9\/]+)?(\/composants[\/]?)([a-z\-?\/]+)?');
        if (this.menuOpen) {
            return this.menuSection == ModulMenuSection.Components;
        }
        return regExp.test(this.$route.path);
    }

    private get isStandardsPage(): boolean {
        let regExp: RegExp = new RegExp('([a-z\:0-9\/]+)?(\/normes[\/]?)([a-z\-?\/]+)?');
        if (this.menuOpen) {
            return this.menuSection == ModulMenuSection.Standards;
        }
        return regExp.test(this.$route.path);
    }

    // private get isGettingStartedPage(): boolean {
    //     let regExp: RegExp = new RegExp('([a-z\:0-9\/]+)?(\/premier[\-]pas[\/]?)([a-z\-?\/]+)?');
    //     if (this.menuOpen) {
    //         return this.menuSection == ModulMenuSection.GettingStarted;
    //     }
    //     return regExp.test(this.$route.path);
    // }

    private get gettingStarted(): string {
        return this.$routerIndex.for(GettingStarted.pages[0].id);
    }

    private getCategoryComponents(category): any {
        return MetaAll.getMetaByCategory(category).sort((a, b) => {
            return this.$i18n.translate(a.name) < this.$i18n.translate(b.name) ? -1 : (this.$i18n.translate(a.name) > this.$i18n.translate(b.name) ? 1 : 0);
        });
    }

    // private toggleMobileMenu(): void {
    //     this.menuFirstStep = true;
    //     if (!this.menuOpen) {
    //         this.openMenu();
    //     } else {
    //         this.closeMenu();
    //     }
    // }

    private showSecondStep(menuSection: string): void {
        this.menuSection = menuSection;
        this.menuFirstStep = false;
    }

    private showFirstStep(): void {
        this.menuFirstStep = true;
    }

    // TODO: another way to index?
    private searchData(): any[] {
        return MetaAll.getAllMeta().map(metaData => {
            let nameObj: {};
            if (metaData.name && metaData.category) {
                nameObj = {
                    tag: metaData.tag,
                    category: this.$i18n.translate(metaData.category),
                    text: this.$i18n.translate(metaData.name)
                };
            } else {
                nameObj = {
                    tag: metaData.tag,
                    category: undefined,
                    text: undefined
                };
            }
            return nameObj;
        });
    }

    private get searchResult(): any[] {
        let filtereComponents: any[] = [];
        if (this.searchModel != '') {
            filtereComponents = this.components.filter((element) => {
                let textToSearch = element.category + ' ' + element.text + ' ' + element.tag;
                return normalizeString(textToSearch).match(normalizeString(this.searchModel));
            });
        }
        return filtereComponents;
    }

    private get isSearchOpen(): boolean {
        return this.searchOpen;
    }

    private isProduction(status): boolean {
        return status === ModulComponentStatus.Production;
    }

    private toggleSearch(): void {
        this.searchOpen = !this.searchOpen;
        // if (this.searchOpen) {
        //     this.components = this.searchData();
        // }
    }

    private openSearch(): void {
        this.searchOpen = true;
        setTimeout(() => {
            (this.$refs.search as HTMLInputElement).focus();
        }, CSS_ANIMATION_MENU_DURATION);
    }

    private closeSearch(): void {
        this.searchOpen = false;
        setTimeout(() => {
            this.searchModel = '';
        }, CSS_ANIMATION_MENU_DURATION);
    }
}
