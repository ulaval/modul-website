import { Mutation } from 'vuex';
import { ModulState } from './modul-state';
import { ComponentRoute } from './components-meta-state';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export class ModulMutations {
    public static COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
    public static COMPONENTS_META_GET_SUCCESS: string = 'COMPONENTS_META_GET_SUCCES';

    public static COMPOSANT_GET: string = 'COMPOSANT_GET';

    public static MESSAGES_GET: string = 'MESSAGES_GET';
    public static MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

    public static ICONS_GET: string = 'ICONS_GET';
    public static ICONS_GET_SUCCESS: string = 'ICONS_GET_SUCCESS';

    // Components
    public static getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
        state.metaLoaded = undefined;
        state.componentRoutes = [];
    }

    public static getComponentsMetaSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
        Meta.getTags().forEach(tag => {
            let component: ComponentMeta = Meta.getMetaByTag(tag);
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

    // Icons
    public static getIcons: Mutation<ModulState> = (state: ModulState) => {
        state.iconsLoaded = undefined;
    }

    public static getIconsSucces: Mutation<ModulState> = (state: ModulState, icons: string) => {
        state.iconsLoaded = icons;
    }
}
