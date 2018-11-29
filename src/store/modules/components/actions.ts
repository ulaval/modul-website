import Meta from '@ulaval/modul-components/dist/meta/meta';
import { RestAdapter } from '@ulaval/modul-components/dist/utils/http/rest';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { Action, ActionContext } from 'vuex';
import { CATEGORY_MIXINS, ComponentMetaEx } from '../../../meta/meta-all';
import { ComponentsState } from './components-state';
import * as Mutations from './mutations';

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
                //     let languageModule = require('../../../meta/meta-fr');
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
        let meta: ComponentMetaEx = Meta.getMetaByTag(tag) as ComponentMetaEx;
        context.commit(Mutations.CATEGORY_GET, meta.category);
        context.commit(Mutations.COMPONENT_GET, tag);
    }
};

export const COMPONENT_OVERVIEW_GET: string = 'A_COMPONENT_OVERVIEW_GET';
export const getComponentOverviewAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, markdown: MarkdownPayload) => {
    if (context.state.componentMarkdownOverview == null) {
        let category: string = context.state.category == CATEGORY_MIXINS ? 'mixins' : 'components';
        let url: string = process.env && (process.env.NODE_ENV as any).dev ?
            `${__webpack_public_path__}app/meta/${category}/${context.state.component.folder}/${context.state.component.overview}.fr.md` :
            `${__webpack_public_path__}assets/md/${context.state.component.overview}.fr.md`;
        markdown.restAdapter.execute({ method: 'get', rawUrl: url }).then((md) => {
            context.commit(Mutations.COMPONENT_OVERVIEW_GET_SUCCESS, (md as any).data);
        });
    }
};

export const COMPONENT_PREVIEW_GET: string = 'A_COMPONENT_PREVIEW_GET';
export const getComponentPreviewAction: Action<ComponentsState, ComponentsState> = async (context: ActionContext<ComponentsState, ComponentsState>, markdown: MarkdownPayload) => {
    if (context.state.componentMarkdownPreview == null && typeof context.state.component.preview === 'string') {
        let category: string = context.state.category == CATEGORY_MIXINS ? 'mixins' : 'components';
        let url: string = process.env && (process.env.NODE_ENV as any).dev ?
            `${__webpack_public_path__}app/meta/${category}/${context.state.component.folder}/${context.state.component.preview}.fr.md` :
            `${__webpack_public_path__}assets/md/${context.state.component.preview}.fr.md`;
        markdown.restAdapter.execute({ method: 'get', rawUrl: url }).then((md) => {
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

                context.commit(Mutations.ICONS_GET_SUCCESS, icons);
                resolve();
            });
        } else {
            resolve();
        }
    });
};
