import Vue from 'vue';
import { Getter } from 'vuex';
import { ModulState } from './../../modul-state';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import * as strUtils from '@ulaval/modul-components/dist/utils/str/str';

export const GET_CATEGORIES_SORTED: string = 'G_GET_CATEGORIES_SORTED';
export const getCategoriesSorted: Getter<ModulState, ModulState> = (state: ModulState) => {
    return Object.keys(state.categoriesText).filter(key => state.categoriesText.hasOwnProperty(key)).sort((a, b) => {
        let left: string = strUtils.normalizeString(state.categoriesText[a]);
        let right: string = strUtils.normalizeString(state.categoriesText[b]);
        return left < right ? -1 : (left > right ? 1 : 0);
    });
};

export const GET_COMPONENTS_SORTED_BY_CATEGORY: string = 'G_GET_COMPONENTS_SORTED_BY_CATEGORY';
export const getComponentsSortedByCategory: Getter<ModulState, ModulState> = (state: ModulState, category: string) => {
    return Object.keys(state.componentsText).filter(key => state.componentsText.hasOwnProperty(key)).sort((a, b) => {
        let left: string = strUtils.normalizeString(state.componentsText[a]);
        let right: string = strUtils.normalizeString(state.componentsText[b]);
        return left < right ? -1 : (left > right ? 1 : 0);
    });
};

// getter for preview markdown
export const GET_MARKDOWN_PREVIEW: string = 'G_GET_MARKDOWN_PREVIEW';
export const getMarkdownPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.componentMarkdownPreview;
};

export const GET_MARKDOWN_OVERVIEW: string = 'G_GET_MARKDOWN_OVERVIEW';
export const getMarkdownOverview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.componentMarkdownOverview;
};

export const GET_COMPONENT_META: string = 'G_GET_COMPONENT_META';
export const getComponentMeta: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.component;
};
