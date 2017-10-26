import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-variants.html?style=./component-variants.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ModulActions from '@/app/store/actions';

@WithRender
@Component
export class ComponentVariants extends ModulWebsite {

    protected mounted(): void {
        this.getOverview();
    }

    protected updated(): void {
        this.getOverview();
    }

    protected getOverview(): void {
        this.$store.dispatch(ModulActions.COMPONENT_OVERVIEW_GET, {
            restAdapter: this.$http
        });
    }

    private get overviewMarkdown(): string {
        return this.state.componentMarkdownOverview;
    }
}
