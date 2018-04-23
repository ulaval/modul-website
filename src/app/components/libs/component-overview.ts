import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-overview.html?style=./component-overview.scss';
import { ModulWebsite } from '../modul-website';
import { ModulComponentStatus } from '../../meta/meta-all';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';

@WithRender
@Component
export class ComponentOverview extends ModulWebsite {

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

    private get component(): ComponentMeta | null {
        return this.$store.getters[ComponentsGetters.GET_COMPONENT];
    }

    private get isBeta(): boolean {
        return this.component['status'] == ModulComponentStatus.Beta;
    }

    private get isProd(): boolean {
        return (process.env && (process.env.NODE_ENV as any).prod);
    }
}
