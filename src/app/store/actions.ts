import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ModulState } from './modul-state';
import { ModulMutations } from './mutations';
import Meta from 'modul-components/dist/meta/meta';
import Messages, { FRENCH } from 'modul-components/dist/utils/i18n';

export const COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
export const COMPOSANT_GET: string = 'COMPOSANT_GET';
export const MESSAGES_GET: string = 'MESSAGES_GET';

export const getComponentsMetaAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.metaLoaded || context.state.metaLoaded != language) {
            context.commit(ModulMutations.COMPONENTS_META_GET);

            (require as any).ensure(['modul-components/dist/meta/meta-fr'], () => {
                let metaModule = require('modul-components/dist/meta/meta-fr');
                Vue.use(metaModule.default, Meta);
                context.commit(ModulMutations.COMPONENTS_META_GET_SUCCESS, FRENCH);

                if (context.state.composantState) {
                    context.dispatch(COMPOSANT_GET, context.state.composantState.tag);
                }

                resolve();
            });
        }
    });
};

export const getComposantAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, tag: any) => {
    context.commit(ModulMutations.COMPOSANT_GET, Meta.getMetaByLanguageAndTag(FRENCH, tag));
};

export const getMessagesAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.languageLoaded || context.state.languageLoaded != language) {
            context.commit(ModulMutations.MESSAGES_GET);

            (require as any).ensure(['../lang/fr/fr'], () => {
                let languageModule = require('../lang/fr/fr');
                Vue.use(languageModule.default);
                context.commit(ModulMutations.MESSAGES_GET_SUCCESS, FRENCH);
                resolve();
            });
        }
    });
};
