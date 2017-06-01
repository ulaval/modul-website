import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';
import * as ModulActions from './store/actions';

import { currentLang, FRENCH } from 'modul-components/dist/i18n';
import ButtonPlugin from 'modul-components/dist/button';
import ListPlugin from 'modul-components/dist/list';
import DynamicTemplatePlugin from 'modul-components/dist/dynamic-template';
import BackgroundColorPlugin from 'modul-components/dist/background-color';

import svc from 'modul-components/dist/services';

async function main() {
    Vue.config.productionTip = false;

    Vue.use(ButtonPlugin);
    Vue.use(DynamicTemplatePlugin);
    Vue.use(BackgroundColorPlugin);
    Vue.use(svc);

    currentLang(FRENCH);
    await store.dispatchAsync(ModulActions.MESSAGES_GET, FRENCH);

    const vue = new Vue({
        router,
        store,
        template: '<modul></modul>',
        components: { Modul }
    });

    vue.$mount('#vue');
}

main();
