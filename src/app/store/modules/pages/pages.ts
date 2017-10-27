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
    // [Mutations.CATEGORY_GET]: Mutations.getCategory,
    // Page markdown overview
    [Mutations.TAB_GET]: Mutations.getTab
    // [Mutations.PAGE_OVERVIEW_GET_SUCCESS]: Mutations.getPageOverviewSuccess,
    // Page markdown preview
    // [Mutations.PAGE_PREVIEW_GET_SUCCESS]: Mutations.getPagePreviewSuccess,
    // Messages
    // [Mutations.MESSAGES_GET]: Mutations.getMessages,
    // [Mutations.MESSAGES_GET_SUCCESS]: Mutations.getMessagesSucces
};

const actions: ActionTree<PagesState, PagesState> = {
    // Pages
    [Actions.PAGES_META_GET]: Actions.getPagesMetaAction
    // Page
    // [Actions.PAGE_GET]: Actions.getPageAction,
    // [Actions.PAGE_OVERVIEW_GET]: Actions.getPageOverviewAction,
    // [Actions.PAGE_PREVIEW_GET]: Actions.getPagePreviewAction
};

const getters: GetterTree<PagesState, PagesState> = {
    // [Getters.GET_CATEGORIES_SORTED]: Getters.getCategoriesSorted,
    // [Getters.GET_CATEGORIES_TEXT]: Getters.getCategoriesText,
    // [Getters.GET_CATEGORY]: Getters.getCategory,
    // [Getters.GET_CATEGORY_ROUTES]: Getters.getCategoryRoutes,
    // [Getters.GET_COMPONENTS_SORTED_BY_CATEGORY]: Getters.getComponentsSortedByCategory,
    // [Getters.GET_COMPONENTS_TEXT]: Getters.getComponentsText,
    // [Getters.GET_COMPONENT]: Getters.getComponent,
    [Getters.GET_PAGE_ROUTES]: Getters.getPageRoutes
    // [Getters.GET_COMPONENT_META]: Getters.getComponentMeta,
    // [Getters.GET_MARKDOWN_PREVIEW]: Getters.getMarkdownPreview,
    // [Getters.GET_MARKDOWN_OVERVIEW]: Getters.getMarkdownOverview
};

export const pages = {
    // namespaced: true,
    state: pagesState,
    mutations:  mutations,
    actions:  actions,
    getters:  getters,
    strict: true
};
