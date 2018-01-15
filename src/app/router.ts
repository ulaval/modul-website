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
import Meta from '@ulaval/modul-components/dist/meta/meta';
import MetaAll, {
    CATEGORY_CONTENT, CATEGORY_FORMS, CATEGORY_LAYOUT, CATEGORY_NAVIGATION, CATEGORY_WINDOWS
} from './meta/meta-all';
import { Standards, GettingStarted } from '@/app/components/pages/page';
import { log } from 'util';

Vue.use(Router);
Vue.use(MetaAll, Meta);

export type RoutePathMap = {
    [path: string]: string;
};

export const GETTING_STARTED: string = 'getting-started';
export const GETTING_STARTED_COMPUTER_SETUP: string = 'computer-setup';
export const GETTING_STARTED_SOURCE_CODE: string = 'source-code';
export const GETTING_STARTED_FRONTEND_ARCHITECTURE: string = 'frontend-architecture';
export const GETTING_STARTED_RELEASE_TRACKING: string = 'release-tracking';
export const COMPONENTS: string = 'COMPONENTS';
export const STANDARDS: string = 'standards';
export const UNIFIED_EXPERIENCE: string = 'unified-experience';
export const UNIFIED_EXPERIENCE_OVERVIEW: string = 'overview-unified-experience';
export const RESPONSIVE_DESIGN: string = 'responsive-design';
export const RESPONSIVE_DESIGN_OVERVIEW: string = 'overview-responsive-design';
export const WRITING_STANDARDS: string = 'writing-standards';
export const WRITING_STANDARDS_EDITORIAL_TONE: string = 'editorial-tone';
export const WRITING_STANDARDS_FORMAT: string = 'formats';
export const WRITING_STANDARDS_GLOSSARY: string = 'glossary';
export const WRITING_STANDARDS_MESSAGE_BANK: string = 'message-bank';
export const WRITING_STANDARDS_PUNCTUATION: string = 'punctuation';
export const VISUAL_STANDARDS: string = 'visual-standards';
export const VISUAL_STANDARDS_COLORS: string = 'colors';
export const VISUAL_STANDARDS_ICONOGRAPHY: string = 'iconography';
export const VISUAL_STANDARDS_IMAGES_VIDEOS: string = 'images-videos';
export const VISUAL_STANDARDS_TYPOGRAPHY_STYLES: string = 'typography-styles';
export const CODING_STANDARDS: string = 'coding-standards';
export const CODING_STANDARDS_ACCESIBILITY: string = 'accessibility';
export const CODING_STANDARDS_CSS_SASS: string = 'css-sass';
export const CODING_STANDARDS_TYPESCRIPT: string = 'typescript';
export const ECOSYSTEM: string = 'ECOSYSTEM';
export const COMPONENT_PROPERTIES: string = 'COMPONENT_PROPERTIES';
export const COMPONENT_OVERVIEW: string = 'COMPONENT_OVERVIEW';
export const COMPONENT_VARIANT: string = 'COMPONENT_VARIANT';

export const GETTING_STARTED_FR: string = 'premier-pas';
export const GETTING_STARTED_COMPUTER_SETUP_FR: string = 'poste-developpeur';
export const GETTING_STARTED_SOURCE_CODE_FR: string = 'github';
export const GETTING_STARTED_FRONTEND_ARCHITECTURE_FR: string = 'architecture-frontend';
export const GETTING_STARTED_RELEASE_TRACKING_FR: string = 'suivi-versions';
export const COMPONENTS_FR: string = 'composants';
export const STANDARDS_FR: string = 'normes';
export const UNIFIED_EXPERIENCE_FR: string = 'experience-unifiee';
export const UNIFIED_EXPERIENCE_OVERVIEW_FR: string = '';
export const RESPONSIVE_DESIGN_FR: string = 'design-adaptatif';
export const RESPONSIVE_DESIGN_OVERVIEW_FR: string = '';
export const WRITING_STANDARDS_FR: string = 'normes-editoriales';
export const WRITING_STANDARDS_EDITORIAL_TONE_FR: string = 'ton-redactionnel';
export const WRITING_STANDARDS_FORMAT_FR: string = 'formats';
export const WRITING_STANDARDS_GLOSSARY_FR: string = 'glossaire';
export const WRITING_STANDARDS_MESSAGE_BANK_FR: string = 'banque-messages';
export const WRITING_STANDARDS_PUNCTUATION_FR: string = 'ponctuation';
export const VISUAL_STANDARDS_FR: string = 'normes-graphiques';
export const VISUAL_STANDARDS_COLORS_FR: string = 'couleurs-themes';
export const VISUAL_STANDARDS_ICONOGRAPHY_FR: string = 'iconographie';
export const VISUAL_STANDARDS_IMAGES_VIDEOS_FR: string = 'images-videos';
export const VISUAL_STANDARDS_TYPOGRAPHY_STYLES_FR: string = 'typographie-styles';
export const CODING_STANDARDS_FR: string = 'normes-developpement';
export const CODING_STANDARDS_ACCESIBILITY_FR: string = 'accessibilite';
export const CODING_STANDARDS_CSS_SASS_FR: string = 'css-sass';
export const CODING_STANDARDS_TYPESCRIPT_FR: string = 'typescript';
export const ECOSYSTEM_FR: string = 'ecosysteme';

