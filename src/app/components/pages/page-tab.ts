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
        if (this.$route.matched[2]) {
            this.$store.dispatch(PagesActions.TAB_GET, this.$route.matched[2].props.valueOf()['default']['tab']);
        }
        this.getTab();
    }

    protected updated(): void {
        this.getTab();
    }

    protected getTab(): void {
        this.$store.dispatch(PagesActions.PAGE_TAB_GET, {
            restAdapter: this.$http
        });
    }

    private get tabMarkdown(): string {
        return this.$store.getters[PagesGetters.GET_MARKDOWN_TAB];
    }
}
