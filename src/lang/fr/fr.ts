import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import { FRENCH, Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import { PluginObject } from 'vue';

const FrenchPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(ComponentsFrenchPlugin);
        let i18n: Messages = v.prototype.$i18n;
        i18n.addMessages(FRENCH, require('./website.fr.json'));
        i18n.addMessages(FRENCH, require('./modul.fr.json'));
        i18n.addMessages(FRENCH, require('../../router.fr.json'));
        i18n.addMessages(FRENCH, require('../../components/pages/pages.fr.json'));

    }
};

export default FrenchPlugin;
