import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export interface RouteInfo {
    url: string;
    name: string;
}

export type RouteMap = {
    [key: string]: RouteInfo;
};

export class ModulState {
    public metaLoaded: string | undefined = undefined;
    public languageLoaded: string | undefined = undefined;
    public iconsLoaded: string | undefined = undefined;

    public categoryRoutes: RouteMap = {};
    public componentRoutes: RouteMap = {};
    public component: ComponentMeta | undefined = undefined;
    public category: string | undefined = undefined;
}
