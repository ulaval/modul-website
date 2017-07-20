import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-properties.html?style=./component-properties.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';

const BOOLEAN_TYPE: string = 'boolean';

@WithRender
@Component
export class ComponentProperties extends ModulWebsite {

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

    private isDefault(attribute: ComponentAttribute, value: any): boolean {
        if (attribute.default) {
            return attribute.type == BOOLEAN_TYPE ? attribute.default.toString() == value : attribute.default == value;
        } else {
            return attribute.type == BOOLEAN_TYPE ? value == 'false' : attribute.default == value;
        }
    }

    private getValues(attribute: ComponentAttribute): string[] {
        if (attribute.type == BOOLEAN_TYPE) {
            return ['true', 'false'];
        } else {
            return attribute.values;
        }
    }

    private getValuesCount(attribute: ComponentAttribute): number {
        if (attribute.type == BOOLEAN_TYPE) {
            return 2;
        } else {
            return attribute.values.length;
        }
    }
}
