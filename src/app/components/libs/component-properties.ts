import { GET_COMPONENT } from '@/app/store/modules/components/getters';
import Meta, { ComponentAttribute } from '@ulaval/modul-components/dist/meta/meta';
import Component from 'vue-class-component';

import MetaAll, { ComponentMetaEx, ModulComponentStatus } from '../../meta/meta-all';
import { ModulWebsite } from '../modul-website';
import WithRender from './component-properties.html?style=./component-properties.scss';

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

    private get hasAttributes(): boolean {
        return Meta.getComponentAttributes(this.component).length != 0;
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

    private getValues(attribute: ComponentAttribute): string {
        let values = [];
        if (attribute.type == BOOLEAN_TYPE) {
            values = ['true', 'false'];
        } else {
            if (attribute.values && attribute.values.length > 0) {
                values = [...attribute.values];
            } else {
                values = ['-'];
            }
        }
        return values.map((value) => value.replace('-', '&#8209;')).join('&nbsp;/ ');
    }

    private getValuesCount(attribute: ComponentAttribute): number {
        if (attribute.type == BOOLEAN_TYPE) {
            return 2;
        } else {
            return attribute.values.length;
        }
    }

    private get showDescription(): boolean {
        return (process.env && (process.env.NODE_ENV as any).dev) || this.component['status'] == ModulComponentStatus.Production;
    }
}
