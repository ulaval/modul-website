import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { HomePage } from './components/home/home';
import { CategoryList } from './components/libs/category-list';
import { Category } from './components/libs/category';
import { ComponentViewer } from './components/libs/component';
import { ComponentDetails } from './components/libs/component-details';
import { ComponentOverview } from './components/libs/component-overview';
import { ComponentProperties } from './components/libs/component-properties';
import { PageViewer } from './components/pages/pages';
import { PageDetails } from './components/pages/page-details';
import { PageTab } from './components/pages/page-tab';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Meta from '@ulaval/modul-components/dist/meta/meta';
import MetaAll, {
    CATEGORY_CONTENT, CATEGORY_FORMS, CATEGORY_LAYOUT, CATEGORY_NAVIGATION, CATEGORY_WINDOWS
} from './meta/meta-all';
import { Standards, GettingStarted } from '@/app/components/pages/page';
import { log } from 'util';
import { VueRouter } from 'vue-router/types/router';

console.warn('TODO: detect lang (or add route FR/EN basepath');

console.warn('TODO: declare $routerIndex');
declare module 'vue/types/vue' {
    interface Vue {
        $routerIndex: RoutePathMap;
    }
}

Vue.use(Router);
Vue.use(MetaAll, Meta);

export type RoutePathMap = {
    [key: string]: string;
};

// export const GETTING_STARTED: string = 'router:getting-started';
// export const GETTING_STARTED_COMPUTER_SETUP: string = 'computer-setup';
// export const GETTING_STARTED_SOURCE_CODE: string = 'source-code';
// export const GETTING_STARTED_FRONTEND_ARCHITECTURE: string = 'frontend-architecture';
// export const GETTING_STARTED_RELEASE_TRACKING: string = 'release-tracking';
// export const COMPONENTS: string = 'router:components';
// export const STANDARDS: string = 'standards';
// export const UNIFIED_EXPERIENCE: string = 'unified-experience';
// export const UNIFIED_EXPERIENCE_OVERVIEW: string = 'overview-unified-experience';
// export const RESPONSIVE_DESIGN: string = 'responsive-design';
// export const RESPONSIVE_DESIGN_OVERVIEW: string = 'overview-responsive-design';
// export const WRITING_STANDARDS: string = 'writing-standards';
// export const WRITING_STANDARDS_EDITORIAL_TONE: string = 'editorial-tone';
// export const WRITING_STANDARDS_FORMAT: string = 'formats';
// export const WRITING_STANDARDS_GLOSSARY: string = 'glossary';
// export const WRITING_STANDARDS_MESSAGE_BANK: string = 'message-bank';
// export const WRITING_STANDARDS_PUNCTUATION: string = 'punctuation';
// export const VISUAL_STANDARDS: string = 'visual-standards';
// export const VISUAL_STANDARDS_COLORS: string = 'colors';
// export const VISUAL_STANDARDS_ICONOGRAPHY: string = 'iconography';
// export const VISUAL_STANDARDS_IMAGES_VIDEOS: string = 'images-videos';
// export const VISUAL_STANDARDS_TYPOGRAPHY_STYLES: string = 'typography-styles';
// export const CODING_STANDARDS: string = 'coding-standards';
// export const CODING_STANDARDS_ACCESIBILITY: string = 'accessibility';
// export const CODING_STANDARDS_CSS_SASS: string = 'css-sass';
// export const CODING_STANDARDS_TYPESCRIPT: string = 'typescript';
// export const ECOSYSTEM: string = 'router:ecosystem';
// export const COMPONENT_PROPERTIES: string = 'router:properties';
// export const COMPONENT_OVERVIEW: string = 'router:overview';
// export const COMPONENT_VARIANT: string = 'COMPONENT_VARIANT';

