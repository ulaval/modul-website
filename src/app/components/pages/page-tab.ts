import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './page-tab.html?style=./page-tab.scss';
import { ModulWebsite } from '../modul-website';
import * as PagesActions from '@/app/store/modules/pages/actions';
import * as PagesGetters from '@/app/store/modules/pages/getters';

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
