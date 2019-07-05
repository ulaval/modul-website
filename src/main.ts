
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import { VueRouter } from 'vue-router/types/router';
import Modul from './components/modul/modul';
import WebsiteComponentsPlugin from './components/website-components-plugins';
import FrenchPlugin from './lang/fr/fr';
import ModulPlugin from './modul';
import routerFactory, { ModulRouter } from './router';
import store from './store';
import './styles/main.scss';
import SvgPlugin from './utils/svg';

Vue.config.productionTip = false;

Vue.use(ModulPlugin);

// Vue.use(svc);
Vue.use(FrenchPlugin);
Vue.use(SvgPlugin);
// Vue.use(FrenchMetaPlugin);

Vue.use(WebsiteComponentsPlugin);

// @TODO store initialization to refactor
// store.dispatch(ComponentActions.MESSAGES_GET, FRENCH);
// store.dispatch(ComponentActions.ICONS_GET, 'website');
// store.dispatch(ComponentActions.COMPONENTS_META_GET, FRENCH);
// store.dispatch(PageActions.SECTIONS_META_GET, {
//     language: FRENCH,
//     sectionsObj: Sections
// });

// Sections.forEach(section => {
//     let pagesObj: Pages | null = null;

//     if (section === 'standards') {
//         pagesObj = Standards;
//     } else if (section === 'getting-started-section') {
//         pagesObj = GettingStarted;
//     }

//     if (pagesObj) {
//         console.log(section + '/' + PageActions.PAGES_META_GET);
//         store.dispatch(section + '/' + PageActions.PAGES_META_GET, {
//             /* route: route,*/ pagesObj: pagesObj
//         });
//     }
// });
// END @TODO store initialization to refactor

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
