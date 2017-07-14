import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ModulState } from './modul-state';
import { ModulMutations } from './mutations';
import Meta from '@ulaval/modul-components/dist/meta/meta';
import Messages, { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';

export const COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
export const CATEGORY_GET: string = 'CATEGORY_GET';
export const COMPONENT_GET: string = 'COMPONENT_GET';
export const MESSAGES_GET: string = 'MESSAGES_GET';
export const ICONS_GET: string = 'ICONS_GET';

// COMPONENTS_META_GET
export const getComponentsMetaAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.metaLoaded || context.state.metaLoaded != language) {
            context.commit(ModulMutations.COMPONENTS_META_GET);

            (require as any).ensure(['@ulaval/modul-components/dist/meta/meta-fr'], () => {
                let languageModule = require('@ulaval/modul-components/dist/meta/meta-fr');
                Vue.use(languageModule.default);

                context.commit(ModulMutations.COMPONENTS_META_GET_SUCCESS, FRENCH);

                if (context.state.component) {
                    context.dispatch(COMPONENT_GET, context.state.component.tag);
                }

                resolve();
            });
        }
    });
};

// CATEGORY_GET
export const getCategoryAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, category: string) => {
    context.commit(ModulMutations.CATEGORY_GET, category);
};

// COMPONENT_GET
export const getComponentAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, tag: string) => {
    context.commit(ModulMutations.COMPONENT_GET, Meta.getMetaByTag(tag));
};

// MESSAGES_GET
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

// ICONS_GET
export const getIconsAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, icons: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.iconsLoaded || context.state.iconsLoaded != icons) {
            context.commit(ModulMutations.ICONS_GET);

            (require as any).ensure(['../utils/svg'], () => {
                let svgModule = require('../utils/svg');
                Vue.use(svgModule.default);
                context.commit(ModulMutations.ICONS_GET_SUCCESS, icons);
                resolve();
            });
        }
    });
};
