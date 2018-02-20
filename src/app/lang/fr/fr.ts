import { PluginObject } from 'vue';
import { FRENCH, Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';

const FrenchPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(ComponentsFrenchPlugin);
        let i18n: Messages = (v.prototype as any).$i18n;
        i18n.addMessages(FRENCH, require('./modul.fr.json'));
        i18n.addMessages(FRENCH, require('../../router.fr.json'));
        i18n.addMessages(FRENCH, require('@/app/components/pages/pages.fr.json'));
    }
};

export default FrenchPlugin;
