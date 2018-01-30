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
import MetaAll, { CATEGORY_CONTENT, CATEGORY_FORMS, CATEGORY_LAYOUT, CATEGORY_NAVIGATION, CATEGORY_WINDOWS } from './meta/meta-all';
import { Standards, GettingStarted } from '@/app/components/pages/page';
import { log } from 'util';
import { VueRouter } from 'vue-router/types/router';

console.debug('TODO: detect lang (or add route FR/EN basepath)');

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
export const ROUTER_OVERVIEW: string = 'router:overview';
export const ROUTER_ECOSYSTEM: string = 'router:ecosystem';

type RouterFactoryFn = () => ModulRouter;
type PushRouteFn = (key: string, routesConfig: RouteConfig[], config: RouteConfig, staticParent?: string) => RouteConfig;

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

    let pushRoute: PushRouteFn = (key, routesConfig, config, staticParent) => {
        routesConfig.push(config);
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
                    path: tabRoute,
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
                    path: tabRoute,
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
        index: new RouteIndex(routeIndex)
    };
};

export default routerFactory;
