import { ComponentRoute } from './components-meta-state';
import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export class ModulState {
    public metaLoaded: string | undefined = undefined;
    public languageLoaded: string | undefined = undefined;
    public iconsLoaded: string | undefined = undefined;
    public componentRoutes: ComponentRoute[] = [];
    public composantState: ComponentMeta | undefined = undefined;
}
