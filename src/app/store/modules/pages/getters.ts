import Vue from 'vue';
import { Getter } from 'vuex';
import { PagesState } from './pages-state';
import { Page, Tab } from '@/app/components/pages/page';
import * as strUtils from '@ulaval/modul-components/dist/utils/str/str';

// export const GET_CATEGORIES_SORTED: string = 'G_GET_CATEGORIES_SORTED';
// export const getCategoriesSorted: Getter<ComponentsState, ComponentsState> = (state: ComponentsState) => {
//     return Object.keys(state.categoriesText).filter(key => state.categoriesText.hasOwnProperty(key)).sort((a, b) => {
//         let left: string = strUtils.normalizeString(state.categoriesText[a]);
//         let right: string = strUtils.normalizeString(state.categoriesText[b]);
//         return left < right ? -1 : (left > right ? 1 : 0);
//     });
// };

// export const GET_CATEGORIES_TEXT: string = 'G_GET_CATEGORIES_TEXT';
// export const getCategoriesText: Getter<ComponentsState, ComponentsState> = (state: ComponentsState) => {
//     return state.categoriesText;
// };

// export const GET_CATEGORY: string = 'G_GET_GET_CATEGORY';
// export const getCategory: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
//     return state.category;
// };

// export const GET_CATEGORY_ROUTES: string = 'G_GET_CATEGORY_ROUTES';
// export const getCategoryRoutes: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
//     return state.categoryRoutes;
// };

// export const GET_PAGES: string = 'G_GET_PAGES';
// export const getPages: Getter<PagesState, PagesState> = (state: PagesState) => {
//     return Object.keys(state.componentsText).filter(key => state.componentsText.hasOwnProperty(key)).sort((a, b) => {
//         let left: string = strUtils.normalizeString(state.componentsText[a]);
//         let right: string = strUtils.normalizeString(state.componentsText[b]);
//         return left < right ? -1 : (left > right ? 1 : 0);
//     });
// };

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

// // getter for preview markdown
// export const GET_MARKDOWN_PREVIEW: string = 'G_GET_MARKDOWN_PREVIEW';
// export const getMarkdownPreview: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
//     return state.componentMarkdownPreview;
// };

// export const GET_MARKDOWN_OVERVIEW: string = 'G_GET_MARKDOWN_OVERVIEW';
// export const getMarkdownOverview: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
//     return state.componentMarkdownOverview;
// };

export const GET_COMPONENT_META: string = 'G_GET_COMPONENT_META';
export const getComponentMeta: Getter<PagesState, PagesState> = (state: PagesState, getters) => {
    return state.tab;
};
