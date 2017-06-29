import { PluginObject } from 'vue';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';

const FrenchPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(ComponentsFrenchPlugin);
        (v as any).$i18n.addMessages(FRENCH, require('./modul.fr.json'));
    }
};

export default FrenchPlugin;
