import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './category.html';
import { Watch } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import * as ComponentsMutations from '@/app/store/modules/components/mutations';
import * as ComponentsGetters from '@/app/store/modules/components/getters';
import { RouteMap, KeyMap } from '@/app/store/modules/components/components-state';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
// import StoreMixinMap, { StoreMixin } from '@/app/store/store-mixin';

const ZINDEX: number = 200;

@WithRender
@Component({
    mixins: [MediaQueries]
})
// ({
//     mixins: [StoreMixinMap as any]
// })
export class Category extends ModulWebsite {

    private listOpened: boolean = false;
    private routerVisible: boolean = true;

    protected mounted(): void {
        this.getMeta();
    }

    private get categories(): string[] {
        return this.$store.getters[ComponentsGetters.GET_CATEGORIES_SORTED];
    }

    private get category(): string | null {
        return this.$store.getters[ComponentsGetters.GET_CATEGORY];
    }

    private get categoriesText(): KeyMap {
        return this.$store.getters[ComponentsGetters.GET_CATEGORIES_TEXT];
    }

    private getCategoryName(category: string): string {
        return this.categoriesText[category];
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.commit(ComponentsMutations.CATEGORY_GET, this.$route.meta.page);
    }

    private get selectedCategory(): string | null {
        return this.category;
    }

    private set selectedCategory(category: string | null) {
        if (category) {
            this.$router.push(this.categoryRoutes[category].url);
            this.$nextTick(() => {
                this.routerVisible = false;
                setTimeout(() => {
                    this.routerVisible = true;
                }, 0);
            });
        }
    }

    private get categoryRoutes(): RouteMap {
        return this.$store.getters[ComponentsGetters.GET_CATEGORY_ROUTES];
    }

    private get hasSelectedCategory(): boolean {
        return this.selectedCategory != undefined ? Object.keys(this.selectedCategory).length > 0 : false;
    }

    private getPreviousCategory(): void {
        if (this.selectedCategory) {
            let index: number = this.categories.indexOf(this.selectedCategory);
            index--;
            if (index < 0) {
                index = this.categories.length - 1;
            }
            this.selectedCategory = this.categories[index];
        }
    }

    private getNextCategory(): void {
        if (this.selectedCategory) {
            let index: number = this.categories.indexOf(this.selectedCategory);
            index++;
            if (index >= this.categories.length) {
                index = 0;
            }
            this.selectedCategory = this.categories[index];
        }
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