export const CATEGORY_CONTENT_FR: string = 'contenu';
export const CATEGORY_FORMS_FR: string = 'formulaires';
export const CATEGORY_LAYOUT_FR: string = 'disposition';
export const CATEGORY_NAVIGATION_FR: string = 'navigation';
export const CATEGORY_WINDOWS_FR: string = 'fenetres';

export const COMPONENT_PROPERTIES_FR: string = 'proprietes';
export const COMPONENT_OVERVIEW_FR: string = 'portrait';

export const ROUTES: RoutePathMap = {
    [GETTING_STARTED]: GETTING_STARTED_FR,
    [GETTING_STARTED_COMPUTER_SETUP]: GETTING_STARTED_COMPUTER_SETUP_FR,
    [GETTING_STARTED_SOURCE_CODE]: GETTING_STARTED_SOURCE_CODE_FR,
    [GETTING_STARTED_FRONTEND_ARCHITECTURE]: GETTING_STARTED_FRONTEND_ARCHITECTURE_FR,
    [GETTING_STARTED_RELEASE_TRACKING]: GETTING_STARTED_RELEASE_TRACKING_FR,
    [COMPONENTS]: COMPONENTS_FR,
    [STANDARDS]: STANDARDS_FR,
    [UNIFIED_EXPERIENCE]: UNIFIED_EXPERIENCE_FR,
    [UNIFIED_EXPERIENCE_OVERVIEW]: UNIFIED_EXPERIENCE_OVERVIEW_FR,
    [RESPONSIVE_DESIGN]: RESPONSIVE_DESIGN_FR,
    [RESPONSIVE_DESIGN_OVERVIEW]: RESPONSIVE_DESIGN_OVERVIEW_FR,
    [WRITING_STANDARDS]: WRITING_STANDARDS_FR,
    [WRITING_STANDARDS_EDITORIAL_TONE]: WRITING_STANDARDS_EDITORIAL_TONE_FR,
    [WRITING_STANDARDS_FORMAT]: WRITING_STANDARDS_FORMAT_FR,
    [WRITING_STANDARDS_GLOSSARY]: WRITING_STANDARDS_GLOSSARY_FR,
    [WRITING_STANDARDS_MESSAGE_BANK]: WRITING_STANDARDS_MESSAGE_BANK_FR,
    [WRITING_STANDARDS_PUNCTUATION]: WRITING_STANDARDS_PUNCTUATION_FR,
    [VISUAL_STANDARDS]: VISUAL_STANDARDS_FR,
    [VISUAL_STANDARDS_COLORS]: VISUAL_STANDARDS_COLORS_FR,
    [VISUAL_STANDARDS_ICONOGRAPHY]: VISUAL_STANDARDS_ICONOGRAPHY_FR,
    [VISUAL_STANDARDS_IMAGES_VIDEOS]: VISUAL_STANDARDS_IMAGES_VIDEOS_FR,
    [VISUAL_STANDARDS_TYPOGRAPHY_STYLES]: VISUAL_STANDARDS_TYPOGRAPHY_STYLES_FR,
    [CODING_STANDARDS]: CODING_STANDARDS_FR,
    [CODING_STANDARDS_ACCESIBILITY]: CODING_STANDARDS_ACCESIBILITY_FR,
    [CODING_STANDARDS_CSS_SASS]: CODING_STANDARDS_CSS_SASS_FR,
    [CODING_STANDARDS_TYPESCRIPT]: CODING_STANDARDS_TYPESCRIPT_FR,
    [ECOSYSTEM]: ECOSYSTEM_FR,
    [COMPONENT_PROPERTIES]: COMPONENT_PROPERTIES_FR,
    [COMPONENT_OVERVIEW]: COMPONENT_OVERVIEW_FR,
    [CATEGORY_CONTENT]: CATEGORY_CONTENT_FR,
    [CATEGORY_FORMS]: CATEGORY_FORMS_FR,
    [CATEGORY_LAYOUT]: CATEGORY_LAYOUT_FR,
    [CATEGORY_NAVIGATION]: CATEGORY_NAVIGATION_FR,
    [CATEGORY_WINDOWS]: CATEGORY_WINDOWS_FR
};

