import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';

import boutons from 'modul-components/dist/buttons';
import text from 'modul-components/dist/text';

import svc from 'modul-components/dist/services';

Vue.config.productionTip = false;

Vue.use(boutons);
Vue.use(text);
Vue.use(svc);

const vue = new Vue({
    router,
    store,
    template: '<modul></modul>',
    components: { Modul }
});

vue.$mount('#vue');
