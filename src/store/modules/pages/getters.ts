import { Getter } from 'vuex';
import { PagesState } from './pages-state';
import { SectionsState } from './sections-state';

export const GET_SECTIONS: string = 'G_GET_SECTIONS';
export const getSections: Getter<SectionsState, SectionsState> = (state: SectionsState, getters) => {
    return state.sections;
};

export const GET_SECTION: string = 'G_GET_SECTION';
export const getSection: Getter<SectionsState, SectionsState> = (state: SectionsState, getters) => {
    return state.section;
};

export const GET_PAGES_TEXT: string = 'G_GET_PAGES_TEXT';
export const getPagesText: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.pagesText;
};

export const GET_PAGE: string = 'G_GET_PAGE';
export const getPage: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.page;
};

export const GET_TABS: string = 'G_GET_TABS';
export const getTabs: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tabs;
};

export const GET_TAB: string = 'G_GET_TAB';
export const getTab: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tab;
};

export const GET_MARKDOWN_SUMMARY: string = 'G_GET_MARKDOWN_SUMMARY';
export const getMarkdownSummary: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.pageSummaryMarkdown;
};

export const GET_MARKDOWN_TAB: string = 'G_GET_MARKDOWN_TAB';
export const getMarkdownTab: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tabMarkdown;
};
