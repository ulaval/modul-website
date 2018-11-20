import * as strUtils from '@ulaval/modul-components/dist/utils/str/str';
import { Getter } from 'vuex';
import { ComponentsState } from './components-state';

export const GET_CATEGORIES_SORTED: string = 'G_GET_CATEGORIES_SORTED';
export const getCategoriesSorted: Getter<ComponentsState, ComponentsState> = (state: ComponentsState) => {
    return Object.keys(state.categoriesText).filter(key => state.categoriesText.hasOwnProperty(key)).sort((a, b) => {
        let left: string = strUtils.normalizeString(state.categoriesText[a]);
        let right: string = strUtils.normalizeString(state.categoriesText[b]);
        return left < right ? -1 : (left > right ? 1 : 0);
    });
};

export const GET_CATEGORIES_TEXT: string = 'G_GET_CATEGORIES_TEXT';
export const getCategoriesText: Getter<ComponentsState, ComponentsState> = (state: ComponentsState) => {
    return state.categoriesText;
};

export const GET_CATEGORY: string = 'G_GET_GET_CATEGORY';
export const getCategory: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.category;
};

export const GET_COMPONENTS_SORTED_BY_CATEGORY: string = 'G_GET_COMPONENTS_SORTED_BY_CATEGORY';
export const getComponentsSortedByCategory: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, category: string) => {
    return Object.keys(state.componentsText).filter(key => state.componentsText.hasOwnProperty(key)).sort((a, b) => {
        let left: string = strUtils.normalizeString(state.componentsText[a]);
        let right: string = strUtils.normalizeString(state.componentsText[b]);
        return left < right ? -1 : (left > right ? 1 : 0);
    });
};

export const GET_COMPONENTS_TEXT: string = 'G_GET_COMPONENT_TEXT';
export const getComponentsText: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.componentsText;
};

export const GET_COMPONENT: string = 'G_GET_COMPONENT';
export const getComponent: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.component;
};

// getter for preview markdown
export const GET_MARKDOWN_PREVIEW: string = 'G_GET_MARKDOWN_PREVIEW';
export const getMarkdownPreview: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.componentMarkdownPreview;
};

export const GET_MARKDOWN_OVERVIEW: string = 'G_GET_MARKDOWN_OVERVIEW';
export const getMarkdownOverview: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.componentMarkdownOverview;
};

export const GET_COMPONENT_META: string = 'G_GET_COMPONENT_META';
export const getComponentMeta: Getter<ComponentsState, ComponentsState> = (state: ComponentsState, getters) => {
    return state.component;
};
