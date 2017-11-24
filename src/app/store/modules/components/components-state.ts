import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export interface RouteInfo {
    url: string;
    name: string;
}

export type RouteMap = {
    [key: string]: RouteInfo;
};

export type KeyMap = {
    [key: string]: string
};

export class ComponentsState {
    public metaLanguageLoaded: string | null = null;
    public messagesLanguageLoaded: string | null = null;
    public iconsLoaded: string | null = null;

    public categoryRoutes: RouteMap = {};
    public componentRoutes: RouteMap = {};
    public categoriesText: KeyMap = {};
    public componentsText: KeyMap = {};

    public component: ComponentMeta | null = null;
    public componentMarkdownPreview: string | null = null;
    public componentMarkdownOverview: string | null = null;
    public category: string | null = null;
}
