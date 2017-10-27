import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { HomePage } from './components/home/home';
import { GettingStarted } from './components/getting-started/getting-started';
import { CodingStandards } from './components/standards/coding-standards/coding-standards';
import { VisualStandards } from './components/standards/visual-standards/visual-standards';
import { WritingStandards } from './components/standards/writing-standards/writing-standards';
import { CategoryList } from './components/libs/category-list';
import { Category } from './components/libs/category';
import { ComponentViewer } from './components/libs/component';
import { ComponentDetails } from './components/libs/component-details';
import { ComponentOverview } from './components/libs/component-overview';
import { ComponentProperties } from './components/libs/component-properties';
import { ComponentVariants } from './components/libs/component-variants';
import { PageViewer } from './components/pages/pages';
import { Ecosystem } from './components/ecosystem/ecosystem';
import Meta from '@ulaval/modul-components/dist/meta/meta';
import MetaAll, {
    CATEGORY_COMUNICATION, CATEGORY_CONTENT, CATEGORY_FORMS, CATEGORY_INDICATORS, CATEGORY_LAYOUT, CATEGORY_NAVIGATION, CATEGORY_SEARCH_SORT
} from './meta/meta-all';
import { Page, Standards } from '@/app/components/pages/page';

Vue.use(Router);
Vue.use(MetaAll, Meta);

export type RoutePathMap = {
    [path: string]: string;
};

export const GETTING_STARTED: string = 'GETTING_STARTED';
export const COMPONENTS: string = 'COMPONENTS';
export const STANDARDS: string = 'STANDARDS';
export const UNIFIED_EXPERIENCE: string = 'unified-experience';
export const RESPONSIVE_DESIGN: string = 'responsive-design';
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

export const GETTING_STARTED_FR: string = 'demarrer-modul';
export const COMPONENTS_FR: string = 'composants';
export const STANDARDS_FR: string = 'normes';
export const UNIFIED_EXPERIENCE_FR: string = 'experience-unifiee';
export const RESPONSIVE_DESIGN_FR: string = 'design-adaptatif';
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

export const CATEGORY_COMMUNICATION_FR: string = 'communication';
export const CATEGORY_CONTENT_FR: string = 'contenu';
export const CATEGORY_FORMS_FR: string = 'formulaires';
export const CATEGORY_INDICATORS_FR: string = 'indicateurs';
export const CATEGORY_LAYOUT_FR: string = 'disposition';
export const CATEGORY_NAVIGATION_FR: string = 'navigation';
export const CATEGORY_SEARCH_SORT_FR: string = 'recherche-tri';

export const COMPONENT_PROPERTIES_FR: string = 'proprietes';
export const COMPONENT_OVERVIEW_FR: string = 'portrait';
export const COMPONENT_VARIANT_FR: string = 'variants';

export const ROUTES: RoutePathMap = {
    [GETTING_STARTED]: GETTING_STARTED_FR,
    [COMPONENTS]: COMPONENTS_FR,
    [STANDARDS]: STANDARDS_FR,
    [UNIFIED_EXPERIENCE]: UNIFIED_EXPERIENCE_FR,
    [RESPONSIVE_DESIGN]: RESPONSIVE_DESIGN_FR,
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
    [COMPONENT_VARIANT]: COMPONENT_VARIANT_FR,
    [CATEGORY_COMUNICATION]: CATEGORY_COMMUNICATION_FR,
    [CATEGORY_CONTENT]: CATEGORY_CONTENT_FR,
    [CATEGORY_FORMS]: CATEGORY_FORMS_FR,
    [CATEGORY_INDICATORS]: CATEGORY_INDICATORS_FR,
    [CATEGORY_LAYOUT]: CATEGORY_LAYOUT_FR,
    [CATEGORY_NAVIGATION]: CATEGORY_NAVIGATION_FR
};

const modulRoutes: RouteConfig[] = [];
const categoryRoutes: RouteConfig[] = [];
const componentRoutes: RouteConfig[] = [];
const standardsRoutes: RouteConfig[] = [];

Meta.getCategories().forEach(category => {
    categoryRoutes.push({
        path: ROUTES[category],
        meta: category,
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
            meta: componentMeta.tag,
            component: ComponentDetails,
            children: [
                {
                    path: ROUTES[COMPONENT_PROPERTIES],
                    meta: componentMeta.tag,
                    component: ComponentProperties
                },
                {
                    path: ROUTES[COMPONENT_VARIANT],
                    meta: componentMeta.tag,
                    component: ComponentVariants
                },
                {
                    path: ROUTES[COMPONENT_OVERVIEW],
                    meta: componentMeta.tag,
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

Standards.getPages().forEach(page => {
    standardsRoutes.push({
        path: ROUTES[page],
        meta: page,
        component: PageViewer,
        props: {sectionObj: Standards}
    });

    Standards.getPageTabs(page).forEach(tab => {
        standardsRoutes.push({
            path: `/${ROUTES[STANDARDS]}/${ROUTES[page]}/${tab.id}`,
            meta: tab.id,
            component: PageViewer,
            props: {sectionObj: Standards},
            children: [
                {
                    path: ROUTES[COMPONENT_PROPERTIES],
                    meta: tab.id,
                    component: ComponentProperties
                }
                // {
                //     path: ROUTES[COMPONENT_VARIANT],
                //     meta: componentMeta.tag,
                //     component: ComponentVariants
                // },
                // {
                //     path: ROUTES[COMPONENT_OVERVIEW],
                //     meta: componentMeta.tag,
                //     component: ComponentOverview
                // },
                // {
                //     path: '',
                //     redirect: ROUTES[COMPONENT_OVERVIEW]
                // }
            ]
        });
    });
});

modulRoutes.push(
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/' + ROUTES[GETTING_STARTED],
        component: GettingStarted
    },
    {
        path: '/' + ROUTES[COMPONENTS],
        component: Category,
        children: categoryRoutes
    },
    {
        path: '/' + ROUTES[STANDARDS],
        component: PageViewer,
        children: standardsRoutes,
        props: {sectionObj: Standards}
    },
    {
        path: '/' + ROUTES[ECOSYSTEM],
        component: Ecosystem
    }
);

export default new Router({
    mode: 'history',
    routes: modulRoutes/*,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }*/
});
