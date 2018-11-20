import Component from 'vue-class-component';
import * as PagesActions from '../../store/modules/pages/actions';
import * as PagesGetters from '../../store/modules/pages/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './page-details.html?style=./page-details.scss';

@WithRender
@Component
export class PageDetails extends ModulWebsite {
    private get section(): string {
        return this.$store.getters[PagesGetters.GET_SECTION] + '/';
    }

    private get page(): string {
        return this.$store.getters[this.section + PagesGetters.GET_PAGE];
    }

    private get tabs(): string | null {
        return this.$store.getters[this.section + PagesGetters.GET_TABS];
    }

    private get currentTab(): string | null {
        return this.$store.getters[this.section + PagesGetters.GET_TAB];
    }

    private getRoute(tabId: string): string {
        return this.$routerIndex.for(tabId, _ => this.page);
    }

    private getKey(tabId: string): string {
        return `pages:${this.page}.${tabId}`;
    }

    private onClick(tabId: string): void {
        this.$store.dispatch(this.section + PagesActions.TAB_GET, tabId);
    }
}
