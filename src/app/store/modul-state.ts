import { ComponentRoute } from './components-meta-state';
import { ComponentMeta } from 'modul-components/dist/meta';

export class ModulState {
    public metaLoaded: string | undefined = undefined;
    public languageLoaded: string | undefined = undefined;
    public componentRoutes: ComponentRoute[] = [];
    public composantState: ComponentMeta | undefined = undefined;
}
