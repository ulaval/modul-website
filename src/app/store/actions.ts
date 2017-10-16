import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ModulState } from './modul-state';
import * as ModulMutations from './mutations';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Messages, { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { RestAdapter } from '@ulaval/modul-components/dist/utils/http/rest';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';

interface MarkdownPayload {
    restAdapter: RestAdapter;
    markdown: string;
}

export const COMPONENTS_META_GET: string = 'A_COMPONENTS_META_GET';
export const getComponentsMetaAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.metaLanguageLoaded || context.state.metaLanguageLoaded != language) {
            context.commit(ModulMutations.COMPONENTS_META_GET);

            (require as any).ensure(['../meta/meta-fr'], () => {
                let languageModule = require('../meta/meta-fr');
                Vue.use(languageModule.default);

                context.commit(ModulMutations.COMPONENTS_META_GET_SUCCESS, FRENCH);

                if (context.state.component) {
                    context.commit(ModulMutations.COMPONENT_GET, context.state.component.tag);
                }

                resolve();
            });
        }
    });
};

export const COMPONENT_GET: string = 'A_COMPONENT_GET';
export const getComponentAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, tag: string) => {
    if (context.state.component == null || context.state.component.tag != tag) {
        let meta: ComponentMeta = Meta.getMetaByTag(tag);
        context.commit(ModulMutations.CATEGORY_GET, meta.category);
        context.commit(ModulMutations.COMPONENT_GET, tag);
    }
};

export const COMPONENT_OVERVIEW_GET: string = 'A_COMPONENT_OVERVIEW_GET';
export const getComponentOverviewAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, markdown: MarkdownPayload) => {
    // context.commit(ModulMutations.COMPONENT_OVERVIEW_GET);
    if (context.state.componentMarkdownOverview == null && context.state.component.overview) {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/${context.state.component.overview}.fr.md` }).then((md) => {
            context.commit(ModulMutations.COMPONENT_OVERVIEW_GET_SUCCESS, (md as any).data);
        });
    }
};

export const COMPONENT_PREVIEW_GET: string = 'A_COMPONENT_PREVIEW_GET';
export const getComponentPreviewAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, markdown: MarkdownPayload) => {
    // context.commit(ModulMutations.COMPONENT_PREVIEW_GET);
    if (context.state.componentMarkdownPreview == null && typeof context.state.component.preview === 'string') {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `/assets/md/${context.state.component.preview}.fr.md` }).then((md) => {
            context.commit(ModulMutations.COMPONENT_PREVIEW_GET_SUCCESS, (md as any).data);
        });
    }
};

export const MESSAGES_GET: string = 'A_MESSAGES_GET';
export const getMessagesAction: Action<ModulState, ModulState> = async (context: ActionContext<ModulState, ModulState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.messagesLanguageLoaded || context.state.messagesLanguageLoaded != language) {
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

export const ICONS_GET: string = 'A_ICONS_GET';
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
