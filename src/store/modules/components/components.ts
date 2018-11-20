import { ActionTree, GetterTree, MutationTree } from 'vuex';
import * as Actions from './actions';
import { ComponentsState } from './components-state';
import * as Getters from './getters';
import * as Mutations from './mutations';

const componentsState: ComponentsState = new ComponentsState();
const mutations: MutationTree<ComponentsState> = {
    // Components
    [Mutations.COMPONENTS_META_GET]: Mutations.getComponentsMeta,
    [Mutations.COMPONENTS_META_GET_SUCCESS]: Mutations.getComponentsMetaSucces,
    // Category
    [Mutations.CATEGORY_GET]: Mutations.getCategory,
    // Component markdown overview
    [Mutations.COMPONENT_GET]: Mutations.getComponent,
    [Mutations.COMPONENT_OVERVIEW_GET_SUCCESS]: Mutations.getComponentOverviewSuccess,
    // component markdown preview
    [Mutations.COMPONENT_PREVIEW_GET_SUCCESS]: Mutations.getComponentPreviewSuccess,
    // Messages
    [Mutations.MESSAGES_GET]: Mutations.getMessages,
    [Mutations.MESSAGES_GET_SUCCESS]: Mutations.getMessagesSucces,
    // Icons
    [Mutations.ICONS_GET]: Mutations.getIcons,
    [Mutations.ICONS_GET_SUCCESS]: Mutations.getIconsSucces
};

const actions: ActionTree<ComponentsState, ComponentsState> = {
    // Components
    [Actions.COMPONENTS_META_GET]: Actions.getComponentsMetaAction,
    // Component
    [Actions.COMPONENT_GET]: Actions.getComponentAction,
    [Actions.COMPONENT_OVERVIEW_GET]: Actions.getComponentOverviewAction,
    [Actions.COMPONENT_PREVIEW_GET]: Actions.getComponentPreviewAction,
    // Messages
    [Actions.MESSAGES_GET]: Actions.getMessagesAction,
    // Icons
    [Actions.ICONS_GET]: Actions.getIconsAction
};

const getters: GetterTree<ComponentsState, ComponentsState> = {
    [Getters.GET_CATEGORIES_SORTED]: Getters.getCategoriesSorted,
    [Getters.GET_CATEGORIES_TEXT]: Getters.getCategoriesText,
    [Getters.GET_CATEGORY]: Getters.getCategory,
    [Getters.GET_COMPONENTS_SORTED_BY_CATEGORY]: Getters.getComponentsSortedByCategory,
    [Getters.GET_COMPONENTS_TEXT]: Getters.getComponentsText,
    [Getters.GET_COMPONENT]: Getters.getComponent,
    [Getters.GET_COMPONENT_META]: Getters.getComponentMeta,
    [Getters.GET_MARKDOWN_PREVIEW]: Getters.getMarkdownPreview,
    [Getters.GET_MARKDOWN_OVERVIEW]: Getters.getMarkdownOverview
};

export const components = {
    state: componentsState,
    mutations: mutations,
    actions: actions,
    getters: getters,
    strict: true
};
