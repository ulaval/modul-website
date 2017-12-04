import { PluginObject } from 'vue';
import { FRENCH, Messages } from '@ulaval/modul-components/dist/utils/i18n/i18n';

const FrenchMetaPlugin: PluginObject<any> = {
    install(v, options) {
        if ((v as any).$i18n) {
            let i18n: Messages = (v as any).$i18n;
            i18n.addMessages(FRENCH, require('./categories.fr.json'));
            i18n.addMessages(FRENCH, require('./components/accordion/accordion.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/accordion-group/accordion-group.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/button/button.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/button-group/button-group.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/list-item/list-item.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/checkbox/checkbox.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/datepicker/datepicker.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/dialog/dialog.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/dropdown/dropdown.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/dropdown-item/dropdown-item.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/dropdown-group/dropdown-group.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/dynamic-template/dynamic-template.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/flex-template/flex-template.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/i18n/i18n.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/icon/icon.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/icon-button/icon-button.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/input-style/input-style.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/limit-text/limit-text.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/link/link.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/message/message.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/navbar/navbar.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/navbar-item/navbar-item.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/menu/menu.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/menu-item/menu-item.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/panel/panel.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/sidebar/sidebar.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/popper/popper.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/popup/popup.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/radio/radio.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/radio-group/radio-group.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/modal/modal.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/scroll-top/scroll-top.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/spinner/spinner.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/status/status.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/step/step.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/steppers/steppers.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/steppers-item/steppers-item.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/switch/switch.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/tabs/tabs.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/template/template.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/textfield/textfield.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/timepicker/timepicker.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/tooltip/tooltip.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./components/upload/upload.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./directives/ripple-effect/ripple-effect.meta.fr.json'));
            i18n.addMessages(FRENCH, require('./directives/scroll-to/scroll-to.meta.fr.json'));
        } else {
            throw new Error('FrenchMetaPlugin.install -> You must use the i18n plugin.');
        }
    }
};

export default FrenchMetaPlugin;
