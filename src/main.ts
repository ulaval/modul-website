
import { ComponentsPlugin, DirectivesPlugin, FiltersPlugin, FRENCH, UtilsPlugin } from '@ulaval/modul-components';
import svc from '@ulaval/modul-components/dist/services/component-meta-impl';
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import { VueRouter } from 'vue-router/types/router';
import Modul from './components/modul/modul';
import { GettingStarted, Sections, Standards } from './components/pages/page';
import { Pages } from './components/pages/pages';
import WebsiteComponentsPlugin from './components/website-components-plugins';
import FrenchPlugin from './lang/fr/fr';
import FrenchMetaPlugin from './meta/meta-fr';
import routerFactory, { ModulRouter } from './router';
import store from './store';
import * as ComponentActions from './store/modules/components/actions';
import * as PageActions from './store/modules/pages/actions';
import './styles/main.scss';
import SvgPlugin from './utils/svg';

async function main() {
    Vue.config.productionTip = false;

    Vue.use(UtilsPlugin, { propagateVueParserErrors: true, i18PluginOptions: { curLang: FRENCH } });
    Vue.use(ComponentsPlugin);
    Vue.use(DirectivesPlugin);
    Vue.use(FiltersPlugin);

    Vue.use(svc);

    Vue.use(WebsiteComponentsPlugin);
    Vue.use(FrenchPlugin);
    Vue.use(SvgPlugin);
    Vue.use(FrenchMetaPlugin);

    await store.dispatchAsync(ComponentActions.MESSAGES_GET, FRENCH);
    await store.dispatchAsync(ComponentActions.ICONS_GET, 'website');
    await store.dispatchAsync(ComponentActions.COMPONENTS_META_GET, FRENCH);

    store.dispatchAsync(PageActions.SECTIONS_META_GET, {
        language: FRENCH,
        sectionsObj: Sections
    });

    console.debug(
        'TODO: to remove, mode or add a generic way to define routes'
    );
    Sections.forEach(section => {
        let pagesObj: Pages | null = null;

        if (section === 'standards') {
            pagesObj = Standards;
        } else if (section === 'getting-started-section') {
            pagesObj = GettingStarted;
        }

        if (pagesObj) {
            store.dispatchAsync(section + '/' + PageActions.PAGES_META_GET, {
                /* route: route,*/ pagesObj: pagesObj
            });
        }
    });

    let modulRouter: ModulRouter = routerFactory();
    let router: VueRouter = modulRouter.router;

    const vue = new Vue({
        router,
        store,
        template: '<modul></modul>',
        components: { Modul }
    });

    Vue.prototype.$routerIndex = modulRouter.index;

    vue.$mount('#vue');
}

main();