// export const GETTING_STARTED_FR: string = 'premier-pas';
// export const GETTING_STARTED_COMPUTER_SETUP_FR: string = 'poste-developpeur';
// export const GETTING_STARTED_SOURCE_CODE_FR: string = 'github';
// export const GETTING_STARTED_FRONTEND_ARCHITECTURE_FR: string = 'architecture-frontend';
// export const GETTING_STARTED_RELEASE_TRACKING_FR: string = 'suivi-versions';
// export const COMPONENTS_FR: string = 'composants';
// export const STANDARDS_FR: string = 'normes';
// export const UNIFIED_EXPERIENCE_FR: string = 'experience-unifiee';
// export const UNIFIED_EXPERIENCE_OVERVIEW_FR: string = '';
// export const RESPONSIVE_DESIGN_FR: string = 'design-adaptatif';
// export const RESPONSIVE_DESIGN_OVERVIEW_FR: string = '';
// export const WRITING_STANDARDS_FR: string = 'normes-editoriales';
// export const WRITING_STANDARDS_EDITORIAL_TONE_FR: string = 'ton-redactionnel';
// export const WRITING_STANDARDS_FORMAT_FR: string = 'formats';
// export const WRITING_STANDARDS_GLOSSARY_FR: string = 'glossaire';
// export const WRITING_STANDARDS_MESSAGE_BANK_FR: string = 'banque-messages';
// export const WRITING_STANDARDS_PUNCTUATION_FR: string = 'ponctuation';
// export const VISUAL_STANDARDS_FR: string = 'normes-graphiques';
// export const VISUAL_STANDARDS_COLORS_FR: string = 'couleurs-themes';
// export const VISUAL_STANDARDS_ICONOGRAPHY_FR: string = 'iconographie';
// export const VISUAL_STANDARDS_IMAGES_VIDEOS_FR: string = 'images-videos';
// export const VISUAL_STANDARDS_TYPOGRAPHY_STYLES_FR: string = 'typographie-styles';
// export const CODING_STANDARDS_FR: string = 'normes-developpement';
// export const CODING_STANDARDS_ACCESIBILITY_FR: string = 'accessibilite';
// export const CODING_STANDARDS_CSS_SASS_FR: string = 'css-sass';
// export const CODING_STANDARDS_TYPESCRIPT_FR: string = 'typescript';
// export const ECOSYSTEM_FR: string = 'ecosysteme';

// export const CATEGORY_CONTENT_FR: string = 'contenu';
// export const CATEGORY_FORMS_FR: string = 'formulaires';
// export const CATEGORY_LAYOUT_FR: string = 'disposition';
// export const CATEGORY_NAVIGATION_FR: string = 'navigation';
// export const CATEGORY_WINDOWS_FR: string = 'fenetres';

// export const COMPONENT_PROPERTIES_FR: string = 'proprietes';
// export const COMPONENT_OVERVIEW_FR: string = 'portrait';

