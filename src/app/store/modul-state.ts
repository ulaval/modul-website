import { ComponentRoute } from './components-meta-state';
import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export type ComponentRouteMap = {
    [key: string]: ComponentRoute;
};

export class ModulState {
    public metaLoaded: string | undefined = undefined;
    public languageLoaded: string | undefined = undefined;
    public iconsLoaded: string | undefined = undefined;

    public componentRoutes: ComponentRouteMap = {};
    public component: ComponentMeta | undefined = undefined;
    public category: string | undefined = undefined;
}
