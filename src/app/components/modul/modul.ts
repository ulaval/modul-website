import Vue from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import * as ModulActions from '@/app/store/actions';
import { ROUTES, COMPONENTS, ECOSYSTEM, VISUAL_STANDARDS, WRITING_RULES } from '@/app/router';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

// animation constant shared with css in header.scss and menu.scss
const CSS_ANIMATION_HEADER_DURATION: Number = 500;
const CSS_ANIMATION_MENU_DURATION: Number = 800;

type Category = {
    id: string;
    text: string;
};

type CategoryIndexMap = {
    [id: string]: number;
};

@WithRender
@Component
export default class Modul extends ModulWebsite {

    private menuOpen: boolean = false;
    private headerAnimationCompleted: boolean = false;
    private categories: Category[] = [];

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

    private get components(): string {
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
        this.showMenu();
    }

    private onCategoryClick(category: Category): void {
        this.$router.push(this.state.categoryRoutes[category.id].url);
        this.showMenu();
    }

    private showMenu(): void {

        this.headerAnimationCompleted = false;
        let anim: any = undefined;

        if (this.menuOpen) {

            let anim = setTimeout(() => {
                this.menuOpen = false;
                this.$mWindow.activeScollBody();
            }, CSS_ANIMATION_MENU_DURATION);

        } else {

            this.$mWindow.stopScollBody();
            let anim = setTimeout(() => {
                this.headerAnimationCompleted = true;
            }, CSS_ANIMATION_HEADER_DURATION);

            this.menuOpen = true;
        }

        clearTimeout(anim);

    }

}
