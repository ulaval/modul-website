import Vue from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import * as ModulActions from '@/app/store/modules/components/actions';
import { Watch } from 'vue-property-decorator';
import { ROUTES, COMPONENTS, ECOSYSTEM, GETTING_STARTED, STANDARDS } from '@/app/router';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';
import * as ComponentsGetters from '@/app/store/modules/components/getters';
import * as PagesGetters from '@/app/store/modules/pages/getters';
import { Page, Standards, GettingStarted } from '@/app/components/pages/page';
import { read } from 'fs';

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
        Meta.getCategories().forEach(category => {
            this.categoriesComponent.push({
                id: category,
                text: this.$i18n.translate(category)
            });
        });

        this.categoriesComponent.sort((a, b) => {
            return a.text < b.text ? -1 : (a.text > b.text ? 1 : 0);
        });

        // Aller chercher les pages des normes pour le menu
        Standards.getPages().forEach(page => {
            this.pagesStandards.push({
                id: page,
                text: this.$i18n.translate('name:' + page)
            });
        });
    }

    protected mounted(): void {
        this.isMqMinSChanged(this.as<MediaQueriesMixin>().isMqMinS);
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
        let isBlackHeader = false;
        if (this.$route.path == '/' || (this.$route.path as any).startsWith(this.gettingStarted) || (this.$route.path as any).startsWith(this.standards)) {
            isBlackHeader = true;
        }
        return isBlackHeader;
    }

    private get gettingStarted(): string {
        return '/' + ROUTES[GETTING_STARTED] + '/' + ROUTES[GETTING_STARTED];
    }

    private get standards(): string {
        return '/' + ROUTES[STANDARDS];
    }

    private getCategoryComponents(category): ComponentMeta[] {
        return Meta.getMetaByCategory(category, process.env.NODE_ENV);
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.$store.getters[ComponentsGetters.GET_COMPONENT_ROUTES][tag].url);
        this.searchOpen = false;
        this.closeMenu();
    }

    private onComponentCategoryClick(category: Category): void {
        this.$router.push(this.$store.getters[ComponentsGetters.GET_CATEGORY_ROUTES][category.id].url);
        this.closeMenu();
    }

    private onPageClick(event: MouseEvent, page: Page, menuSection: string): void {
        this.$router.push(this.$store.getters[menuSection + '/' + PagesGetters.GET_PAGE_ROUTES][page.id].url);
        this.searchOpen = false;
        this.closeMenu();
        (event.currentTarget as HTMLElement).blur();
    }

    private navigateTo(event: MouseEvent, menuSection: string) {
        this.menuSection = menuSection;
        switch (this.menuSection) {
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

    // Vue.filter('highlight', function(words, query){
    //     return words.replace(query, '<span class=\'test2\'>' + query + '</span>')
    // });

    private searchData(): any[] {
        if ((process.env.NODE_ENV as any).dev) {
            return Object.keys(Meta.getMeta()).map(key => {
                let nameObj: {};
                if (Meta.getMeta()[key].name && Meta.getMeta()[key].category) {
                    nameObj = {
                        tag: Meta.getMeta()[key].tag,
                        category: this.$i18n.translate(Meta.getMeta()[key].category),
                        text: this.$i18n.translate(Meta.getMeta()[key].name)
                    };
                } else {
                    nameObj = {
                        tag: Meta.getMeta()[key].tag,
                        category: 'Null',
                        text: 'Null'
                    };
                }
                return nameObj;
            }, this);
        } else {
            return Object.keys(Meta.getMetaForProd()).map(key => {
                let nameObj: {};
                if (Meta.getMetaForProd()[key].name && Meta.getMetaForProd()[key].category) {
                    nameObj = {
                        tag: Meta.getMetaForProd()[key].tag,
                        category: this.$i18n.translate(Meta.getMetaForProd()[key].category),
                        text: this.$i18n.translate(Meta.getMetaForProd()[key].name)
                    };
                } else {
                    nameObj = {
                        tag: Meta.getMetaForProd()[key].tag,
                        category: 'Null',
                        text: 'Null'
                    };
                }
                return nameObj;
            }, this);
        }
    }

    private get searchResult(): any[] {

        let filtereComponents: any[] = [];
        if (this.searchModel != '') {
            filtereComponents = this.components.filter((element) => {
                let textToSearch = element.category + ' ' + element.text;
                return normalizeString(textToSearch).match(normalizeString(this.searchModel));
            });
        }

        return filtereComponents;
    }

    private get isSearchOpen(): boolean {
        return this.searchOpen;
    }

    private toggleSearch(): void {
        this.searchOpen = !this.searchOpen;
        if (this.searchOpen) {
            this.components = this.searchData();
        }
    }

    private startCloseSearch() {
        if (this.menuOpen) {
            // let duration: number = Number(this.$modul.backdropTransitionDuration.slice(0, this.$modul.backdropTransitionDuration.length - 1)) * 1000;
            // this.$modul.setBackdropOpacity('0');
            // setTimeout(() => {
            //     this.$modul.removeBackdrop();
            // }, duration);
        }
    }

    @Watch('$route')
    private closeMenu(): void {
        if (this.menuOpen) {
            this.animMenuOpen = false;
            let anim = setTimeout(() => {
                this.menuOpen = false;
                // this.$modul.deleteWindow(MENU_ID);
                this.$emit('closeMenu');
            }, CSS_ANIMATION_MENU_DURATION);
        }
    }

    // private beforeEnter(el: HTMLElement, done): void {
    //     el.style.opacity = '0';
    //     el.style.height = '0';
    // }

    // private leave(el: any, done): void {
    //     var delay = el.dataset.index * 150
    //     setTimeout(function () {
    //         Velocity(
    //             el,
    //             { opacity: 0, height: 0 },
    //             { complete: done }
    //         )
    //     }, delay)
    // }

    // private enter(el: any, done): void {
    //     var delay: any = el.dataset.index * 150
    //     setTimeout(function () {
    //         Velocity(
    //             el,
    //             { opacity: 1, height: '1.6em' },
    //             { complete: done }
    //         )
    //     }, delay)
    // }

}
