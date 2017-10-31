import Vue from 'vue';
import { Mutation, Getter } from 'vuex';
import { PagesState } from './pages-state';
import { ROUTES, STANDARDS } from '../../../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { Page, Tab } from '@/app/components/pages/page';

// export const MESSAGES_GET: string = 'MESSAGES_GET';
// export const MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

export const PAGES_META_GET_SUCCESS: string = 'M_PAGES_META_GET_SUCCESS';
export const getPagesMetaSucces: Mutation<PagesState> = (state: PagesState, payload) => {
    let i18n: Messages = (Vue as any).$i18n;
    let pageUrlPart: string = '/' + ROUTES[STANDARDS] + '/';

    state.metaLanguageLoaded = null;
    state.tagRoutes = {};

    payload.sectionObj.getPages().forEach(page => {
        state.pagesText[page] = i18n.translate('name:' + page);

        state.pageRoutes[page] = {
            url: pageUrlPart + ROUTES[page],
            name: state.pagesText[page]
        };

        payload.sectionObj.getPageTabs(page).forEach(tab => {
            state.tabsText[tab.id] = i18n.translate(`name:${page}.${tab.id}`);
            state.tagRoutes[tab.id] = {
                url: pageUrlPart + ROUTES[page] + '/' + tab.id,
                name: tab.id ? state.tabsText[tab.id] : ''
            };
        });
    });

    state.metaLanguageLoaded = payload.language;
};

export const PAGE_GET: string = 'M_PAGE_GET';
export const getPage: Mutation<PagesState> = (state: PagesState, idPage: string) => {
    if (idPage != undefined && Object.keys(idPage).length > 0) {
        state.page = idPage;

        state.tabs = null;
        state.tabsText = {};
        state.pageSummaryMarkdown = null;

        let i18n: Messages = (Vue as any).$i18n;
        // Meta.getMetaByCategory(category).forEach(meta => {
        //     state.componentsText[meta.tag] = meta.name ? i18n.translate(meta.name) : meta.tag;
        // });
    }
};

export const TAB_GET: string = 'M_TAB_GET';
export const getTab: Mutation<PagesState> = (state: PagesState, tag: string) => {
    let meta: ComponentMeta = Meta.getMetaByTag(tag);
    // state.tab = meta;
    state.tabMarkdown = null;
};

export const PAGE_SUMMARY_GET_SUCCESS: string = 'M_PAGE_SUMMARY_GET_SUCCESS';
export const getPageSummarySuccess: Mutation<PagesState> = (state: PagesState, markdown: string) => {
    state.pageSummaryMarkdown = markdown;
};

export const PAGE_TABS_GET: string = 'M_PAGE_TABS_GET';
export const getPageTabs: Mutation<PagesState> = (state: PagesState, tabs: Tab[]) => {
    state.tabs = tabs;
};

// export const COMPONENT_PREVIEW_GET_SUCCESS: string = 'M_COMPONENT_PREVIEW_GET_SUCCESS';
// export const getComponentPreviewSuccess: Mutation<PagesState> = (state: PagesState, markdown: string) => {
//     state.componentMarkdownPreview = markdown;
// };

// // Messages
// export const getMessages: Mutation<PagesState> = (state: PagesState) => {
//     state.messagesLanguageLoaded = null;
// };

// export const getMessagesSucces: Mutation<PagesState> = (state: PagesState, language: string) => {
//     state.messagesLanguageLoaded = language;
// };

    // public static getPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    //     return state.componentMarkdownPreview;
    // }
