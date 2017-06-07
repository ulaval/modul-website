import { Mutation } from 'vuex';
import { ModulState } from './modul-state';
import { ComponentRoute } from './components-meta-state';
import Meta, { ComponentMeta } from 'modul-components/dist/meta/meta';

export class ModulMutations {
    public static COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
    public static COMPONENTS_META_GET_SUCCESS: string = 'COMPONENTS_META_GET_SUCCES';

    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static MESSAGES_GET: string = 'MESSAGES_GET';
    public static MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

    // Components
    public static getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
        state.metaLoaded = undefined;
        state.componentRoutes = [];
    }

    public static getComponentsMetaSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
        Meta.getTagsByLanguage(language).forEach(tag => {
            let component: ComponentMeta = Meta.getMetaByLanguageAndTag(language, tag);
            state.componentRoutes.push({
                url: '/composants/' + tag,
                name: component.name ? component.name : ''
            });
        });
        state.metaLoaded = language;
    }

    // Component
    public static getComposantSucces: Mutation<ModulState> = (state: ModulState, composant: ComponentMeta) => {
        state.composantState = composant;
    }

    // Messages
    public static getMessages: Mutation<ModulState> = (state: ModulState) => {
        state.languageLoaded = undefined;
    }

    public static getMessagesSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
        state.languageLoaded = language;
    }
}
