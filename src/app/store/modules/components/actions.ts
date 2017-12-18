import Vue from 'vue';
import { Action, ActionContext } from 'vuex';
import { ComponentsState } from './components-state';
import * as Mutations from './mutations';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Messages, { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { RestAdapter } from '@ulaval/modul-components/dist/utils/http/rest';
import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';

interface MarkdownPayload {
    restAdapter: RestAdapter;
    markdown: string;
}

declare const __webpack_public_path__: string;

export const COMPONENTS_META_GET: string = 'A_COMPONENTS_META_GET';
export const getComponentsMetaAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.metaLanguageLoaded || context.state.metaLanguageLoaded != language) {
            context.commit(Mutations.COMPONENTS_META_GET);

            (require as any).ensure(['../../../meta/meta-fr'], () => {
                let languageModule = require('../../../meta/meta-fr');
                Vue.use(languageModule.default);

                context.commit(Mutations.COMPONENTS_META_GET_SUCCESS, FRENCH);

                if (context.state.component) {
                    context.commit(Mutations.COMPONENT_GET, context.state.component.tag);
                }

                resolve();
            });
        } else {
            resolve();
        }
    });
};

export const COMPONENT_GET: string = 'A_COMPONENT_GET';
export const getComponentAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, tag: string) => {
    if (context.state.component == null || context.state.component.tag != tag) {
        let meta: ComponentMeta = Meta.getMetaByTag(tag);
        context.commit(Mutations.CATEGORY_GET, meta.category);
        context.commit(Mutations.COMPONENT_GET, tag);
    }
};

export const COMPONENT_OVERVIEW_GET: string = 'A_COMPONENT_OVERVIEW_GET';
export const getComponentOverviewAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, markdown: MarkdownPayload) => {
    if (context.state.componentMarkdownOverview == null && context.state.component.overview) {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `${__webpack_public_path__}assets/md/${context.state.component.overview}.fr.md` }).then((md) => {
            context.commit(Mutations.COMPONENT_OVERVIEW_GET_SUCCESS, (md as any).data);
        });
    }
};

export const COMPONENT_PREVIEW_GET: string = 'A_COMPONENT_PREVIEW_GET';
export const getComponentPreviewAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, markdown: MarkdownPayload) => {
    if (context.state.componentMarkdownPreview == null && typeof context.state.component.preview === 'string') {
        markdown.restAdapter.execute({ method: 'get', rawUrl: `${__webpack_public_path__}assets/md/${context.state.component.tag}.preview.fr.md` }).then((md) => {
            context.commit(Mutations.COMPONENT_PREVIEW_GET_SUCCESS, (md as any).data);
        });
    }
};

export const MESSAGES_GET: string = 'A_MESSAGES_GET';
export const getMessagesAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, language: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.messagesLanguageLoaded || context.state.messagesLanguageLoaded != language) {
            context.commit(Mutations.MESSAGES_GET);

            (require as any).ensure(['../../../lang/fr/fr'], () => {
                let languageModule = require('../../../lang/fr/fr');
                Vue.use(languageModule.default);
                context.commit(Mutations.MESSAGES_GET_SUCCESS, FRENCH);
                resolve();
            });
        } else {
            resolve();
        }
    });
};

export const ICONS_GET: string = 'A_ICONS_GET';
export const getIconsAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, icons: string) => {
    return new Promise((resolve, reject) => {
        if (!context.state.iconsLoaded || context.state.iconsLoaded != icons) {
            context.commit(Mutations.ICONS_GET);

            (require as any).ensure(['../../../utils/svg'], () => {
                let svgModule = require('../../../utils/svg');
                Vue.use(svgModule.default);
                context.commit(Mutations.ICONS_GET_SUCCESS, icons);
                resolve();
            });
        } else {
            resolve();
        }
    });
};
