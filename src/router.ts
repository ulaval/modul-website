import Meta from '@ulaval/modul-components/dist/meta/meta';
import { Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { VueRouter } from 'vue-router/types/router';
import { Category } from './components/libs/category';
import { CategoryList } from './components/libs/category-list';
import { ComponentViewer } from './components/libs/component';
import { ComponentDetails } from './components/libs/component-details';
import { ComponentEvents } from './components/libs/component-events';
import { ComponentOverview } from './components/libs/component-overview';
import { ComponentProperties } from './components/libs/component-properties';
import { ComponentSlots } from './components/libs/component-slots';
import MetaAll from './meta/meta-all';
import { MWHomePage } from './pages/home/home';
import { MWPhilosophyPage } from './pages/philosophy/philosophy';
import { MWStandardsPage } from './pages/standards/standards';
import { MWStandardsUiColorsPage } from './pages/standards/standards-ui/colors/standards-ui-colors';

declare module 'vue/types/vue' {
    interface Vue {
        $routerIndex: RouteIndex;
    }
}

Vue.use(Router);
Vue.use(MetaAll, Meta);

export interface RoutePath {
    path: string;
    hasParent: boolean;
    staticParent: string | undefined;
}

export type RoutePathMap = {
    [key: string]: RoutePath;
};

export type ParentCallbackFn = (key: string) => string | undefined;

export class RouteIndex {
    constructor(private index: RoutePathMap) {
    }

    public for(key: string, parentKeyCallback?: ParentCallbackFn): string {
        let result: string = '';
        let k: string = key;

        while (k) {
            let path: RoutePath = this.index[k];
            k = undefined;
            if (path) {
                result = path.path + '/' + result;

                if (path.hasParent) {
                    if (!parentKeyCallback && !path.staticParent) {
                        throw new Error(`Parent callback must be provided for key ${key}`);
                    } else {
                        k = parentKeyCallback ? parentKeyCallback(k) : path.staticParent;
                    }
                }
            }
        }
        return result;
    }
}

export interface ModulRouter {
    index: RouteIndex;
    router: VueRouter;
}

// must match router.<lang>.json
export const ROUTER_COMPONENTS: string = 'router:components';
export const ROUTER_PROPERTIES: string = 'router:properties';
export const ROUTER_SLOTS: string = 'router:slots';
export const ROUTER_EVENTS: string = 'router:events';
export const ROUTER_OVERVIEW: string = 'router:overview';
export const ROUTER_PHILOSOPHY: string = 'router:philosophy';
export const ROUTER_STANDARDS: string = 'router:standards';
export const ROUTER_STANDARDS_DEVELOPMENT: string = 'router:standards-development';
export const ROUTER_STANDARDS_EDITORIAL: string = 'router:standards-editorial';
export const ROUTER_STANDARDS_UI: string = 'router:standards-ui';
export const ROUTER_STANDARDS_UI_COLORS: string = 'router:standards-ui-colors';

type RouterFactoryFn = () => ModulRouter;
type PushRouteFn = (key: string, routesConfig: RouteConfig[], config: RouteConfig, staticParent?: string) => RouteConfig;

const routerFactory: RouterFactoryFn = () => {

    const modulRoutes: RouteConfig[] = [];
    const categoryRoutes: RouteConfig[] = [];

    const componentRoutes: RouteConfig[] = [];
    const standardsRoutes: RouteConfig[] = [];

    let i18n: Messages = Vue.prototype.$i18n;
    let componentsRoute: string = i18n.translate(ROUTER_COMPONENTS);
    let propertiesRoute: string = i18n.translate(ROUTER_PROPERTIES);
    let slotsRoute: string = i18n.translate(ROUTER_SLOTS);
    let eventsRoute: string = i18n.translate(ROUTER_EVENTS);

    let overviewRoute: string = i18n.translate(ROUTER_OVERVIEW);

    let routeIndex: RoutePathMap = {};

    let pushRoute: PushRouteFn = (key, routesConfig, config, staticParent) => {
        if (routesConfig) {
            routesConfig.push(config);
        }
        let routePath: RoutePath = {
            path: config.path,
            hasParent: config.path.length === 0 || config.path[0] !== '/',
            staticParent: staticParent
        };
        if (routePath.staticParent && !routePath.hasParent) {
            throw new Error('Static parent should not be provided if route path is not a child path');
        }
        routeIndex[key] = routePath;
        return config;
    };

    MetaAll.getCategories().forEach(category => {
        let categoryRoute: string = i18n.translate(category + '-route');

        pushRoute(category, categoryRoutes, {
            path: categoryRoute,
            meta: { page: category },
            component: CategoryList
        }, ROUTER_COMPONENTS);

        // /all is not used, but serves as parent for all components (master/detail view)
        // /category (root level) displays another view
        pushRoute(category + '-all', modulRoutes, {
            path: `/${componentsRoute}/${categoryRoute}/all`,
            component: ComponentViewer,
            children: componentRoutes
        });

        MetaAll.getMetaByCategory(category).forEach(componentMeta => {
            let config: RouteConfig = pushRoute(componentMeta.tag, componentRoutes, {
                path: `/${componentsRoute}/${categoryRoute}/${componentMeta.tag}`,
                meta: { page: componentMeta.tag },
                component: ComponentDetails
            });
            config.children = [];
            pushRoute(ROUTER_SLOTS, config.children, {
                path: slotsRoute,
                meta: {
                    page: componentMeta.tag,
                    type: ROUTER_SLOTS
                },
                component: ComponentSlots
            });
            pushRoute(ROUTER_EVENTS, config.children, {
                path: eventsRoute,
                meta: {
                    page: componentMeta.tag,
                    type: ROUTER_EVENTS
                },
                component: ComponentEvents
            });
            pushRoute(ROUTER_PROPERTIES, config.children, {
                path: propertiesRoute,
                meta: {
                    page: componentMeta.tag,
                    type: ROUTER_PROPERTIES
                },
                component: ComponentProperties
            });
            pushRoute(ROUTER_OVERVIEW, config.children, {
                path: overviewRoute,
                meta: {
                    page: componentMeta.tag,
                    type: ROUTER_OVERVIEW
                },
                component: ComponentOverview
            });
            config.children.push({
                path: '',
                redirect: overviewRoute
            });
        });
    });

    // let gettingStartedRoute: string = i18n.translate(`pages:${GettingStarted.section}-route`);
    // GettingStarted.getPages().forEach((page, index) => {
    //     let pageRoute: string = i18n.translate(`pages:${page}-route`);

    //     pushRoute(page, gettingStartedRoutes, {
    //         path: `/${gettingStartedRoute}/${pageRoute}`,
    //         meta: { page: page, sectionObj: GettingStarted },
    //         component: PageDetails
    //     });

    //     let tabs: string[] = GettingStarted.getPageTabs(page);

    //     if (tabs.length > 0) {
    //         gettingStartedRoutes[index].children = [];

    //         let defaultTabRoute: string = '';
    //         tabs.forEach((tab, tabIndex) => {
    //             let tabRoute: string = i18n.translate(`pages:${page}.${tab}-route`);

    //             pushRoute(tab, gettingStartedRoutes[index].children, {
    //                 path: tabRoute,
    //                 meta: { page: page, sectionObj: GettingStarted, tab: tab },
    //                 component: PageTab
    //             });

    //             if (tabIndex == 0) {
    //                 defaultTabRoute = tabRoute;
    //             }
    //         });

    //         gettingStartedRoutes[index].children.push({
    //             path: '',
    //             redirect: defaultTabRoute
    //         });
    //     }
    // });

    // let standardRoute: string = i18n.translate(`pages:${Standards.section}-route`);
    // Standards.getPages().forEach((page, index) => {
    //     let pageRoute: string = i18n.translate(`pages:${page}-route`);

    //     pushRoute(page, standardsRoutes, {
    //         path: `/${standardRoute}/${pageRoute}`,
    //         meta: { page: page, sectionObj: Standards },
    //         component: PageDetails
    //     });

    //     let tabs: string[] = Standards.getPageTabs(page);

    //     if (tabs.length > 0) {
    //         standardsRoutes[index].children = [];

    //         let defaultTabRoute: string = '';
    //         tabs.forEach((tab, tabIndex) => {
    //             let tabRoute: string = i18n.translate(`pages:${page}.${tab}-route`);

    //             pushRoute(tab, standardsRoutes[index].children, {
    //                 path: tabRoute,
    //                 meta: { page: page, sectionObj: Standards, tab: tab },
    //                 component: PageTab
    //             });

    //             if (tabIndex === 0) {
    //                 defaultTabRoute = tabRoute;
    //             }
    //         });

    //         standardsRoutes[index].children.push({
    //             path: '',
    //             redirect: defaultTabRoute
    //         });
    //     }
    // });

    pushRoute('/', modulRoutes, {
        path: '/',
        component: MWHomePage
    });
    pushRoute(ROUTER_COMPONENTS, modulRoutes, {
        path: '/' + componentsRoute,
        component: Category,
        children: categoryRoutes
    });
    pushRoute(ROUTER_PHILOSOPHY, modulRoutes, {
        path: '/' + i18n.translate(ROUTER_PHILOSOPHY),
        component: MWPhilosophyPage
    });
    pushRoute(ROUTER_STANDARDS, modulRoutes, {
        path: '/' + i18n.translate(ROUTER_STANDARDS),
        component: MWStandardsPage,
        children: [
            pushRoute(ROUTER_STANDARDS, undefined, { path: '', component: MWStandardsUiColorsPage }),
            pushRoute(ROUTER_STANDARDS_UI, undefined, {
                path: `${i18n.translate(ROUTER_STANDARDS_UI)}`, component: MWStandardsUiColorsPage
            }, ROUTER_STANDARDS),
            pushRoute(ROUTER_STANDARDS_UI_COLORS, undefined, {
                path: `${i18n.translate(ROUTER_STANDARDS_UI)}/${i18n.translate(ROUTER_STANDARDS_UI_COLORS)}`, component: MWStandardsUiColorsPage
            }, ROUTER_STANDARDS)
        ]
    });

    // pushRoute(Standards.section, modulRoutes, {
    //     path: '/' + standardRoute,
    //     meta: { sectionObj: Standards },
    //     component: PageViewer,
    //     children: standardsRoutes
    // });

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
        index: new RouteIndex(routeIndex)
    };
};

export default routerFactory;