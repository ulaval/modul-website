import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';
import * as ModulActions from './store/actions';

import { currentLang, FRENCH } from 'modul-components/dist/i18n';
import boutons from 'modul-components/dist/buttons';
import text from 'modul-components/dist/text';
import directives from 'modul-components/dist/directives';

import svc from 'modul-components/dist/services';

async function main() {
    Vue.config.productionTip = false;

    Vue.use(boutons);
    Vue.use(text);
    Vue.use(directives);
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
