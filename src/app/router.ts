import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { UnifiedExperience } from './components/unified-experience/unified-experience';
import { VisualStandards } from './components/visual-standards/visual-standards';
import { WritingRules } from './components/writing-rules/writing-rules';
import { Components } from './components/libs/components';
import { ComponentViewer } from './components/libs/component';
import { Ecosystem } from './components/ecosystem/ecosystem';
import Meta from 'modul-components/dist/meta/meta';

Vue.use(Router);

const componentsChildren: RouteConfig[] = [];

Meta.getTags().forEach(tag => {
    componentsChildren.push({
        path: tag,
        meta: tag,
        component: ComponentViewer
    });
});

export type RoutePathMap = {
    [path: string]: string;
};

export const VISUAL_STANDARDS: string = 'VISUAL_STANDARDS';
export const WRITING_RULES: string = 'WRITING_RULES';
export const COMPONENTS: string = 'COMPONENTS';
export const ECOSYSTEM: string = 'ECOSYSTEM';
export const VISUAL_STANDARDS_FR: string = 'normes-graphiques';
export const WRITING_RULES_FR: string = 'regles-editoriales';
export const COMPONENTS_FR: string = 'composants';
export const ECOSYSTEM_FR: string = 'ecosysteme';

export const routes: RoutePathMap = {
    [VISUAL_STANDARDS]: VISUAL_STANDARDS_FR,
    [WRITING_RULES]: WRITING_RULES_FR,
    [COMPONENTS]: COMPONENTS_FR,
    [ECOSYSTEM]: ECOSYSTEM_FR
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: UnifiedExperience
        },
        {
            path: '/' + routes[VISUAL_STANDARDS],
            component: VisualStandards
        },
        {
            path: '/' + routes[WRITING_RULES],
            component: WritingRules
        },
        {
            path: '/' + routes[COMPONENTS],
            component: Components,
            children: componentsChildren
        },
        {
            path: '/' + routes[ECOSYSTEM],
            component: Ecosystem
        }
    ]
});
