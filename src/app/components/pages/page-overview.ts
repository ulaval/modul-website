import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './page-overview.html?style=./page-overview.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';

@WithRender
@Component
export class PageOverview extends ModulWebsite {

    protected mounted(): void {
        this.getOverview();
    }

    protected updated(): void {
        this.getOverview();
    }

    protected getOverview(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_OVERVIEW_GET, {
            restAdapter: this.$http
        });
    }

    private get overviewMarkdown(): string {
        return this.$store.getters[ComponentsGetters.GET_MARKDOWN_OVERVIEW];
    }
}
