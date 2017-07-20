import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-details.html?style=./component-details.scss';
import { ModulWebsite } from '../modul-website';
import { Watch } from 'vue-property-decorator';
import { ROUTES, COMPONENT_PROPERTIES, COMPONENT_OVERVIEW } from '@/app/router';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';

// const BOOLEAN_TYPE: string = 'boolean';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    // private htmlTag: string = '';

    private get categoryComponents(): ComponentMeta[] {
        let result: ComponentMeta[] = [];
        if (this.state.category) {
            result = Meta.getMetaByCategory(this.state.category);
        }
        return result;
    }

    private get properties(): string {
        return ROUTES[COMPONENT_PROPERTIES];
    }

    private get overview(): string {
        return ROUTES[COMPONENT_OVERVIEW];
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.state.componentRoutes[tag].url);
    }

    // private isRubric(item: Overview): boolean {
    //     return this.isOverviewType(item, 'rubric');
    // }

    // private isDo(item: Overview): boolean {
    //     return this.isOverviewType(item, 'do');
    // }

    // private isDont(item: Overview): boolean {
    //     return this.isOverviewType(item, 'dont');
    // }

    // private isOverviewType(item: Overview, type: OverviewType): boolean {
    //     return item.type == type;
    // }

    private getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }

    // private getAttributes(meta: ComponentMeta): string[] {
    //     return Meta.getComponentAttributes(meta);
    // }

    // private getAttribute(tag: string): ComponentAttribute | undefined {
    //     let result: ComponentAttribute | undefined;

    //     if (this.state.component && this.state.component.attributes) {
    //         result = this.state.component.attributes[tag];
    //     }

    //     return result;
    // }

    // private getValues(attribute: ComponentAttribute): string[] {
    //     if (attribute.type == BOOLEAN_TYPE) {
    //         return ['true', 'false'];
    //     } else {
    //         return attribute.values;
    //     }
    // }

    // private isDefault(attribute: ComponentAttribute, value: any): boolean {
    //     if (attribute.default) {
    //         return attribute.type == BOOLEAN_TYPE ? attribute.default.toString() == value : attribute.default == value;
    //     } else {
    //         return attribute.type == BOOLEAN_TYPE ? value == 'false' : attribute.default == value;
    //     }
    // }

    // private getValuesCount(attribute: ComponentAttribute): number {
    //     if (attribute.type == BOOLEAN_TYPE) {
    //         return 2;
    //     } else {
    //         return attribute.values.length;
    //     }
    // }

    private get htmlTag(): string {
        if (this.state.component) {
            return `<${this.state.component.tag}></${this.state.component.tag}>`;
        } else {
            return '';
        }
    }
}
