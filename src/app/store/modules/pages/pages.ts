import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, ModuleTree, Dispatch, DispatchOptions } from 'vuex';
import { PagesState } from './pages-state';
import * as Actions from './actions';
import * as Getters from './getters';
import * as Mutations from './mutations';

const pagesState: PagesState = new PagesState();
const mutations: MutationTree<PagesState> = {
    // Pages
    // [Mutations.PAGES_META_GET]: Mutations.getPagesMeta,
    [Mutations.PAGES_META_GET_SUCCESS]: Mutations.getPagesMetaSucces,
    // Category
    [Mutations.PAGE_GET]: Mutations.getPage,
    // Page markdown overview
    [Mutations.TAB_GET]: Mutations.getTab,
    [Mutations.PAGE_SUMMARY_GET_SUCCESS]: Mutations.getPageSummarySuccess,
    // Page markdown summary
    // [Mutations.PAGE_PREVIEW_GET_SUCCESS]: Mutations.getPagePreviewSuccess,
    // Messages
    // [Mutations.MESSAGES_GET]: Mutations.getMessages,
    // [Mutations.MESSAGES_GET_SUCCESS]: Mutations.getMessagesSucces
};

const actions: ActionTree<PagesState, PagesState> = {
    // Pages
    [Actions.PAGES_META_GET]: Actions.getPagesMetaAction,
    // Page
    [Actions.PAGE_GET]: Actions.getPageAction,
    [Actions.PAGE_SUMMARY_GET]: Actions.getPageSummaryAction,
    // [Actions.PAGE_PREVIEW_GET]: Actions.getPagePreviewAction
};

const getters: GetterTree<PagesState, PagesState> = {
    // [Getters.GET_CATEGORIES_SORTED]: Getters.getCategoriesSorted,
    // [Getters.GET_CATEGORIES_TEXT]: Getters.getCategoriesText,
    // [Getters.GET_CATEGORY]: Getters.getCategory,
    // [Getters.GET_CATEGORY_ROUTES]: Getters.getCategoryRoutes,
    // [Getters.GET_PAGES]: Getters.getPages,
    [Getters.GET_PAGES_TEXT]: Getters.getPagesText,
    [Getters.GET_PAGE]: Getters.getPage,
    [Getters.GET_PAGE_ROUTES]: Getters.getPageRoutes,
    // [Getters.GET_COMPONENT_META]: Getters.getComponentMeta,
    // [Getters.GET_MARKDOWN_PREVIEW]: Getters.getMarkdownPreview,
    [Getters.GET_MARKDOWN_SUMMARY]: Getters.getMarkdownSummary
};

export const pages = {
    // namespaced: true,
    state: pagesState,
    mutations:  mutations,
    actions:  actions,
    getters:  getters,
    strict: true
};
