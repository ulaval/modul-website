import Vue from 'vue';
import { Mutation } from 'vuex';
import { SectionsState } from './sections-state';
import { PagesState } from './pages-state';
// import { ROUTES } from '../../../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';

console.warn('TODO: ulr service');

export const SECTIONS_META_GET: string = 'M_SECTIONS_META_GET';
export const getMetaSections: Mutation<SectionsState> = (state: SectionsState, payload) => {
    if (payload.sectionsObj != undefined && payload.language != undefined) {
        state.sections = payload.sectionsObj;
        state.messagesLanguageLoaded = payload.language;
    }
};

export const SECTIONS_GET: string = 'M_SECTIONS_GET';
export const getSections: Mutation<SectionsState> = (state: SectionsState, sections: string[]) => {
    if (sections != undefined) {
        state.sections = sections;
    }
};

export const SECTION_GET: string = 'M_SECTION_GET';
export const getSection: Mutation<SectionsState> = (state: SectionsState, payload) => {
    if (payload.section != undefined) {
        state.section = payload.section;
    }
    if (payload.route != undefined) {
        state.sectionRoute = payload.route;
    }
};

export const PAGES_META_GET_SUCCESS: string = 'M_PAGES_META_GET_SUCCESS';
export const getPagesMetaSucces: Mutation<PagesState> = (state: PagesState, payload) => {
    let i18n: Messages = (Vue as any).$i18n;
    let pageUrlPart: string = '/' + i18n.translate(payload.route) + '/';

    state.tabRoutes = {};

    payload.pagesObj.getPages().forEach(page => {
        state.pagesText[page] = i18n.translate(page);

        state.pageRoutes[page] = {
            url: pageUrlPart + i18n.translate(page),
            name: state.pagesText[page]
        };

        payload.pagesObj.getPageTabs(page).forEach(tab => {
            state.tabRoutes[tab] = {
                url: pageUrlPart + i18n.translate(page) + '/' + i18n.translate(tab),
                name: i18n.translate(`pages:${page}.${tab}`)
            };
        });
    });
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
