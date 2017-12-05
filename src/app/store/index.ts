import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, Dispatch, DispatchOptions } from 'vuex';
import { components } from './modules/components/components';
import { sections } from './modules/pages/sections';

Vue.use(Vuex);

class ModulStore extends Vuex.Store<any> {
    public async dispatchAsync(type: string, payload?: any, options?: DispatchOptions): Promise<any[]> {
        return this.dispatch(type, payload, options);
    }
}

const store: ModulStore = new ModulStore({
    strict: true, // TODO debug mode only
    modules: {
        sections: sections,
        components: components
    }
});

export default store;
