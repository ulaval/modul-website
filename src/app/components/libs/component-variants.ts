import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-variants.html?style=./component-variants.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';

@WithRender
@Component
export class ComponentVariants extends ModulWebsite {

    protected mounted(): void {
        this.getVariant();
    }

    protected updated(): void {
        this.getVariant();
    }

    protected getVariant(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_VARIANT_GET, {
            restAdapter: this.$http
        });
    }

    private get variantwMarkdown(): string {
        return this.$store.getters[ComponentsGetters.GET_MARKDOWN_VARIANT];
    }
}
