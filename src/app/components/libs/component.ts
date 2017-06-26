import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import WithRender from './component.html?style=./component.scss';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from 'modul-components/dist/meta/meta';
import { ModulVue } from 'modul-components/dist/utils/vue/vue';

import { ServiceMixin } from 'modul-components/dist/services/component-meta-impl';

const BOOLEAN_TYPE: string = 'boolean';

@WithRender
@Component({
    mixins: [ServiceMixin]
})
export class ComponentViewer extends ModulVue {
    public mounted() {
        this.getMeta();
    }

    public isRubric(item: Overview): boolean {
        return this.isOverviewType(item, 'rubric');
    }

    public isDo(item: Overview): boolean {
        return this.isOverviewType(item, 'do');
    }

    public isDont(item: Overview): boolean {
        return this.isOverviewType(item, 'dont');
    }

    public getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }

    public getAttributes(meta: ComponentMeta): string[] {
        return Meta.getComponentAttributes(meta);
    }

    public getAttribute(tag: string): ComponentAttribute {
        return this.$store.state.composantState.attributes[tag];
    }

    public getValues(attribute: ComponentAttribute): string[] {
        if (attribute.type == BOOLEAN_TYPE) {
            return ['true', 'false'];
        } else {
            return attribute.values;
        }
    }

    public isDefault(attribute: ComponentAttribute, value: any): boolean {
        if (attribute.default) {
            return attribute.type == BOOLEAN_TYPE ? attribute.default.toString() == value : attribute.default == value;
        } else {
            return attribute.type == BOOLEAN_TYPE ? value == 'false' : attribute.default == value;
        }
    }

    public getValuesCount(attribute: ComponentAttribute): number {
        if (attribute.type == BOOLEAN_TYPE) {
            return 2;
        } else {
            return attribute.values.length;
        }
    }

    private isOverviewType(item: Overview, type: OverviewType): boolean {
        return item.type == type;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPOSANT_GET, this.$route.meta);
    }
}
