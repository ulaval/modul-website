import { ComponentRoute } from './components-meta-state';
import { ComponentMeta } from 'modul-components/dist/meta';

export class ModulState {
    public componentRoutes: ComponentRoute[] = [];
    public composantState: ComponentMeta | undefined = undefined;
}
