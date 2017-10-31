import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { PagesState } from './pages-state';
import * as Mutations from './mutations';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Messages, { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { RestAdapter } from '@ulaval/modul-components/dist/utils/http/rest';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import { Tab } from '@/app/components/pages/page';

interface MarkdownPayload {
    restAdapter: RestAdapter;
    markdown: string;
}

export const PAGES_META_GET: string = 'A_PAGES_META_GET';
export const getPagesMetaAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, payload) => {
    return new Promise((resolve, reject) => {
        context.commit(Mutations.PAGES_META_GET_SUCCESS, payload);

        if (context.state.tab) {
            context.commit(Mutations.TAB_GET, context.state.tab.id);
        }

        resolve();

    });
};

export const PAGE_GET: string = 'A_PAGE_GET';
export const getPageAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, id: string) => {
    if (context.state.page == null || context.state.page != id) {

        // let meta: ComponentMeta = Meta.getMetaByTag(tag);
        context.commit(Mutations.PAGE_GET, id);
        // context.commit(Mutations.COMPONENT_GET, tag);
    }
};

export const PAGE_SUMMARY_GET: string = 'A_PAGE_SUMMARY_GET';
export const getPageSummaryAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
    if (context.state.pageSummaryMarkdown == null && context.state.page) {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `/app/content/${context.state.page}/${context.state.page}.summary.fr.md` }).then((md) => {
            context.commit(Mutations.PAGE_SUMMARY_GET_SUCCESS, (md as any).data);
        });
    }
};

export const PAGE_TABS_GET: string = 'A_PAGE_TABS_GET';
export const getPageTabsAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, tabs: Tab[]) => {
    if (context.state.tabs == null) {
        context.commit(Mutations.PAGE_TABS_GET, tabs);
    }
};

// export const COMPONENT_PREVIEW_GET: string = 'A_COMPONENT_PREVIEW_GET';
// export const getComponentPreviewAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
//     if (context.state.componentMarkdownPreview == null && typeof context.state.component.preview === 'string') {
//         markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/${context.state.component.tag}.preview.fr.md` }).then((md) => {
//             context.commit(Mutations.COMPONENT_PREVIEW_GET_SUCCESS, (md as any).data);
//         });
//     }
// };