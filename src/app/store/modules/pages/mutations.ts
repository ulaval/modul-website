import Vue from 'vue';
import { Mutation, Getter } from 'vuex';
import { PagesState } from './pages-state';
import { ROUTES, STANDARDS } from '../../../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { Standards, GettingStarted } from '@/app/components/pages/page';

export const PAGES_META_GET_SUCCESS: string = 'M_PAGES_META_GET_SUCCESS';
export const getPagesMetaSucces: Mutation<PagesState> = (state: PagesState, payload) => {
    let i18n: Messages = (Vue as any).$i18n;
// Faire un get sur la section
    let pageUrlPart: string= '/' + ROUTES[STANDARDS] + '/';
    // if (payload.sectionObj === Standards) {
    //     pageUrlPart = '/' + ROUTES[STANDARDS] + '/';
    // } else {
    //     pageUrlPart = '/' + ROUTES[GETTING_STARTED] + '/';
    // }

    state.metaLanguageLoaded = null;
    state.tabRoutes = {};

    payload.sectionObj.getPages().forEach(page => {
        state.pagesText[page] = i18n.translate('name:' + page);

        state.pageRoutes[page] = {
            url: pageUrlPart + ROUTES[page],
            name: state.pagesText[page]
        };

        payload.sectionObj.getPageTabs(page).forEach(tab => {
            state.tabRoutes[tab] = {
                url: pageUrlPart + ROUTES[page] + '/' + tab,
                name: i18n.translate(`name:${page}.${tab}`)
            };
        });
    });

    state.metaLanguageLoaded = payload.language;
};

export const PAGE_GET: string = 'M_PAGE_GET';
export const getPage: Mutation<PagesState> = (state: PagesState, idPage: string) => {
    if (idPage != undefined && Object.keys(idPage).length > 0) {
        state.page = idPage;
        state.pageSummaryMarkdown = null;
    }
};

export const TAB_GET: string = 'M_TAB_GET';
export const getTab: Mutation<PagesState> = (state: PagesState, tab: string) => {
    state.tab = tab;
    state.tabMarkdown = null;
};

export const SECTION_GET: string = 'M_SECTION_GET';
export const getSection: Mutation<PagesState> = (state: PagesState, section: string) => {
    state.section = section;
};

export const PAGE_SUMMARY_GET_SUCCESS: string = 'M_PAGE_SUMMARY_GET_SUCCESS';
export const getPageSummarySuccess: Mutation<PagesState> = (state: PagesState, markdown: string) => {
    state.pageSummaryMarkdown = markdown;
};

export const PAGE_TABS_GET: string = 'M_PAGE_TABS_GET';
export const getPageTabs: Mutation<PagesState> = (state: PagesState, tabs: string[]) => {
    state.tabs = tabs;
    state.tab = null;
    state.tabMarkdown = null;
};

export const PAGE_TAB_GET_SUCCESS: string = 'M_PAGE_TAB_GET_SUCCESS';
export const getPageTabSuccess: Mutation<PagesState> = (state: PagesState, markdown: string) => {
    state.tabMarkdown = markdown;
};
