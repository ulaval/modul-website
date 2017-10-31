import Vue from 'vue';
import Component from 'vue-class-component';
// import store from './store';
import WithRender from './page-details.html?style=./page-details.scss';
import { ModulWebsite } from '../modul-website';
import { ROUTES, COMPONENT_PROPERTIES, COMPONENT_OVERVIEW } from '@/app/router';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as PagesActions from '@/app/store/modules/pages/actions';
import * as PagesGetters from '@/app/store/modules/pages/getters';

@WithRender
@Component
export class PageDetails extends ModulWebsite {

    protected beforeUpdate(): void {
        // this.$store.dispatch(ComponentsActions.COMPONENT_PREVIEW_GET, {
        //     restAdapter: this.$http
        // });
    }

    private get markdownPreview() {
        return '';
        // return this.$store.getters[PagesGetters.GET_MARKDOWN_PREVIEW];
    }

    private get page(): ComponentMeta | null {
        return this.$store.getters[PagesGetters.GET_PAGE];
    }

    private get tabs(): ComponentMeta | null {
        return this.$store.getters[PagesGetters.GET_TABS];
    }

    private get properties(): string {
        return ROUTES[COMPONENT_PROPERTIES];
    }

    private get overview(): string {
        return ROUTES[COMPONENT_OVERVIEW];
    }

    private getKey(tabId: string): string {
        return `name:${this.page}.${tabId}`;
    }

    // private get htmlTag(): string {
    //     if (this.page) {
    //         return `<${this.page}></${this.page}>`;
    //     } else {
    //         return '';
    //     }
    // }
}
