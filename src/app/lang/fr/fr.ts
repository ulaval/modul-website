import { PluginObject } from 'vue';
import { FRENCH } from 'modul-components/dist/utils/i18n';

const FrenchPlugin: PluginObject<any> = {
    install(v, options) {
        (v as any).$i18n.addMessages(FRENCH, require('./modul.fr.json'));
    }
};

export default FrenchPlugin;
