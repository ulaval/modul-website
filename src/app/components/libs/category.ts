import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './category.html';
import { Watch } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import * as ModulActions from '@/app/store/actions';
import * as ModulMutations from '@/app/store/mutations';
import * as ModulGetters from '@/app/store/getters';
// import StoreMixinMap, { StoreMixin } from '@/app/store/store-mixin';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

const ZINDEX: number = 200;

type ICategory = {
    id: string;
    text: string;
};

type CategoryIndexMap = {
    [id: string]: number;
};

@WithRender
@Component
// ({
//     mixins: [StoreMixinMap as any]
// })
export class Category extends ModulWebsite {

    private listOpened: boolean = false;

    protected mounted(): void {
        this.getMeta();
    }

    private get categories(): string[] {
        return this.$store.getters[ModulGetters.GET_CATEGORIES_SORTED];
    }

    private getCategoryName(category: string): string {
        return this.state.categoriesText[category];
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.commit(ModulMutations.CATEGORY_GET, this.$route.meta);
    }

    private getText(category: ICategory): string {
        return category.text;
    }

    private get selectedCategory(): string | undefined {
        if (this.state.category) {
            return this.state.category;
        } else {
            return undefined;
        }
    }

    private set selectedCategory(category: string | undefined) {
        this.$store.commit(ModulMutations.CATEGORY_GET, category);
    }

    private get hasSelectedCategory(): boolean {
        if (this.selectedCategory != undefined) {
            return Object.keys(this.selectedCategory).length > 0;
        } else {
            return false;
        }
    }

    private getPreviousCategory(): void {
        if (this.selectedCategory) {
            let index: number = this.categories.indexOf(this.selectedCategory);
            index--;
            if (index < 0) {
                index = this.categories.length - 1;
            }
            this.onSelectedCategory(this.categories[index]);
        }
    }

    private getNextCategory(): void {
        if (this.selectedCategory) {
            let index: number = this.categories.indexOf(this.selectedCategory);
            index++;
            if (index >= this.categories.length) {
                index = 0;
            }
            this.onSelectedCategory(this.categories[index]);
        }
    }

    private onSelectedCategory(category: string): void {
        this.$router.push(this.state.categoryRoutes[category].url);
    }

    private onOpen(): void {
        this.listOpened = true;
    }

    private onClose(): void {
        this.listOpened = false;
    }

    private get zIndex(): number {
        return this.listOpened ? ZINDEX : 0;
    }
}
