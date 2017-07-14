import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { UnifiedExperience } from './components/unified-experience/unified-experience';
import { VisualStandards } from './components/visual-standards/visual-standards';
import { WritingRules } from './components/writing-rules/writing-rules';
import { Category } from './components/libs/category';
import { Components } from './components/libs/components';
import { ComponentViewer } from './components/libs/component';
import { ComponentOverview } from './components/libs/component-overview';
import { ComponentProperties } from './components/libs/component-properties';
import { Ecosystem } from './components/ecosystem/ecosystem';
import Meta from '@ulaval/modul-components/dist/meta/meta';
import MetaAll, {
    CATEGORY_COMUNICATION, CATEGORY_CONTENT, CATEGORY_FORMS, CATEGORY_INDICATORS, CATEGORY_LAYOUT, CATEGORY_NAVIGATION, CATEGORY_SEARCH_SORT
} from '@ulaval/modul-components/dist/meta/meta-all';

Vue.use(Router);
Vue.use(MetaAll, Meta);

export type RoutePathMap = {
    [path: string]: string;
};

export const VISUAL_STANDARDS: string = 'VISUAL_STANDARDS';
export const WRITING_RULES: string = 'WRITING_RULES';
export const COMPONENTS: string = 'COMPONENTS';
export const ECOSYSTEM: string = 'ECOSYSTEM';
export const COMPONENT_PROPERTIES: string = 'COMPONENT_PROPERTIES';

export const VISUAL_STANDARDS_FR: string = 'normes-graphiques';
export const WRITING_RULES_FR: string = 'regles-editoriales';
export const COMPONENTS_FR: string = 'composants';
export const ECOSYSTEM_FR: string = 'ecosysteme';

export const CATEGORY_COMMUNICATION_FR: string = 'communication';
export const CATEGORY_CONTENT_FR: string = 'contenu';
export const CATEGORY_FORMS_FR: string = 'formulaires';
export const CATEGORY_INDICATORS_FR: string = 'indicateurs';
export const CATEGORY_LAYOUT_FR: string = 'disposition';
export const CATEGORY_NAVIGATION_FR: string = 'navigation';
export const CATEGORY_SEARCH_SORT_FR: string = 'recherche-tri';

export const COMPONENT_PROPERTIES_FR: string = 'proprietes';

export const ROUTES: RoutePathMap = {
    [VISUAL_STANDARDS]: VISUAL_STANDARDS_FR,
    [WRITING_RULES]: WRITING_RULES_FR,
    [COMPONENTS]: COMPONENTS_FR,
    [ECOSYSTEM]: ECOSYSTEM_FR,
    [COMPONENT_PROPERTIES]: COMPONENT_PROPERTIES_FR,
    [CATEGORY_COMUNICATION]: CATEGORY_COMMUNICATION_FR,
    [CATEGORY_CONTENT]: CATEGORY_CONTENT_FR,
    [CATEGORY_FORMS]: CATEGORY_FORMS_FR,
    [CATEGORY_INDICATORS]: CATEGORY_INDICATORS_FR,
    [CATEGORY_LAYOUT]: CATEGORY_LAYOUT_FR,
    [CATEGORY_NAVIGATION]: CATEGORY_NAVIGATION_FR
};

const categoryRoutes: RouteConfig[] = [];

Meta.getCategories().forEach(category => {
    categoryRoutes.push({
        path: `/${ROUTES[COMPONENTS]}/${ROUTES[category]}`,
        meta: category,
        component: Category
    });
});

const modulRoutes: RouteConfig[] = [
    {
        path: '/',
        component: UnifiedExperience
    },
    {
        path: '/' + ROUTES[VISUAL_STANDARDS],
        component: VisualStandards
    },
    {
        path: '/' + ROUTES[WRITING_RULES],
        component: WritingRules
    },
    {
        path: '/' + ROUTES[COMPONENTS],
        component: Components,
        children: categoryRoutes
    },
    {
        path: '/' + ROUTES[ECOSYSTEM],
        component: Ecosystem
    }
];

Meta.getTags().forEach(tag => {
    modulRoutes.push({
        path: `/${ROUTES[COMPONENTS]}/${tag}`,
        meta: tag,
        component: ComponentViewer,
        children: [
            {
                path: ROUTES[COMPONENT_PROPERTIES],
                meta: tag,
                component: ComponentProperties
            },
            {
                path: '',
                meta: tag,
                component: ComponentOverview
            }
        ]
    });
});

export default new Router({
    mode: 'history',
    routes: modulRoutes
});