const modulRoutes: RouteConfig[] = [];
const categoryRoutes: RouteConfig[] = [];
const gettingStartedRoutes: RouteConfig[] = [];
const componentRoutes: RouteConfig[] = [];
const standardsRoutes: RouteConfig[] = [];

Meta.getCategories().forEach(category => {
    categoryRoutes.push({
        path: ROUTES[category],
        meta: { page: category },
        component: CategoryList
    });

    modulRoutes.push({
        path: `/${ROUTES[COMPONENTS]}/${ROUTES[category]}/all`,
        component: ComponentViewer,
        children: componentRoutes
    });

    Meta.getMetaByCategory(category).forEach(componentMeta => {
        componentRoutes.push({
            path: `/${ROUTES[COMPONENTS]}/${ROUTES[category]}/${componentMeta.tag}`,
            meta: { page: componentMeta.tag },
            component: ComponentDetails,
            children: [
                {
                    path: ROUTES[COMPONENT_PROPERTIES],
                    meta: { page: componentMeta.tag },
                    component: ComponentProperties
                },
                {
                    path: ROUTES[COMPONENT_OVERVIEW],
                    meta: { page: componentMeta.tag },
                    component: ComponentOverview
                },
                {
                    path: '',
                    redirect: ROUTES[COMPONENT_OVERVIEW]
                }
            ]
        });
    });
});

GettingStarted.getPages().forEach((page, index) => {
    gettingStartedRoutes.push({
        path: `/${ROUTES[GETTING_STARTED]}/${ROUTES[page]}`,
        meta: { page: page, sectionObj: GettingStarted },
        component: PageDetails
    });

    let tabs: string[] = GettingStarted.getPageTabs(page);

    if (tabs.length > 0) {
        gettingStartedRoutes[index].children = [];

        tabs.forEach(tab => {
            gettingStartedRoutes[index].children.push({
                path: `/${ROUTES[GETTING_STARTED]}/${ROUTES[page]}/${ROUTES[tab]}`,
                meta: { page: page, sectionObj: GettingStarted, tab: tab },
                component: PageTab
            });
        });

        gettingStartedRoutes[index].children.push({
            path: '',
            redirect: ROUTES[tabs[0]]
        });
    }
});

Standards.getPages().forEach((page, index) => {
    standardsRoutes.push({
        path: `/${ROUTES[STANDARDS]}/${ROUTES[page]}`,
        meta: { page: page, sectionObj: Standards },
        component: PageDetails
    });

    let tabs: string[] = Standards.getPageTabs(page);

    if (tabs.length > 0) {
        standardsRoutes[index].children = [];

        tabs.forEach(tab => {
            standardsRoutes[index].children.push({
                path: `/${ROUTES[STANDARDS]}/${ROUTES[page]}/${ROUTES[tab]}`,
                meta: { page: page, sectionObj: Standards, tab: tab },
                component: PageTab
            });
        });

        standardsRoutes[index].children.push({
            path: '',
            redirect: ROUTES[tabs[0]]
        });
    }
});

modulRoutes.push(
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/' + ROUTES[GETTING_STARTED],
        meta: { page: GettingStarted.getPages()[0], sectionObj: GettingStarted },
        component: PageViewer,
        children: gettingStartedRoutes
    },
    {
        path: '/' + ROUTES[COMPONENTS],
        component: Category,
        children: categoryRoutes
    },
    {
        path: '/' + ROUTES[STANDARDS],
        meta: { sectionObj: Standards },
        component: PageViewer,
        children: standardsRoutes
    },
    {
        path: '/' + ROUTES[ECOSYSTEM],
        component: PageViewer
    }
);

export default new Router({
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
