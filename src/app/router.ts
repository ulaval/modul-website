import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { UnifiedExperience } from './components/unified-experience/unified-experience';
import { VisualStandards } from './components/visual-standards/visual-standards';
import { WritingRules } from './components/writing-rules/writing-rules';
import { Components } from './components/libs/components';
import { ComponentViewer } from './components/libs/component';
import { Ecosystem } from './components/ecosystem/ecosystem';
import Meta from 'modul-components/dist/meta';
import { FRENCH } from 'modul-components/dist/i18n';

Vue.use(Router);

const componentsChildren: RouteConfig[] = [];

Meta.getTagsByLanguage(FRENCH).forEach(tag => {
    componentsChildren.push({
        path: tag,
        meta: tag,
        component: ComponentViewer
    });
});

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: UnifiedExperience
        },
        {
            path: '/normes-graphiques',
            component: VisualStandards
        },
        {
            path: '/regles-editoriales',
            component: WritingRules
        },
        {
            path: '/composants',
            component: Components,
            children: componentsChildren
        },
        {
            path: '/ecosysteme',
            component: Ecosystem
        }
    ]
});
