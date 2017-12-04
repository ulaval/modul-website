import { PluginObject } from 'vue';
import {
    ACCORDION_NAME, ACCORDION_GROUP_NAME, BUTTON_NAME, BUTTON_GROUP_NAME, LIST_ITEM_NAME, CHECKBOX_NAME, DATEPICKER_NAME, DIALOG_NAME, DROPDOWN_NAME, DROPDOWN_GROUP_NAME,
    DROPDOWN_ITEM_NAME, DYNAMIC_TEMPLATE_NAME, FLEX_TEMPLATE_NAME, I18N_NAME, ICON_BUTTON_NAME, LIMIT_TEXT_NAME, ICON_NAME, INPUT_STYLE_NAME, LINK_NAME, MESSAGE_NAME,
    MODAL_NAME, NAVBAR_NAME, NAVBAR_ITEM_NAME, MENU_NAME, MENU_ITEM_NAME, PANEL_NAME, POPPER_NAME, POPUP_NAME, RADIO_NAME, RADIO_GROUP_NAME, SCROLL_TOP_NAME, SIDEBAR_NAME,
    SPINNER_NAME, STATUS_NAME, STEP_NAME, STEPPERS_NAME, STEPPERS_ITEM_NAME, SWITCH_NAME, TABS_NAME, TEMPLATE_NAME, TEXTFIELD_NAME, TIMEPICKER_NAME, TOOLTIP_NAME, UPLOAD_NAME, UPLOAD_INPUT_NAME,
    UPLOAD_DRAGDROP_NAME, UPLOAD_FILESLIST_NAME
} from '@ulaval/modul-components/dist/components/component-names';
import { RIPPLE_EFFECT_NAME, SCROLL_TO_NAME } from '@ulaval/modul-components/dist/directives/directive-names';
import { Meta } from '@ulaval/modul-components/dist/meta/meta';

// should be i18n key format
export const CATEGORY_COMUNICATION: string = 'meta:communication';
export const CATEGORY_CONTENT: string = 'meta:content';
export const CATEGORY_FORMS: string = 'meta:forms';
export const CATEGORY_INDICATORS: string = 'meta:indicators';
export const CATEGORY_NAVIGATION: string = 'meta:navigation';
export const CATEGORY_SEARCH_SORT: string = 'meta:search-sort';
export const CATEGORY_LAYOUT: string = 'meta:layout';

export class MetaAll implements PluginObject<any> {
    public install(v, options) {
        if (!options) {
            throw new Error('MetaAll.install -> you must provide a Meta object within the options argument');
        }
        const meta: Meta = options as Meta;
        meta.mergeComponentMeta(ACCORDION_NAME, require('@ulaval/modul-components/dist/components/accordion/accordion.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ACCORDION_GROUP_NAME, require('@ulaval/modul-components/dist/components/accordion-group/accordion-group.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(BUTTON_NAME, require('@ulaval/modul-components/dist/components/button/button.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(BUTTON_GROUP_NAME, require('@ulaval/modul-components/dist/components/button-group/button-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(LIST_ITEM_NAME, require('@ulaval/modul-components/dist/components/list-item/list-item.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(CHECKBOX_NAME, require('@ulaval/modul-components/dist/components/checkbox/checkbox.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(DATEPICKER_NAME, require('@ulaval/modul-components/dist/components/datepicker/datepicker.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(DIALOG_NAME, require('@ulaval/modul-components/dist/components/dialog/dialog.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(DROPDOWN_NAME, require('@ulaval/modul-components/dist/components/dropdown/dropdown.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(DROPDOWN_ITEM_NAME, require('@ulaval/modul-components/dist/components/dropdown-item/dropdown-item.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(DROPDOWN_GROUP_NAME, require('@ulaval/modul-components/dist/components/dropdown-group/dropdown-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(DYNAMIC_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/dynamic-template/dynamic-template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(FLEX_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/flex-template/flex-template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(I18N_NAME, require('@ulaval/modul-components/dist/components/i18n/i18n.meta.json'));
        meta.mergeComponentMeta(ICON_BUTTON_NAME, require('@ulaval/modul-components/dist/components/icon-button/icon-button.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ICON_NAME, require('@ulaval/modul-components/dist/components/icon/icon.meta.json'), CATEGORY_INDICATORS);
        meta.mergeComponentMeta(INPUT_STYLE_NAME, require('@ulaval/modul-components/dist/components/input-style/input-style.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(LIMIT_TEXT_NAME, require('@ulaval/modul-components/dist/components/limit-text/limit-text.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(LINK_NAME, require('@ulaval/modul-components/dist/components/link/link.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(MESSAGE_NAME, require('@ulaval/modul-components/dist/components/message/message.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(MODAL_NAME, require('@ulaval/modul-components/dist/components/modal/modal.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(NAVBAR_NAME, require('@ulaval/modul-components/dist/components/navbar/navbar.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(NAVBAR_ITEM_NAME, require('@ulaval/modul-components/dist/components/navbar-item/navbar-item.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(MENU_NAME, require('@ulaval/modul-components/dist/components/menu/menu.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(MENU_ITEM_NAME, require('@ulaval/modul-components/dist/components/menu-item/menu-item.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(PANEL_NAME, require('@ulaval/modul-components/dist/components/panel/panel.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(POPPER_NAME, require('@ulaval/modul-components/dist/components/popper/popper.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(POPUP_NAME, require('@ulaval/modul-components/dist/components/popup/popup.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(RADIO_NAME, require('@ulaval/modul-components/dist/components/radio/radio.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(RADIO_GROUP_NAME, require('@ulaval/modul-components/dist/components/radio-group/radio-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(SCROLL_TOP_NAME, require('@ulaval/modul-components/dist/components/scroll-top/scroll-top.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(SIDEBAR_NAME, require('@ulaval/modul-components/dist/components/sidebar/sidebar.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(SPINNER_NAME, require('@ulaval/modul-components/dist/components/spinner/spinner.meta.json'), CATEGORY_INDICATORS);
        meta.mergeComponentMeta(STATUS_NAME, require('@ulaval/modul-components/dist/components/status/status.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(STEP_NAME, require('@ulaval/modul-components/dist/components/step/step.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(STEPPERS_NAME, require('@ulaval/modul-components/dist/components/steppers/steppers.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(STEPPERS_ITEM_NAME, require('@ulaval/modul-components/dist/components/steppers-item/steppers-item.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(SWITCH_NAME, require('@ulaval/modul-components/dist/components/switch/switch.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(TABS_NAME, require('@ulaval/modul-components/dist/components/tabs/tabs.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/template/template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(TEXTFIELD_NAME, require('@ulaval/modul-components/dist/components/textfield/textfield.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(TIMEPICKER_NAME, require('@ulaval/modul-components/dist/components/timepicker/timepicker.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(TOOLTIP_NAME, require('@ulaval/modul-components/dist/components/tooltip/tooltip.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(UPLOAD_NAME, require('@ulaval/modul-components/dist/components/upload/upload.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(RIPPLE_EFFECT_NAME, require('@ulaval/modul-components/dist/directives/ripple-effect/ripple-effect.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(SCROLL_TO_NAME, require('@ulaval/modul-components/dist/directives/scroll-to/scroll-to.meta.json'), CATEGORY_NAVIGATION);
    }
}

export default new MetaAll();
