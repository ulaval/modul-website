import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component.html?style=./component.scss';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import { ModulWebsite } from '../modul-website';

const BOOLEAN_TYPE: string = 'boolean';
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

    private components: Component[] = [];
    private componentsMap: ComponentIndexMap = {};

    protected beforeMount(): void {
        let tag: string = this.$route.meta;
        let meta: ComponentMeta = Meta.getMetaByTag(tag);

        if (meta.category) {
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

    private getText(component: Component): string {
        return component.text;
    }

    private onComponentSelected(component: Component): void {
        this.$store.dispatch(ModulActions.COMPONENT_GET, component.tag);
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

    private isRubric(item: Overview): boolean {
        return this.isOverviewType(item, 'rubric');
    }

    private isDo(item: Overview): boolean {
        return this.isOverviewType(item, 'do');
    }

    private isDont(item: Overview): boolean {
        return this.isOverviewType(item, 'dont');
    }

    private getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }

    private getAttributes(meta: ComponentMeta): string[] {
        return Meta.getComponentAttributes(meta);
    }

    private getAttribute(tag: string): ComponentAttribute | undefined {
        let result: ComponentAttribute | undefined;

        if (this.state.component && this.state.component.attributes) {
            result = this.state.component.attributes[tag];
        }

        return result;
    }

    private getValues(attribute: ComponentAttribute): string[] {
        if (attribute.type == BOOLEAN_TYPE) {
            return ['true', 'false'];
        } else {
            return attribute.values;
        }
    }

    private isDefault(attribute: ComponentAttribute, value: any): boolean {
        if (attribute.default) {
            return attribute.type == BOOLEAN_TYPE ? attribute.default.toString() == value : attribute.default == value;
        } else {
            return attribute.type == BOOLEAN_TYPE ? value == 'false' : attribute.default == value;
        }
    }

    private getValuesCount(attribute: ComponentAttribute): number {
        if (attribute.type == BOOLEAN_TYPE) {
            return 2;
        } else {
            return attribute.values.length;
        }
    }

    private isOverviewType(item: Overview, type: OverviewType): boolean {
        return item.type == type;
    }

    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPONENT_GET, this.$route.meta);
    }
}
