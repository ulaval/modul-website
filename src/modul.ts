import I18nPlugin from '@ulaval/modul-components/dist/components/i18n/i18n';
import IconPlugin from '@ulaval/modul-components/dist/components/icon/icon';
import { UtilsPlugin } from '@ulaval/modul-components/dist/utils';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Vue, { PluginObject } from 'vue';

const ModulPlugin: PluginObject<any> = {
    install(v, options): void {

        Vue.use(UtilsPlugin, { propagateVueParserErrors: false, i18PluginOptions: { curLang: FRENCH } });
        Vue.use(I18nPlugin);
        Vue.use(IconPlugin);
        //      Vue.use(ScrollToPlugin);
        // Vue.use(ComponentsPlugin);
        // Vue.use(DirectivesPlugin);
        // Vue.use(FiltersPlugin);
    }
};

export default ModulPlugin;
