import { ComponentMetaEx } from '../../../meta/meta-all';

// export interface RouteInfo {
//     url: string;
//     name: string;
// }

// export type RouteMap = {
//     [key: string]: RouteInfo;
// };

export type KeyMap = {
    [key: string]: string
};

export class ComponentsState {
    public metaLanguageLoaded: string | null = null;
    public messagesLanguageLoaded: string | null = null;
    public iconsLoaded: string | null = null;

    // public categoryRoutes: RouteMap = {};
    // public componentRoutes: RouteMap = {};
    public categoriesText: KeyMap = {};
    public componentsText: KeyMap = {};

    public component: ComponentMetaEx | null = null;
    public componentMarkdownPreview: string | null = null;
    public componentMarkdownOverview: string | null = null;
    public category: string | null = null;
}
