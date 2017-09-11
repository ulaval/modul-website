import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, Dispatch, DispatchOptions } from 'vuex';
import { ModulState } from './modul-state';
import * as ModulActions from './actions';
import * as ModulGetters from './getters';
import { ModulMutations } from './mutations';

Vue.use(Vuex);

class ModulStore extends Vuex.Store<ModulState> {
    public async dispatchAsync(type: string, payload?: any, options?: DispatchOptions): Promise<any[]> {
        return await this.dispatch(type, payload, options);
    }
}

const modulState: ModulState = new ModulState();
const mutations: MutationTree<ModulState> = {
    // Components
    [ModulMutations.COMPONENTS_META_GET]: ModulMutations.getComponentsMeta,
    [ModulMutations.COMPONENTS_META_GET_SUCCESS]: ModulMutations.getComponentsMetaSucces,
    // Category
    [ModulMutations.CATEGORY_GET]: ModulMutations.getCategory,
    // Component markdown overview
    [ModulMutations.COMPONENT_GET]: ModulMutations.getComponent,
    [ModulMutations.COMPONENT_DOCUMENTATION_GET]: ModulMutations.getComponentOverview,
    [ModulMutations.COMPONENT_DOCUMENTATION_GET_SUCCESS]: ModulMutations.getComponentOverviewSuccess,
    // component markdown preview
    [ModulMutations.COMPONENT_PREVIEW_GET]: ModulMutations.getComponentPreview,
    [ModulMutations.COMPONENT_PREVIEW_GET_SUCCESS]: ModulMutations.getComponentPreviewSuccess,
    // Messages
    [ModulMutations.MESSAGES_GET]: ModulMutations.getMessages,
    [ModulMutations.MESSAGES_GET_SUCCESS]: ModulMutations.getMessagesSucces,
    // Icons
    [ModulMutations.ICONS_GET]: ModulMutations.getIcons,
    [ModulMutations.ICONS_GET_SUCCESS]: ModulMutations.getIconsSucces
};

const actions: ActionTree<ModulState, ModulState> = {
    // Components
    [ModulActions.COMPONENTS_META_GET]: ModulActions.getComponentsMetaAction,
    // Category
    [ModulActions.CATEGORY_GET]: ModulActions.getCategoryAction,
    // Component
    [ModulActions.COMPONENT_GET]: ModulActions.getComponentAction,
    [ModulActions.COMPONENT_DOCUMENTATION_GET]: ModulActions.getComponentDocumentationAction,
    [ModulActions.COMPONENT_PREVIEW_GET]: ModulActions.getComponentPreviewAction,
    // Messages
    [ModulActions.MESSAGES_GET]: ModulActions.getMessagesAction,
    // Icons
    [ModulActions.ICONS_GET]: ModulActions.getIconsAction
};

const getters: GetterTree<ModulState, ModulState> = {
    [ModulGetters.GET_COMPONENT_META]: ModulGetters.getComponentMeta,
    [ModulGetters.GET_MARKDOWN_PREVIEW]: ModulGetters.getMarkdownPreview,
    [ModulGetters.GET_MARKDOWN_DOCUMENTATION]: ModulGetters.getMarkdownDocumentation
};

const store: ModulStore = new ModulStore({
    // strict: true, // TODO debug mode only
    state: modulState,
    mutations: mutations,
    actions: actions,
    getters: getters,
    strict: true
});

export default store;
