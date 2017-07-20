import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component.html?style=./component.scss';
import { Watch } from 'vue-property-decorator';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { ModulWebsite } from '../modul-website';

const ZINDEX: number = 200;

type Component = {
    tag: string;
    text: string;
};

type ComponentIndexMap = {
    [tag: string]: number;
};

@WithRender
@Component
export class ComponentViewer extends ModulWebsite {

    private hasScrolled: boolean = false;
    private isListOpened: boolean = false;
    // private translatedCategory: string = '';

    private components: Component[] = [];
    private componentsMap: ComponentIndexMap = {};

    protected beforeMount(): void {
        let tag: string = this.$route.meta;
        let meta: ComponentMeta = Meta.getMetaByTag(tag);

        if (meta && meta.category) {
            Meta.getMetaByCategory(meta.category).forEach(component => {
                this.components.push({
                    tag: component.tag,
                    text: component.name ? this.$i18n.translate(component.name) : component.tag
                });
            });

            this.components.sort((a, b) => {
                return a.text < b.text ? -1 : (a.text > b.text ? 1 : 0);
            });

            this.components.forEach((component, index) => this.componentsMap[component.tag] = index);

        }
    }

    protected mounted(): void {
        this.getMeta();
    }

    private back(category): void {
        this.$router.push(this.state.categoryRoutes[category].url);
    }

    private get translatedCategory(): string {

        if (this.state.component && this.state.component.category) {
            return this.$i18n.translate(this.state.component.category);
        } else {
            return '';
        }

    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPONENT_GET, this.$route.meta);
    }

    private getText(component: Component): string {
        return component.text;
    }

    private onComponentSelected(component: Component): void {
        this.navigateToComponent(component.tag);
    }

    private getPreviousComponent(): void {
        if (this.state.component) {
            let index: number = this.componentsMap[this.state.component.tag];
            index--;
            if (index < 0) {
                index = this.components.length - 1;
            }
            this.navigateToComponent(this.components[index].tag);
        }
    }

    private getNextComponent(): void {
        if (this.state.component) {
            let index: number = this.componentsMap[this.state.component.tag];
            index++;
            if (index >= this.components.length) {
                index = 0;
            }
            this.navigateToComponent(this.components[index].tag);
        }
    }

    private navigateToComponent(component: string): void {
        this.$router.push(this.state.componentRoutes[component].url);
    }

    private onOpen(isListOpened: boolean): void {
        this.isListOpened = isListOpened;
        // reset the scroll
        this.hasScrolled = false;
    }

    private get selectedComponent(): Component | undefined {
        let result: Component | undefined = undefined;
        if (this.state.component) {
            result = this.components[this.componentsMap[this.state.component.tag]];
        } else {
            result = this.components[this.componentsMap[this.$route.meta]];
        }
        return result;
    }

    private get zIndex(): number {
        if (this.isListOpened && !this.hasScrolled) {
            return ZINDEX;
        } else {
            return 0;
        }
    }
}
