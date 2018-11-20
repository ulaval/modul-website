import { ActionTree, GetterTree, MutationTree } from 'vuex';
import * as Actions from './actions';
import * as Getters from './getters';
import * as Mutations from './mutations';
import { PagesState } from './pages-state';

const pagesState: PagesState = new PagesState();
const mutations: MutationTree<PagesState> = {
    // Pages
    [Mutations.PAGES_META_GET_SUCCESS]: Mutations.getPagesMetaSucces,
    // Page
    [Mutations.PAGE_GET]: Mutations.getPage,
    // Tab
    [Mutations.TAB_GET]: Mutations.getTab,
    [Mutations.PAGE_TABS_GET]: Mutations.getPageTabs,
    // Markdown
    [Mutations.PAGE_SUMMARY_GET_SUCCESS]: Mutations.getPageSummarySuccess,
    [Mutations.PAGE_TAB_GET_SUCCESS]: Mutations.getPageTabSuccess
};

const actions: ActionTree<PagesState, PagesState> = {
    // Pages
    [Actions.PAGES_META_GET]: Actions.getPagesMetaAction,
    [Actions.PAGE_GET]: Actions.getPageAction,
    [Actions.PAGE_SUMMARY_GET]: Actions.getPageSummaryAction,
    [Actions.PAGE_TABS_GET]: Actions.getPageTabsAction,
    [Actions.TAB_GET]: Actions.getTabAction,
    [Actions.PAGE_TAB_GET]: Actions.getPageTabAction
};

const getters: GetterTree<PagesState, PagesState> = {
    [Getters.GET_PAGES_TEXT]: Getters.getPagesText,
    [Getters.GET_PAGE]: Getters.getPage,
    [Getters.GET_TABS]: Getters.getTabs,
    [Getters.GET_TAB]: Getters.getTab,
    [Getters.GET_MARKDOWN_SUMMARY]: Getters.getMarkdownSummary,
    [Getters.GET_MARKDOWN_TAB]: Getters.getMarkdownTab
};

export const pages = {
    namespaced: true,
    state: pagesState,
    mutations: mutations,
    actions: actions,
    getters: getters,
    strict: true
};
