import Vue from 'vue';
import { Getter } from 'vuex';
import { ModulState } from './modul-state';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export const GET_CATEGORIES_SORTED: string = 'GET_CATEGORIES_SORTED';
export const getCategoriesSorted: Getter<ModulState, ModulState> = (state: ModulState) => {
    console.log('eval');
    return Object.keys(state.categoriesText).filter(key => state.categoriesText.hasOwnProperty(key)).sort((a, b) => {
        let left: string = state.categoriesText[a];
        let right: string = state.categoriesText[b];
        return left < right ? -1 : (left > right ? 1 : 0);
    });
};

// getter for preview markdown
export const GET_MARKDOWN_PREVIEW: string = 'GET_MARKDOWN_PREVIEW';
export const getMarkdownPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.componentMarkdownPreview;
};

export const GET_MARKDOWN_DOCUMENTATION: string = 'GET_MARKDOWN_DOCUMENTATION';
export const getMarkdownDocumentation: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.componentMarkdown;
};

export const GET_COMPONENT_META: string = 'GET_COMPONENT_META';
export const getComponentMeta: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
    return state.component;
};

// export class ModulGetters {
//     public static getMarkdownPreview: Getter<ModulState, ModulState> = (state: ModulState, getters) => {
//         return state.componentMarkdownPreview;
//     }
// }
