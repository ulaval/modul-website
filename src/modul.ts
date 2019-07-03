import { ComponentsPlugin } from '@ulaval/modul-components/dist/components';
import { DirectivesPlugin } from '@ulaval/modul-components/dist/directives';
import { FiltersPlugin } from '@ulaval/modul-components/dist/filters';
import { UtilsPlugin } from '@ulaval/modul-components/dist/utils';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import Vue, { PluginObject } from 'vue';

const ModulPlugin: PluginObject<any> = {
    install(v, options): void {

        Vue.use(UtilsPlugin, { propagateVueParserErrors: false, i18PluginOptions: { curLang: FRENCH } });
        Vue.use(ComponentsPlugin);
        Vue.use(DirectivesPlugin);
        Vue.use(FiltersPlugin);
    }
};

export default ModulPlugin;
