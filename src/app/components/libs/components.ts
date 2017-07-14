import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import { Watch } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

const ZINDEX: number = 200;

type Category = {
    id: string;
    text: string;
};

type CategoryIndexMap = {
    [id: string]: number;
};

@WithRender
@Component
export class Components extends ModulWebsite {

    // private isScrolling: Boolean = false;
    private hasScrolled: boolean = false;
    private isListOpened: boolean = false;
    // private scrollPosition: Number = 0;
    // private bodyElement: HTMLElement = document.body;

    private categories: Category[] = [];
    private categoriesMap: CategoryIndexMap = {};

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

        this.categories.forEach((category, index) => this.categoriesMap[category.id] = index);
    }

    protected mounted(): void {
        this.getMeta();
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.CATEGORY_GET, this.$route.meta);
    }

    private getText(category: Category): string {
        return category.text;
    }

    private onCategorySelected(category: Category): void {
        this.navigateToCategory(category.id);
    }

    private getPreviousCategory(): void {
        if (this.state.category) {
            let index: number = this.categoriesMap[this.state.category];
            index--;
            if (index < 0) {
                index = this.categories.length - 1;
            }
            this.navigateToCategory(this.categories[index].id);
        }
    }

    private getNextCategory(): void {
        if (this.state.category) {
            let index: number = this.categoriesMap[this.state.category];
            index++;
            if (index >= this.categories.length) {
                index = 0;
            }
            this.navigateToCategory(this.categories[index].id);
        }
    }

    private navigateToCategory(category: string): void {
        this.$router.push(this.state.categoryRoutes[category].url);
    }

    private get selectedCategory(): Category | undefined {
        let result: Category | undefined = undefined;
        if (this.state.category) {
            result = this.categories[this.categoriesMap[this.state.category]];
        } else {
            result = this.categories[this.categoriesMap[this.$route.meta]];
        }
        return result;
    }

    private onOpen(isListOpened: boolean): void {
        this.isListOpened = isListOpened;
        // reset the scroll
        this.hasScrolled = false;
    }

    private get zIndex(): number {
        if (this.isListOpened && !this.hasScrolled) {
            return ZINDEX;
        } else {
            return 0;
        }
    }

    /*

    // private animDropDownOnScroll(scrollPosition): void {
    //     let position = this.$refs.dropdown['scrollHeight'];
    //     this.$refs.dropdown['style'].transform = 'translate3d(0,' + (position + scrollPosition) + ', 0)';
    // }

    // https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    private onScroll(): void {

        let isScrolling;

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        this.isScrolling = true;
        this.hasScrolled = true;
        this.isListOpened = false;

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {

            // Run the callback
            this.isScrolling = false;
            this.scrollPosition = this.bodyElement.scrollTop;
            // console.log('Scrolling has stopped: ' + this.scrollPosition);

        }, 66);

    }

    private mounted(): void {
        window.addEventListener('scroll', this.onScroll);
        console.log(this.$store.state.componentRoutes);
    }

    private destroyed() {
        window.removeEventListener('mousedown', this.onScroll);
    } */
}
