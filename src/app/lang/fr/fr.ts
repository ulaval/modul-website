import { PluginObject } from 'vue';
import * as Messages from 'modul-components/dist/i18n';

export class FrenchPlugin implements PluginObject<any> {
    public install(v, options) {
        Messages.addMessages(Messages.FRENCH, require('./modul.fr.json'));
    }
}

export default new FrenchPlugin();
