import { Mutation } from 'vuex';
import { ModulState } from './modul-state';
import { ComponentRoute } from './components-meta-state';
import Meta, { ComponentMeta } from 'modul-components/dist/meta';

export class ModulMutations {
    public static COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
    public static COMPONENTS_META_GET_SUCCES: string = 'COMPONENTS_META_GET_SUCCES';

    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
        state.componentRoutes = [];
    }

    public static getComponentsMetaSucces: Mutation<ModulState> = (state: ModulState) => {
        Meta.getTagsByLanguage('fr').forEach(tag => {
            let component: ComponentMeta = Meta.getMetaByLanguageAndTag('fr', tag);
            state.componentRoutes.push({
                url: '/composants/' + tag,
                name: component.name ? component.name : ''
            });
        });
    }

    public static getComposantSucces: Mutation<ModulState> = (state: ModulState, composant: ComponentMeta) => {
        state.composantState = composant;
    }
}
