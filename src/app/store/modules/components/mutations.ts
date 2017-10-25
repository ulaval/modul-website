import Vue from 'vue';
import { Mutation, Getter } from 'vuex';
import { ModulState } from './../../modul-state';
import { ROUTES, COMPONENTS } from '../../../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export const MESSAGES_GET: string = 'MESSAGES_GET';
export const MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

export const ICONS_GET: string = 'ICONS_GET';
export const ICONS_GET_SUCCESS: string = 'ICONS_GET_SUCCESS';

export const COMPONENTS_META_GET: string = 'M_COMPONENTS_META_GET';
export const getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
    state.metaLanguageLoaded = null;
    state.componentRoutes = {};
};

export const COMPONENTS_META_GET_SUCCESS: string = 'M_COMPONENTS_META_GET_SUCCES';
export const getComponentsMetaSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
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
export const getCategory: Mutation<ModulState> = (state: ModulState, category: string) => {
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
export const getComponent: Mutation<ModulState> = (state: ModulState, tag: string) => {
    let meta: ComponentMeta = Meta.getMetaByTag(tag);
    state.component = meta;
    state.componentMarkdownOverview = null;
    state.componentMarkdownPreview = null;
};

export const COMPONENT_OVERVIEW_GET_SUCCESS: string = 'M_COMPONENT_OVERVIEW_GET_SUCCESS';
export const getComponentOverviewSuccess: Mutation<ModulState> = (state: ModulState, markdown: string) => {
    state.componentMarkdownOverview = markdown;
};

export const COMPONENT_PREVIEW_GET_SUCCESS: string = 'M_COMPONENT_PREVIEW_GET_SUCCESS';
export const getComponentPreviewSuccess: Mutation<ModulState> = (state: ModulState, markdown: string) => {
    state.componentMarkdownPreview = markdown;
};

// Messages
export const getMessages: Mutation<ModulState> = (state: ModulState) => {
    state.messagesLanguageLoaded = null;
};

export const getMessagesSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
    state.messagesLanguageLoaded = language;
};

// Icons
export const getIcons: Mutation<ModulState> = (state: ModulState) => {
    state.iconsLoaded = null;
};

export const getIconsSucces: Mutation<ModulState> = (state: ModulState, icons: string) => {
    state.iconsLoaded = icons;
};

    // public static getPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    //     return state.componentMarkdownPreview;
    // }
