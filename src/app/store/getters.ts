import Vue from 'vue';
import { Getter } from 'vuex';
import { ModulState } from './modul-state';

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