// export const ROUTES: RoutePathMap = {
//     // [GETTING_STARTED]: GETTING_STARTED_FR,
//     // [GETTING_STARTED_COMPUTER_SETUP]: GETTING_STARTED_COMPUTER_SETUP_FR,
//     // [GETTING_STARTED_SOURCE_CODE]: GETTING_STARTED_SOURCE_CODE_FR,
//     // [GETTING_STARTED_FRONTEND_ARCHITECTURE]: GETTING_STARTED_FRONTEND_ARCHITECTURE_FR,
//     // [GETTING_STARTED_RELEASE_TRACKING]: GETTING_STARTED_RELEASE_TRACKING_FR,
//     // [COMPONENTS]: COMPONENTS_FR,
//     // [STANDARDS]: STANDARDS_FR,
//     // [UNIFIED_EXPERIENCE]: UNIFIED_EXPERIENCE_FR,
//     // [UNIFIED_EXPERIENCE_OVERVIEW]: UNIFIED_EXPERIENCE_OVERVIEW_FR,
//     // [RESPONSIVE_DESIGN]: RESPONSIVE_DESIGN_FR,
//     // [RESPONSIVE_DESIGN_OVERVIEW]: RESPONSIVE_DESIGN_OVERVIEW_FR,
//     // [WRITING_STANDARDS]: WRITING_STANDARDS_FR,
//     // [WRITING_STANDARDS_EDITORIAL_TONE]: WRITING_STANDARDS_EDITORIAL_TONE_FR,
//     // [WRITING_STANDARDS_FORMAT]: WRITING_STANDARDS_FORMAT_FR,
//     // [WRITING_STANDARDS_GLOSSARY]: WRITING_STANDARDS_GLOSSARY_FR,
//     // [WRITING_STANDARDS_MESSAGE_BANK]: WRITING_STANDARDS_MESSAGE_BANK_FR,
//     // [WRITING_STANDARDS_PUNCTUATION]: WRITING_STANDARDS_PUNCTUATION_FR,
//     // [VISUAL_STANDARDS]: VISUAL_STANDARDS_FR,
//     // [VISUAL_STANDARDS_COLORS]: VISUAL_STANDARDS_COLORS_FR,
//     // [VISUAL_STANDARDS_ICONOGRAPHY]: VISUAL_STANDARDS_ICONOGRAPHY_FR,
//     // [VISUAL_STANDARDS_IMAGES_VIDEOS]: VISUAL_STANDARDS_IMAGES_VIDEOS_FR,
//     // [VISUAL_STANDARDS_TYPOGRAPHY_STYLES]: VISUAL_STANDARDS_TYPOGRAPHY_STYLES_FR,
//     // [CODING_STANDARDS]: CODING_STANDARDS_FR,
//     // [CODING_STANDARDS_ACCESIBILITY]: CODING_STANDARDS_ACCESIBILITY_FR,
//     // [CODING_STANDARDS_CSS_SASS]: CODING_STANDARDS_CSS_SASS_FR,
//     // [CODING_STANDARDS_TYPESCRIPT]: CODING_STANDARDS_TYPESCRIPT_FR,
// //    [ECOSYSTEM]: ECOSYSTEM_FR
//     // [COMPONENT_PROPERTIES]: COMPONENT_PROPERTIES_FR,
//     // [COMPONENT_OVERVIEW]: COMPONENT_OVERVIEW_FR
//     // [CATEGORY_CONTENT]: CATEGORY_CONTENT_FR,
//     // [CATEGORY_FORMS]: CATEGORY_FORMS_FR,
//     // [CATEGORY_LAYOUT]: CATEGORY_LAYOUT_FR,
//     // [CATEGORY_NAVIGATION]: CATEGORY_NAVIGATION_FR,
//     // [CATEGORY_WINDOWS]: CATEGORY_WINDOWS_FR
// };

export interface ModulRouter {
    index: RoutePathMap;
    router: VueRouter;
}

// must match router.<lang>.json
export const ROUTER_COMPONENTS: string = 'router:components';
export const ROUTER_PROPERTIES: string = 'router:properties';
export const ROUTER_OVERVIEW: string = 'router:overview';
export const ROUTER_ECOSYSTEM: string = 'router:ecosystem';

type RouterFactoryFn = () => ModulRouter;
type PushRouteFn = (key: string, routesConfig: RouteConfig[], config: RouteConfig) => RouteConfig;

