import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { PagesState } from './pages-state';
import * as Mutations from './mutations';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Messages, { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { RestAdapter } from '@ulaval/modul-components/dist/utils/http/rest';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';

interface MarkdownPayload {
    restAdapter: RestAdapter;
    markdown: string;
}

export const PAGES_META_GET: string = 'A_PAGES_META_GET';
export const getPagesMetaAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, payload) => {
    return new Promise((resolve, reject) => {
        context.commit(Mutations.PAGES_META_GET_SUCCESS, payload);
        resolve();
    });
};

export const PAGE_GET: string = 'A_PAGE_GET';
export const getPageAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, id: string) => {
    if (context.state.page == null || context.state.page != id) {
        context.commit(Mutations.PAGE_GET, id);
    }
};

export const PAGE_SUMMARY_GET: string = 'A_PAGE_SUMMARY_GET';
export const getPageSummaryAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
    if (context.state.pageSummaryMarkdown == null && context.state.page) {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/content/${context.state.page}/${context.state.page}.summary.fr.md` }).then((md) => {
            context.commit(Mutations.PAGE_SUMMARY_GET_SUCCESS, (md as any).data);
        });
    }
};

export const PAGE_TABS_GET: string = 'A_PAGE_TABS_GET';
export const getPageTabsAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, tabs: string[]) => {
    if (context.state.tabs == null || context.state.tabs != tabs) {
        context.commit(Mutations.PAGE_TABS_GET, tabs);
    }
};

export const TAB_GET: string = 'A_TAB_GET';
export const getTabAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, tab: string) => {
    if (context.state.tab == null || context.state.tab != tab) {
        context.commit(Mutations.TAB_GET, tab);
    }
};

export const PAGE_TAB_GET: string = 'A_PAGE_TAB_GET';
export const getPageTabAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
    if (context.state.tabMarkdown == null && context.state.tab) {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/content/${context.state.page}/${context.state.page}.${context.state.tab}.fr.md` }).then((md) => {
            context.commit(Mutations.PAGE_TAB_GET_SUCCESS, (md as any).data);
        });
    }
};
