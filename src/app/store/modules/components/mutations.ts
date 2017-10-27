import Vue from 'vue';
import { Mutation, Getter } from 'vuex';
import { ComponentsState } from './components-state';
import { ROUTES, COMPONENTS } from '../../../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export const MESSAGES_GET: string = 'MESSAGES_GET';
export const MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

export const ICONS_GET: string = 'ICONS_GET';
export const ICONS_GET_SUCCESS: string = 'ICONS_GET_SUCCESS';

export const COMPONENTS_META_GET: string = 'M_COMPONENTS_META_GET';
export const getComponentsMeta: Mutation<ComponentsState> = (state: ComponentsState) => {
    state.metaLanguageLoaded = null;
    state.componentRoutes = {};
};

export const COMPONENTS_META_GET_SUCCESS: string = 'M_COMPONENTS_META_GET_SUCCES';
export const getComponentsMetaSucces: Mutation<ComponentsState> = (state: ComponentsState, language: string) => {
    let i18n: Messages = (Vue as any).$i18n;
    let componentUrlPart: string = '/' + ROUTES[COMPONENTS] + '/';

    Meta.getCategories().forEach(category => {
        state.categoriesText[category] = i18n.translate(category);

        state.categoryRoutes[category] = {
            url: componentUrlPart + ROUTES[category],
            name: state.categoriesText[category]
        };

        Meta.getMetaByCategory(category).forEach(meta => {
            state.componentRoutes[meta.tag] = {
                url: componentUrlPart + ROUTES[category] + '/' + meta.tag,
                name: meta.name ? meta.name : ''
            };
        });
    });

    state.metaLanguageLoaded = language;
};

export const CATEGORY_GET: string = 'M_CATEGORY_GET';
export const getCategory: Mutation<ComponentsState> = (state: ComponentsState, category: string) => {
    if (category != undefined && Object.keys(category).length > 0) {
        state.category = category;

        state.componentsText = {};

        let i18n: Messages = (Vue as any).$i18n;
        Meta.getMetaByCategory(category).forEach(meta => {
            state.componentsText[meta.tag] = meta.name ? i18n.translate(meta.name) : meta.tag;
        });
    }
};

export const COMPONENT_GET: string = 'M_COMPONENT_GET';
export const getComponent: Mutation<ComponentsState> = (state: ComponentsState, tag: string) => {
    let meta: ComponentMeta = Meta.getMetaByTag(tag);
    state.component = meta;
    state.componentMarkdownOverview = null;
    state.componentMarkdownPreview = null;
};

export const COMPONENT_OVERVIEW_GET_SUCCESS: string = 'M_COMPONENT_OVERVIEW_GET_SUCCESS';
export const getComponentOverviewSuccess: Mutation<ComponentsState> = (state: ComponentsState, markdown: string) => {
    state.componentMarkdownOverview = markdown;
};

export const COMPONENT_PREVIEW_GET_SUCCESS: string = 'M_COMPONENT_PREVIEW_GET_SUCCESS';
export const getComponentPreviewSuccess: Mutation<ComponentsState> = (state: ComponentsState, markdown: string) => {
    state.componentMarkdownPreview = markdown;
};

// Messages
export const getMessages: Mutation<ComponentsState> = (state: ComponentsState) => {
    state.messagesLanguageLoaded = null;
};

export const getMessagesSucces: Mutation<ComponentsState> = (state: ComponentsState, language: string) => {
    state.messagesLanguageLoaded = language;
};

// Icons
export const getIcons: Mutation<ComponentsState> = (state: ComponentsState) => {
    state.iconsLoaded = null;
};

export const getIconsSucces: Mutation<ComponentsState> = (state: ComponentsState, icons: string) => {
    state.iconsLoaded = icons;
};

    // public static getPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    //     return state.componentMarkdownPreview;
    // }