let modulRouter: ModulRouter;
const routerFactory: RouterFactoryFn = () => {

    const modulRoutes: RouteConfig[] = [];
    const categoryRoutes: RouteConfig[] = [];
    const gettingStartedRoutes: RouteConfig[] = [];
    const componentRoutes: RouteConfig[] = [];
    const standardsRoutes: RouteConfig[] = [];

    let i18n: Messages = Vue.prototype.$i18n;
    let componentsRoute: string = i18n.translate(ROUTER_COMPONENTS);
    let propertiesRoute: string = i18n.translate(ROUTER_PROPERTIES);
    let overviewRoute: string = i18n.translate(ROUTER_OVERVIEW);

    let routeIndex: RoutePathMap = {};

    let pushRoute: PushRouteFn = (key, routesConfig, config) => {
        routesConfig.push(config);
        routeIndex[key] = config.path;
        return config;
    };

    Meta.getCategories().forEach(category => {
        let categoryRoute: string = i18n.translate(category + '-route');

        pushRoute(category, categoryRoutes, {
            path: categoryRoute,
            meta: { page: category },
            component: CategoryList
        });

        pushRoute(category + '-all', modulRoutes, {
            path: `/${componentsRoute}/${categoryRoute}/all`,
            component: ComponentViewer,
            children: componentRoutes
        });

        Meta.getMetaByCategory(category).forEach(componentMeta => {
            let config: RouteConfig = pushRoute(componentMeta.tag, componentRoutes, {
                path: `/${componentsRoute}/${categoryRoute}/${componentMeta.tag}`,
                meta: { page: componentMeta.tag },
                component: ComponentDetails
            });
            config.children = [];
            pushRoute(ROUTER_PROPERTIES, config.children, {
                path: propertiesRoute,
                meta: { page: componentMeta.tag },
                component: ComponentProperties
            });
            pushRoute(ROUTER_OVERVIEW, config.children, {
                path: overviewRoute,
                meta: { page: componentMeta.tag },
                component: ComponentOverview
            });
            config.children.push({
                path: '',
                redirect: overviewRoute
            });
        });
    });

    let gettingStartedRoute: string = i18n.translate(`pages:${GettingStarted.section}-route`);
    GettingStarted.getPages().forEach((page, index) => {
        let pageRoute: string = i18n.translate(`pages:${page}-route`);

        pushRoute(page, gettingStartedRoutes, {
            path: `/${gettingStartedRoute}/${pageRoute}`,
            meta: { page: page, sectionObj: GettingStarted },
            component: PageDetails
        });

        let tabs: string[] = GettingStarted.getPageTabs(page);

        if (tabs.length > 0) {
            gettingStartedRoutes[index].children = [];

            let defaultTabRoute: string = '';
            tabs.forEach((tab, tabIndex) => {
                let tabRoute: string = i18n.translate(`pages:${page}.${tab}-route`);

                pushRoute(tab, gettingStartedRoutes[index].children, {
                    path: `/${gettingStartedRoute}/${pageRoute}/${tabRoute}`,
                    meta: { page: page, sectionObj: GettingStarted, tab: tab },
                    component: PageTab
                });

                if (tabIndex == 0) {
                    defaultTabRoute = tabRoute;
                }
            });

            gettingStartedRoutes[index].children.push({
                path: '',
                redirect: defaultTabRoute
            });
        }
    });

    let standardRoute: string = i18n.translate(`pages:${Standards.section}-route`);
    Standards.getPages().forEach((page, index) => {
        let pageRoute: string = i18n.translate(`pages:${page}-route`);

        pushRoute(page, standardsRoutes, {
            path: `/${standardRoute}/${pageRoute}`,
            meta: { page: page, sectionObj: Standards },
            component: PageDetails
        });

        let tabs: string[] = Standards.getPageTabs(page);

        if (tabs.length > 0) {
            standardsRoutes[index].children = [];

            let defaultTabRoute: string = '';
            tabs.forEach((tab, tabIndex) => {
                let tabRoute: string = i18n.translate(`pages:${page}.${tab}-route`);

                pushRoute(tab, standardsRoutes[index].children, {
                    path: `/${standardRoute}/${pageRoute}/${tabRoute}`,
                    meta: { page: page, sectionObj: Standards, tab: tab },
                    component: PageTab
                });

                if (tabIndex === 0) {
                    defaultTabRoute = tabRoute;
                }
            });

            standardsRoutes[index].children.push({
                path: '',
                redirect: defaultTabRoute
            });
        }
    });

    pushRoute('/', modulRoutes, {
        path: '/',
        component: HomePage
    });
    pushRoute(GettingStarted.section, modulRoutes, {
        path: '/' + gettingStartedRoute,
        meta: { page: GettingStarted.getPages()[0], sectionObj: GettingStarted },
        component: PageViewer,
        children: gettingStartedRoutes
    });
    pushRoute(ROUTER_COMPONENTS, modulRoutes, {
        path: '/' + componentsRoute,
        component: Category,
        children: categoryRoutes
    });
    pushRoute(Standards.section, modulRoutes, {
        path: '/' + standardRoute,
        meta: { sectionObj: Standards },
        component: PageViewer,
        children: standardsRoutes
    });
    pushRoute(ROUTER_ECOSYSTEM, modulRoutes, {
        path: '/' + i18n.translate(ROUTER_ECOSYSTEM),
        component: PageViewer
    });

    let vueRouter: VueRouter = new Router({
        mode: 'history',
        routes: modulRoutes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            if (to.hash) {
                return { selector: to.hash };
            }
            return { x: 0, y: 0 };
        }
    });

    return {
        router: vueRouter,
        index: routeIndex
    };
};

export default routerFactory;
