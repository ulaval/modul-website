import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ModulState } from './modul-state';
import { ModulMutations } from './mutations';
import Meta from 'modul-components/dist/meta';

export class ModulActions {
    public static COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';

    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static getComponentsMetaAction: Action<ModulState, ModulState> = (context: ActionContext<ModulState, ModulState>, language: string) => {
        context.commit(ModulMutations.COMPONENTS_META_GET);

        return (require as any).ensure(['modul-components/dist/meta-fr'], () => {
            let a = require('modul-components/dist/meta-fr');
            Vue.use(a.default, Meta);
            context.commit(ModulMutations.COMPONENTS_META_GET_SUCCES);

            if (context.state.composantState != null) {
                context.dispatch(ModulActions.COMPOSANT_GET, context.state.composantState.tag);
            }
        });
    }

    public static getComposantAction: Action<ModulState, ModulState> = (context: ActionContext<ModulState, ModulState>, tag: any) => {
        context.commit(ModulMutations.COMPOSANT_GET, Meta.getMetaByLanguageAndTag('fr', tag));
    }
}
