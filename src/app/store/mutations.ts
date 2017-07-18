import Vue from 'vue';
import { Mutation } from 'vuex';
import { ModulState } from './modul-state';
import { ROUTES, COMPONENTS } from '../router';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

export class ModulMutations {
    public static COMPONENTS_META_GET: string = 'COMPONENTS_META_GET';
    public static COMPONENTS_META_GET_SUCCESS: string = 'COMPONENTS_META_GET_SUCCES';

    public static CATEGORY_GET: string = 'CATEGORY_GET';
    public static COMPONENT_GET: string = 'COMPOSANT_GET';

    public static MESSAGES_GET: string = 'MESSAGES_GET';
    public static MESSAGES_GET_SUCCESS: string = 'MESSAGES_GET_SUCCESS';

    public static ICONS_GET: string = 'ICONS_GET';
    public static ICONS_GET_SUCCESS: string = 'ICONS_GET_SUCCESS';

    // Components - COMPONENTS_META_GET
    public static getComponentsMeta: Mutation<ModulState> = (state: ModulState) => {
        state.metaLoaded = undefined;
        state.componentRoutes = {};
    }

    // Components - COMPONENTS_META_GET_SUCCESS
    public static getComponentsMetaSucces: Mutation<ModulState> = (state: ModulState, language: string) => {
        let i18n: Messages = (Vue as any).$i18n;
        let componentUrlPart: string = '/' + ROUTES[COMPONENTS] + '/';

        Meta.getCategories().forEach(category => {
            state.categoryRoutes[category] = {
                url: componentUrlPart + ROUTES[category],
                name: i18n.translate(category)
            };

            Meta.getMetaByCategory(category).forEach(meta => {
                state.componentRoutes[meta.tag] = {
                    url: componentUrlPart + ROUTES[category] + '/' + meta.tag,
                    name: meta.name ? meta.name : ''
                };
            });
        });

        state.metaLoaded = language;
    }

    // Category - CATEGORY_GET
    public static getCategory: Mutation<ModulState> = (state: ModulState, category: string) => {
        state.category = category;
    }

    // Component - COMPONENT_GET
    public static getComponent: Mutation<ModulState> = (state: ModulState, component: ComponentMeta) => {
        state.component = component;
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
