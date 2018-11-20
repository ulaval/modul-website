import Component from 'vue-class-component';
import * as PagesActions from '../../store/modules/pages/actions';
import * as PagesGetters from '../../store/modules/pages/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './page-tab.html?style=./page-tab.scss';

@WithRender
@Component
export class PageTab extends ModulWebsite {

    protected mounted(): void {
        this.getTab();
    }

    protected updated(): void {
        this.getTab();
    }

    private get section(): string {
        return this.$store.getters[PagesGetters.GET_SECTION] + '/';
    }

    protected getTab(): void {
        this.$store.dispatch(this.section + PagesActions.PAGE_TAB_GET, {
            restAdapter: this.$http
        });
    }

    private get tabMarkdown(): string {
        return this.$store.getters[this.section + PagesGetters.GET_MARKDOWN_TAB];
    }
}
