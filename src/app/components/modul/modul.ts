import Vue from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import * as ModulActions from '@/app/store/actions';
import { Watch } from 'vue-property-decorator';
import { ROUTES, COMPONENTS, ECOSYSTEM, VISUAL_STANDARDS, WRITING_RULES } from '@/app/router';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';

// animation constant shared with css in header.scss and menu.scss
const CSS_ANIMATION_HEADER_DURATION: Number = 100;
const CSS_ANIMATION_MENU_DURATION: Number = 650;

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

@WithRender
@Component({
    mixins: [MediaQueries]
})
export default class Modul extends ModulWebsite {

    private menuOpen: boolean = false;
    private searchOpen: boolean = false;
    private headerAnimationCompleted: boolean = false;
    private categories: Category[] = [];
    private searchModel: string = '';
    private searchWidth: string = '400px';

    private components: Component[] = [];

    protected beforeMount(): void {
        Meta.getCategories().forEach(category => {
            this.categories.push({
                id: category,
                text: this.$i18n.translate(category)
            });
        });

        this.categories.sort((a, b) => {
            return a.text < b.text ? -1 : (a.text > b.text ? 1 : 0);
        });
    }

    protected mounted(): void {
        this.isMqMinSChanged(this.as<MediaQueriesMixin>().isMqMinS)
    }

    @Watch('isMqMinS')
    private isMqMinSChanged(value): void {
        this.searchWidth = value ? '400px' : '100%';
    }

    private get isHome(): boolean {
        let isHome = false;
        if (this.$route.path == '/') {
            isHome = true;
        }
        return isHome;
    }

    private get visualStandards(): string {
        return '/' + ROUTES[VISUAL_STANDARDS];
    }

    private get writingRules(): string {
        return '/' + ROUTES[WRITING_RULES];
    }

    private get componentsRoute(): string {
        return '/' + ROUTES[COMPONENTS];
    }

    private get ecosystem(): string {
        return '/' + ROUTES[ECOSYSTEM];
    }

    private getCategoryComponents(category): ComponentMeta[] {
        return Meta.getMetaByCategory(category);
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.state.componentRoutes[tag].url);
        this.searchOpen = false;
    }

    private onCategoryClick(event: MouseEvent, category: Category): void {
        this.$router.push(this.state.categoryRoutes[category.id].url);
        this.closeMenu();
        event.currentTarget['blur']();
    }

    private showMenu(): void {
        if (this.menuOpen) {
            this.closeMenu();
        } else {
            this.menuOpen = true;
            let anim = setTimeout(() => {
                this.headerAnimationCompleted = true;
                this.$mWindow.stopScollBody();
                this.$emit('openMenu');
                this.$nextTick(() => {
                    let menu: HTMLElement = this.$refs.menu as HTMLElement;
                    menu.focus();
                });
            }, CSS_ANIMATION_HEADER_DURATION);

        }
    }

    // Vue.filter('highlight', function(words, query){
    //     return words.replace(query, '<span class=\'test2\'>' + query + '</span>')
    // });

    private searchData(): any[] {
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

    @Watch('$route')
    private closeMenu(): void {

        if (this.menuOpen) {
            this.headerAnimationCompleted = false;

            let anim = setTimeout(() => {
                this.menuOpen = false;

                this.$mWindow.activeScollBody();
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
