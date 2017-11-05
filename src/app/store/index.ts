import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, Dispatch, DispatchOptions } from 'vuex';
import { ModulState } from './modul-state';
import * as ModulActions from './actions';
import * as ModulGetters from './getters';
import * as ModulMutations from './mutations';
import { components } from './modules/components/components';
import { pages } from './modules/pages/pages';

Vue.use(Vuex);

class ModulStore extends Vuex.Store<any> {
    public async dispatchAsync(type: string, payload?: any, options?: DispatchOptions): Promise<any[]> {
        return await this.dispatch(type, payload, options);
    }
}

const store: ModulStore = new ModulStore({
    strict: true, // TODO debug mode only
    modules: {
        gettingStarted: pages,
        components: components,
        standards: pages
    }
});

export default store;
