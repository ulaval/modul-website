import Vue from 'vue';
import { Getter } from 'vuex';
import { PagesState } from './pages-state';

export const GET_PAGES_TEXT: string = 'G_GET_PAGES_TEXT';
export const getPagesText: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.pagesText;
};

export const GET_PAGE: string = 'G_GET_PAGE';
export const getPage: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.page;
};

export const GET_PAGE_ROUTES: string = 'G_GET_PAGES_ROUTES';
export const getPageRoutes: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.pageRoutes;
};

export const GET_TABS: string = 'G_GET_TABS';
export const getTabs: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tabs;
};

export const GET_MARKDOWN_SUMMARY: string = 'G_GET_MARKDOWN_SUMMARY';
export const getMarkdownSummary: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.pageSummaryMarkdown;
};

export const GET_MARKDOWN_TAB: string = 'G_GET_MARKDOWN_TAB';
export const getMarkdownTab: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tabMarkdown;
};

export const GET_COMPONENT_META: string = 'G_GET_COMPONENT_META';
export const getComponentMeta: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tab;
};
