import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';
import * as ModulActions from './store/actions';

import MessagePlugin, { currentLang, FRENCH } from 'modul-components/dist/utils/i18n';
import ComponentsPlugin from 'modul-components/dist/components';
import DirectivesPlugin from 'modul-components/dist/directives';

import svc from 'modul-components/dist/services/component-meta-impl';

async function main() {
    Vue.config.productionTip = false;

    Vue.use(MessagePlugin);
    Vue.use(ComponentsPlugin);
    Vue.use(DirectivesPlugin);
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
