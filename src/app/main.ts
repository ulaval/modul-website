import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import store from './store';
import routerFactory, { ModulRouter } from './router';
import Modul from './components/modul/modul';
import * as ComponentActions from './store/modules/components/actions';
import * as PageActions from './store/modules/pages/actions';
import { Sections, Standards, GettingStarted } from '@/app/components/pages/page';
import { Pages } from '@/app/components/pages/pages';
import './styles/main.scss';

import I18nPlugin, { currentLang, FRENCH, DebugMode, MessagesPluginOptions } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import ComponentsPlugin from '@ulaval/modul-components/dist/components';
import DirectivesPlugin from '@ulaval/modul-components/dist/directives';
import UtilsPlugin, { UtilsPluginOptions } from '@ulaval/modul-components/dist/utils';

import svc from '@ulaval/modul-components/dist/services/component-meta-impl';

import { COLOR_NAME, MColor } from './components/color/color';
import { GO_NAME, MGo } from './components/go/go';
import { DO_NAME, MDo } from './components/do/do';
import { DONT_NAME, MDont } from './components/dont/dont';
import { MARKDOWN_NAME, MMarkdown } from './components/markdown/markdown';
import { PREVIEW_NAME, MPreview } from './components/preview/preview';
import { DARK_TEMPLATE_NAME, MDarkTemplate } from './components/dark-template/dark-template';
import { LIGHT_TEMPLATE_NAME, MLightTemplate } from './components/light-template/light-template';
import { HIGHLIGHT_NAME, MHighlight } from './components/highlight/highlight';
import { VueRouter } from 'vue-router/types/router';
import { ICON_GALLERY_NAME, MIconGallery } from './components/icon-gallery/icon-gallery';

const utilsPluginOptions: UtilsPluginOptions = {
    securityPluginOptions: {
        protectedUrls: ['<url>'],
        getToken: () => '<token>'
    }
};

async function main() {
    Vue.config.productionTip = false;

    let i18nOptions: MessagesPluginOptions = {
        debug: DebugMode.Throw
    };
    Vue.use(I18nPlugin, i18nOptions);
    Vue.use(ComponentsPlugin);
    Vue.use(DirectivesPlugin);
    Vue.use(UtilsPlugin, utilsPluginOptions);

    Vue.use(svc);

    Vue.component(COLOR_NAME, MColor);
    Vue.component(GO_NAME, MGo);
    Vue.component(DO_NAME, MDo);
    Vue.component(DONT_NAME, MDont);
    Vue.component(MARKDOWN_NAME, MMarkdown);
    Vue.component(PREVIEW_NAME, MPreview);
    Vue.component(DARK_TEMPLATE_NAME, MDarkTemplate);
    Vue.component(LIGHT_TEMPLATE_NAME, MLightTemplate);
    Vue.component(HIGHLIGHT_NAME, MHighlight);
    Vue.component(ICON_GALLERY_NAME, MIconGallery);

    currentLang(FRENCH);
    await store.dispatchAsync(ComponentActions.MESSAGES_GET, FRENCH);
    await store.dispatchAsync(ComponentActions.ICONS_GET, 'website');
    await store.dispatchAsync(ComponentActions.COMPONENTS_META_GET, FRENCH);

    store.dispatchAsync(PageActions.SECTIONS_META_GET, { language: FRENCH, sectionsObj: Sections });

    console.warn('TODO: to remove, mode or add a generic way to define routes');
    Sections.forEach((section) => {
        let pagesObj: Pages = null;

        if (section === 'standards') {
            pagesObj = Standards;
        } else if (section === 'getting-started-section') {
            pagesObj = GettingStarted;
        }

        if (pagesObj) {
            store.dispatchAsync(section + '/' + PageActions.PAGES_META_GET, { /* route: route,*/ pagesObj: pagesObj });
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
