import { GettingStarted, Standards } from '@/app/components/pages/page';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

import MetaAll, { ModulComponentStatus } from '../../meta/meta-all';
import { ModulWebsite } from '../modul-website';
import WithRender from './modul.html?style=./modul.scss';

console.debug('TODO: eliminate regex to identify current page');

// animation constant shared with css in header.scss and menu.scss
const CSS_ANIMATION_HEADER_DURATION: Number = 100;
const CSS_ANIMATION_MENU_DURATION: Number = 650;
const MENU_ID: string = 'ModulMenu';

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
    GettingStarted = 'gettingStarted',
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
    private categoriesComponent: Category[] = [];
    private pagesStandards: Category[] = [];
    private searchModel: string = '';
    private searchWidth: string = '400px';

    private components: Component[] = [];
    private logo: any = require('../../../assets/logo-ul.svg');
    private menuFirstStep: boolean = true;

    protected beforeMount(): void {
        MetaAll.getCategories().forEach(category => {
            this.categoriesComponent.push({
                id: category,
                text: this.$i18n.translate(category)
            });
        });

        // For menu
        Standards.getPages().forEach(page => {
            this.pagesStandards.push({
                id: page,
                text: this.$i18n.translate(`pages:${page}`)
            });
        });
    }

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

    private get isHomePage(): boolean {
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

    private get isGettingStartedPage(): boolean {
        let regExp: RegExp = new RegExp('([a-z\:0-9\/]+)?(\/premier[\-]pas[\/]?)([a-z\-?\/]+)?');
        if (this.menuOpen) {
            return this.menuSection == ModulMenuSection.GettingStarted;
        }
        return regExp.test(this.$route.path);
    }

    private get isBlackHeader(): boolean {
        return this.$route.meta.page === undefined || this.$route.meta.sectionObj === GettingStarted || this.$route.meta.sectionObj === Standards;
    }

    private get gettingStarted(): string {
        return this.$routerIndex.for(GettingStarted.pages[0].id);
    }

    private getCategoryComponents(category): any {
        return MetaAll.getMetaByCategory(category).sort((a, b) => {
            return this.$i18n.translate(a.name) < this.$i18n.translate(b.name) ? -1 : (this.$i18n.translate(a.name) > this.$i18n.translate(b.name) ? 1 : 0);
        });
    }

    private getRouterIndex(tag: string): string {
        return this.$routerIndex.for(tag);
    }

    private navigateTo(event: MouseEvent, menuSection: string) {
        switch (menuSection) {
            case ModulMenuSection.Home:
                this.$router.push('/');
                this.closeMenu();
                break;
            case ModulMenuSection.GettingStarted:
                this.$router.push(this.gettingStarted);
                this.closeMenu();
                break;
            default:
                if (this.menuOpen && this.menuSection == menuSection) {
                    this.closeMenu();
                } else {
                    this.openMenu();
                }
        }
        this.menuSection = menuSection;
        (event.currentTarget as HTMLElement).blur();
    }

    private openMenu(): void {
        this.menuOpen = true;
        let anim = setTimeout(() => {
            this.animMenuOpen = true;
            this.$emit('openMenu');
            this.$nextTick(() => {
                let menu: HTMLElement = this.$refs.menu as HTMLElement;
                menu.focus();
            });
        }, CSS_ANIMATION_HEADER_DURATION);
    }

    private toggleMobileMenu(): void {
        this.menuFirstStep = true;
        if (!this.menuOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

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
        if (this.searchOpen) {
            this.components = this.searchData();
        }
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

    @Watch('$route')
    private closeMenu(): void {
        this.searchOpen = false;
        if (this.menuOpen) {
            this.animMenuOpen = false;
            let anim = setTimeout(() => {
                this.menuOpen = false;
                // this.$modul.deleteWindow(MENU_ID);
                this.$emit('closeMenu');
            }, CSS_ANIMATION_MENU_DURATION);
        }
    }
}
