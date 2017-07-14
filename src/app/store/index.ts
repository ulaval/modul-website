import Vue from 'vue';
import Vuex, { MutationTree, Dispatch, DispatchOptions } from 'vuex';
import { ModulState } from './modul-state';
import * as ModulActions from './actions';
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
    // Component
    [ModulMutations.COMPONENT_GET]: ModulMutations.getComponent,
    // Messages
    [ModulMutations.MESSAGES_GET]: ModulMutations.getMessages,
    [ModulMutations.MESSAGES_GET_SUCCESS]: ModulMutations.getMessagesSucces,
    // Icons
    [ModulMutations.ICONS_GET]: ModulMutations.getIcons,
    [ModulMutations.ICONS_GET_SUCCESS]: ModulMutations.getIconsSucces
};

const actions: Vuex.ActionTree<ModulState, ModulState> = {
    // Components
    [ModulActions.COMPONENTS_META_GET]: ModulActions.getComponentsMetaAction,
    // Category
    [ModulActions.CATEGORY_GET]: ModulActions.getCategoryAction,
    // Component
    [ModulActions.COMPONENT_GET]: ModulActions.getComponentAction,
    // Messages
    [ModulActions.MESSAGES_GET]: ModulActions.getMessagesAction,
    // Icons
    [ModulActions.ICONS_GET]: ModulActions.getIconsAction
};

const store: ModulStore = new ModulStore({
    // strict: true, // TODO debug mode only
    state: modulState,
    mutations: mutations,
    actions: actions
});

export default store;
