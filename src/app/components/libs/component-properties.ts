import Component from 'vue-class-component';
import WithRender from './component-properties.html?style=./component-properties.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentAttribute } from '@ulaval/modul-components/dist/meta/meta';
import { ComponentMetaEx } from '../../meta/meta-all';
import { GET_COMPONENT } from '@/app/store/modules/components/getters';

const BOOLEAN_TYPE: string = 'boolean';

interface ComponentAttributeEx extends ComponentAttribute {
    name: string;
}

@WithRender
@Component
export class ComponentProperties extends ModulWebsite {

    private get component(): ComponentMetaEx | null {
        return this.$store.getters[GET_COMPONENT];
    }

    private get attributes(): ComponentAttributeEx[] {
        let attr: string[] = Meta.getComponentAttributes(this.component);
        return attr.map(a => {
            let attrObj: ComponentAttribute = this.component.attributes[a];
            return {
                name: a,
                description: (attrObj.origin ? (attrObj.origin as ComponentMetaEx).metaKey : this.component.metaKey) + a,
                ...attrObj
            };
        });
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
