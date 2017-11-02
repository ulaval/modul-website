import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './page-details.html?style=./page-details.scss';
import { ModulWebsite } from '../modul-website';
import { ROUTES, STANDARDS } from '@/app/router';
import * as PagesActions from '@/app/store/modules/pages/actions';
import * as PagesGetters from '@/app/store/modules/pages/getters';

@WithRender
@Component
export class PageDetails extends ModulWebsite {
    private get page(): string {
        return this.$store.getters[PagesGetters.GET_PAGE];
    }

    private get tabs(): string | null {
        return this.$store.getters[PagesGetters.GET_TABS];
    }

    private get currentTab(): string | null {
        return this.$store.getters[PagesGetters.GET_TAB];
    }

    private getRoute(tabId: string): string {
        return `/${ROUTES[STANDARDS]}/${ROUTES[this.page]}/${ROUTES[tabId]}`;
    }

    private getKey(tabId: string): string {
        return `name:${this.page}.${tabId}`;
    }

    private onClick(tabId: string): void {
        this.$store.dispatch(PagesActions.TAB_GET, tabId);
    }
}
