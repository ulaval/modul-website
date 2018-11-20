import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Component from 'vue-class-component';
import { ModulComponentStatus } from '../../meta/meta-all';
import * as ComponentsActions from '../../store/modules/components/actions';
import * as ComponentsGetters from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './component-overview.html?style=./component-overview.scss';

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
