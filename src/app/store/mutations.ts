import Vue from 'vue';
import { Mutation, Getter } from 'vuex';
import { ModulState } from './modul-state';
import { ROUTES, COMPONENTS } from '../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

// preview MD
export const COMPONENT_DOCUMENTATION_GET: string = 'COMPONENT_DOCUMENTATION_GET';
export const COMPONENT_DOCUMENTATION_GET_SUCCESS: string = 'COMPONENT_DOCUMENTATION_GET_SUCCESS';
export const COMPONENT_PREVIEW_GET: string = 'COMPONENT_PREVIEW_GET';
export const COMPONENT_PREVIEW_GET_SUCCESS: string = 'COMPONENT_PREVIEW_GET_SUCCESS';

export const MESSAGES_GET: string = 'MESSAGES_GET';
export const MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

export const ICONS_GET: string = 'ICONS_GET';
export const ICONS_GET_SUCCESS: string = 'ICONS_GET_SUCCESS';

export const COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
export const getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
    state.metaLoaded = undefined;
    state.componentRoutes = {};
};

export const COMPONENTS_META_GET_SUCCESS: string = 'COMPONENTS_META_GET_SUCCES';
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

    state.metaLoaded = language;
};

export const CATEGORY_GET: string = 'getCategory';
export const getCategory: Mutation<ModulState> = (state: ModulState, category: string) => {
    state.category = category;
};

export const COMPONENT_GET: string = 'COMPONENT_GET';
export const getComponent: Mutation<ModulState> = (state: ModulState, component: ComponentMeta) => {
    state.component = component;
};

// Component - COMPONENT_DOCUMENTATION_GET
export const getComponentOverview: Mutation<ModulState> = (state: ModulState) => {
    state.componentMarkdown = undefined;
};

// Component - COMPONENT_DOCUMENTATION_GET_SUCCESS
export const getComponentOverviewSuccess: Mutation<ModulState> = (state: ModulState, markdown: string) => {
    state.componentMarkdown = markdown;
};

// Component - COMPONENT_PREVIEW_GET
export const getComponentPreview: Mutation<ModulState> = (state: ModulState) => {
    state.componentMarkdownPreview = undefined;
};

// Component - COMPONENT_PREVIEW_GET_SUCCESS
export const getComponentPreviewSuccess: Mutation<ModulState> = (state: ModulState, markdown: string) => {
    state.componentMarkdownPreview = markdown;
};

// Messages
export const getMessages: Mutation<ModulState> = (state: ModulState) => {
    state.languageLoaded = undefined;
};

export const getMessagesSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
    state.languageLoaded = language;
};

// Icons
export const getIcons: Mutation<ModulState> = (state: ModulState) => {
    state.iconsLoaded = undefined;
};

export const getIconsSucces: Mutation<ModulState> = (state: ModulState, icons: string) => {
    state.iconsLoaded = icons;
};

    // public static getPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    //     return state.componentMarkdownPreview;
    // }
