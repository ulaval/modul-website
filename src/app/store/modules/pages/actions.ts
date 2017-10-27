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

        if (context.state.tab) {
            context.commit(Mutations.TAB_GET, context.state.tab.id);
        }

        resolve();

    });
};

// export const COMPONENT_GET: string = 'A_COMPONENT_GET';
// export const getComponentAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, tag: string) => {
//     if (context.state.component == null || context.state.component.tag != tag) {
//         let meta: ComponentMeta = Meta.getMetaByTag(tag);
//         context.commit(Mutations.CATEGORY_GET, meta.category);
//         context.commit(Mutations.COMPONENT_GET, tag);
//     }
// };

// export const COMPONENT_OVERVIEW_GET: string = 'A_COMPONENT_OVERVIEW_GET';
// export const getComponentOverviewAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
//     if (context.state.componentMarkdownOverview == null && context.state.component.overview) {
//         markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/${context.state.component.overview}.fr.md` }).then((md) => {
//             context.commit(Mutations.COMPONENT_OVERVIEW_GET_SUCCESS, (md as any).data);
//         });
//     }
// };

// export const COMPONENT_PREVIEW_GET: string = 'A_COMPONENT_PREVIEW_GET';
// export const getComponentPreviewAction: Action<PagesState, PagesState> = async (context: ActionContext<PagesState, PagesState>, markdown: MarkdownPayload) => {
//     if (context.state.componentMarkdownPreview == null && typeof context.state.component.preview === 'string') {
//         markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/${context.state.component.tag}.preview.fr.md` }).then((md) => {
//             context.commit(Mutations.COMPONENT_PREVIEW_GET_SUCCESS, (md as any).data);
//         });
//     }
// };
