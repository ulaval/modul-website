import { PluginObject } from 'vue';
import {
    ACCORDION_NAME, ACCORDION_GROUP_NAME, BUTTON_NAME, BUTTON_GROUP_NAME, LIST_ITEM_NAME, CHECKBOX_NAME, DATEFIELDS_NAME, DATEPICKER_NAME, DIALOG_NAME, DROPDOWN_NAME, DROPDOWN_GROUP_NAME,
    DROPDOWN_ITEM_NAME, DYNAMIC_TEMPLATE_NAME, FLEX_TEMPLATE_NAME, I18N_NAME, ICON_BUTTON_NAME, LIMIT_TEXT_NAME, ICON_NAME, INPUT_STYLE_NAME, LINK_NAME, MESSAGE_NAME,
    MODAL_NAME, NAVBAR_NAME, NAVBAR_ITEM_NAME, MENU_NAME, MENU_ITEM_NAME, PANEL_NAME, POPPER_NAME, POPUP_NAME, RADIO_NAME, RADIO_GROUP_NAME, SCROLL_TOP_NAME, SIDEBAR_NAME,
    SPINNER_NAME, STATUS_NAME, STEP_NAME, STEPPERS_NAME, STEPPERS_ITEM_NAME, SWITCH_NAME, TABS_NAME, TEMPLATE_NAME, TEXTAREA_NAME, TEXTFIELD_NAME, TIMEPICKER_NAME, TOOLTIP_NAME, UPLOAD_NAME, UPLOAD_INPUT_NAME,
    UPLOAD_DRAGDROP_NAME, UPLOAD_FILESLIST_NAME
} from '@ulaval/modul-components/dist/components/component-names';
import { RIPPLE_EFFECT_NAME, SCROLL_TO_NAME } from '@ulaval/modul-components/dist/directives/directive-names';
import { ElementQueries } from '@ulaval/modul-components/dist/mixins/element-queries/element-queries';
import { InputManagement } from '@ulaval/modul-components/dist/mixins/input-management/input-management';
import { InputPopup } from '@ulaval/modul-components/dist/mixins/input-popup/input-popup';
import { InputState } from '@ulaval/modul-components/dist/mixins/input-state/input-state';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { OpenTrigger } from '@ulaval/modul-components/dist/mixins/open-trigger/open-trigger';
import { Portal } from '@ulaval/modul-components/dist/mixins/portal/portal';
import { TransitionAccordion } from '@ulaval/modul-components/dist/mixins/transition-accordion/transition-accordion';
import { Meta, Preview, ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

// should be i18n key format
export const CATEGORY_CONTENT: string = 'categories:content';
export const CATEGORY_FORMS: string = 'categories:forms';
export const CATEGORY_NAVIGATION: string = 'categories:navigation';
export const CATEGORY_LAYOUT: string = 'categories:layout';
export const CATEGORY_WINDOWS: string = 'categories:windows';
export const CATEGORY_MIXINS: string = 'categories:mixins';

export interface ComponentMetaEx extends ComponentMeta {
    metaKey?: string;
    folder?: string;
    name?: string;
    production?: boolean;
    overview?: string;
    category?: string;
    preview?: Preview;
}

export type CategoryComponentMap = {
    [key: string]: ComponentMetaEx[];
};

export class MetaAll implements PluginObject<any> {
    private categories: CategoryComponentMap = {};
    private baseMeta: Meta;

    public install(v, options) {
        if (!options) {
            throw new Error('MetaAll.install -> you must provide a Meta object within the options argument');
        }
        this.baseMeta = options as Meta;
        // mixins should be registered first, starting with the lowest order in the mixin hierarchy
        // if this doesn't work anymore, we'll have to add a meta.complete() method that will complete the attributes merge
        this.mergeMixin((MediaQueries as any).name, require('@ulaval/modul-components/dist/mixins/media-queries/media-queries.meta.json'), 'media-queries');
        this.mergeMixin((InputState as any).name, require('@ulaval/modul-components/dist/mixins/input-state/input-state.meta.json'), 'input-state');

        this.mergeMixin((ElementQueries as any).name, require('@ulaval/modul-components/dist/mixins/element-queries/element-queries.meta.json'), 'element-queries');
        this.mergeMixin((InputManagement as any).name, require('@ulaval/modul-components/dist/mixins/input-management/input-management.meta.json'), 'input-management');
        this.mergeMixin((InputPopup as any).name, require('@ulaval/modul-components/dist/mixins/input-popup/input-popup.meta.json'), 'input-popup');
        this.mergeMixin((OpenTrigger as any).name, require('@ulaval/modul-components/dist/mixins/open-trigger/open-trigger.meta.json'), 'open-trigger');
        this.mergeMixin((Portal as any).name, require('@ulaval/modul-components/dist/mixins/portal/portal.meta.json'), 'portal');
        this.mergeMixin((TransitionAccordion as any).name, require('@ulaval/modul-components/dist/mixins/transition-accordion/transition-accordion.meta.json'), 'transition-accordion');

        this.mergeComponentMeta(ACCORDION_NAME, require('@ulaval/modul-components/dist/components/accordion/accordion.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(ACCORDION_GROUP_NAME, require('@ulaval/modul-components/dist/components/accordion-group/accordion-group.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(BUTTON_NAME, require('@ulaval/modul-components/dist/components/button/button.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(BUTTON_GROUP_NAME, require('@ulaval/modul-components/dist/components/button-group/button-group.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(CHECKBOX_NAME, require('@ulaval/modul-components/dist/components/checkbox/checkbox.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(DATEFIELDS_NAME, require('@ulaval/modul-components/dist/components/datefields/datefields.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(DATEPICKER_NAME, require('@ulaval/modul-components/dist/components/datepicker/datepicker.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(DIALOG_NAME, require('@ulaval/modul-components/dist/components/dialog/dialog.meta.json'), CATEGORY_WINDOWS, true);
        this.mergeComponentMeta(DROPDOWN_NAME, require('@ulaval/modul-components/dist/components/dropdown/dropdown.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(DROPDOWN_ITEM_NAME, require('@ulaval/modul-components/dist/components/dropdown-item/dropdown-item.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(DROPDOWN_GROUP_NAME, require('@ulaval/modul-components/dist/components/dropdown-group/dropdown-group.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(DYNAMIC_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/dynamic-template/dynamic-template.meta.json'), CATEGORY_LAYOUT);
        this.mergeComponentMeta(FLEX_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/flex-template/flex-template.meta.json'), CATEGORY_LAYOUT);
        this.mergeComponentMeta(I18N_NAME, require('@ulaval/modul-components/dist/components/i18n/i18n.meta.json'));
        this.mergeComponentMeta(ICON_BUTTON_NAME, require('@ulaval/modul-components/dist/components/icon-button/icon-button.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(ICON_NAME, require('@ulaval/modul-components/dist/components/icon/icon.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(LIMIT_TEXT_NAME, require('@ulaval/modul-components/dist/components/limit-text/limit-text.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(LINK_NAME, require('@ulaval/modul-components/dist/components/link/link.meta.json'), CATEGORY_NAVIGATION, true);
        this.mergeComponentMeta(LIST_ITEM_NAME, require('@ulaval/modul-components/dist/components/list-item/list-item.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(MENU_NAME, require('@ulaval/modul-components/dist/components/menu/menu.meta.json'), CATEGORY_WINDOWS, true);
        this.mergeComponentMeta(MENU_ITEM_NAME, require('@ulaval/modul-components/dist/components/menu-item/menu-item.meta.json'), CATEGORY_WINDOWS, true);
        this.mergeComponentMeta(MESSAGE_NAME, require('@ulaval/modul-components/dist/components/message/message.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(MODAL_NAME, require('@ulaval/modul-components/dist/components/modal/modal.meta.json'), CATEGORY_WINDOWS, true);
        this.mergeComponentMeta(NAVBAR_NAME, require('@ulaval/modul-components/dist/components/navbar/navbar.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(NAVBAR_ITEM_NAME, require('@ulaval/modul-components/dist/components/navbar-item/navbar-item.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(PANEL_NAME, require('@ulaval/modul-components/dist/components/panel/panel.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(POPPER_NAME, require('@ulaval/modul-components/dist/components/popper/popper.meta.json'), CATEGORY_WINDOWS);
        this.mergeComponentMeta(POPUP_NAME, require('@ulaval/modul-components/dist/components/popup/popup.meta.json'), CATEGORY_WINDOWS);
        this.mergeComponentMeta(RADIO_NAME, require('@ulaval/modul-components/dist/components/radio/radio.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(RADIO_GROUP_NAME, require('@ulaval/modul-components/dist/components/radio-group/radio-group.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(SCROLL_TOP_NAME, require('@ulaval/modul-components/dist/components/scroll-top/scroll-top.meta.json'), CATEGORY_NAVIGATION);
        this.mergeComponentMeta(SIDEBAR_NAME, require('@ulaval/modul-components/dist/components/sidebar/sidebar.meta.json'), CATEGORY_WINDOWS);
        this.mergeComponentMeta(SPINNER_NAME, require('@ulaval/modul-components/dist/components/spinner/spinner.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(STATUS_NAME, require('@ulaval/modul-components/dist/components/status/status.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(STEP_NAME, require('@ulaval/modul-components/dist/components/step/step.meta.json'), CATEGORY_CONTENT, true);
        this.mergeComponentMeta(STEPPERS_NAME, require('@ulaval/modul-components/dist/components/steppers/steppers.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(STEPPERS_ITEM_NAME, require('@ulaval/modul-components/dist/components/steppers-item/steppers-item.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(SWITCH_NAME, require('@ulaval/modul-components/dist/components/switch/switch.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(TABS_NAME, require('@ulaval/modul-components/dist/components/tabs/tabs.meta.json'), CATEGORY_CONTENT);
        this.mergeComponentMeta(TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/template/template.meta.json'), CATEGORY_LAYOUT);
        this.mergeComponentMeta(TEXTAREA_NAME, require('@ulaval/modul-components/dist/components/textarea/textarea.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(TEXTFIELD_NAME, require('@ulaval/modul-components/dist/components/textfield/textfield.meta.json'), CATEGORY_FORMS, true);
        this.mergeComponentMeta(TIMEPICKER_NAME, require('@ulaval/modul-components/dist/components/timepicker/timepicker.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(TOOLTIP_NAME, require('@ulaval/modul-components/dist/components/tooltip/tooltip.meta.json'), CATEGORY_WINDOWS);
        this.mergeComponentMeta(UPLOAD_NAME, require('@ulaval/modul-components/dist/components/upload/upload.meta.json'), CATEGORY_FORMS);
        this.mergeComponentMeta(SCROLL_TO_NAME, require('@ulaval/modul-components/dist/directives/scroll-to/scroll-to.meta.json'), CATEGORY_NAVIGATION);
    }

    public getCategories(): string[] {
        let categories: string[] = Object.keys(this.categories).filter(key => this.categories.hasOwnProperty(key));
        if (!(process.env && (process.env.NODE_ENV as any).dev)) {
            categories = categories.filter(category => this.categories[category].some(component => component.production === true));
        }
        return categories;
    }

    public getMetaByCategory(category: string): ComponentMetaEx[] {
        return process.env && (process.env.NODE_ENV as any).dev ? this.categories[category] :
            this.categories[category].filter(component => component.production === true);
    }

    public getAllMeta(): ComponentMetaEx[] {
        return this.baseMeta.getMeta().filter(m => process.env && (process.env.NODE_ENV as any).dev || (m as ComponentMetaEx).production === true);
    }

    private mergeMixin(name: string, meta: string, folder: string): void {
        this.mergeComponentMeta(name, meta, CATEGORY_MIXINS, true, false, folder, `m-${folder}-meta:`);
    }

    private mergeComponentMeta(name: string, componentMeta: any, category?: string, production?: boolean, defaultPreview?: boolean, folder?: string,
        metaKey?: string): void {

        let component: ComponentMeta = this.baseMeta.mergeComponentMeta(name, componentMeta);
        let ex: ComponentMetaEx = component as ComponentMetaEx;

        ex.metaKey = metaKey ? metaKey : component.tag + '-meta:';
        ex.name = ex.metaKey + 'name';
        ex.folder = folder ? folder : component.tag.substr(2);
        ex.overview = ex.folder + '.overview';
        ex.preview = defaultPreview ? true : ex.folder + '.preview';
        ex.production = production;

        if (category) {
            let categoryComponents: ComponentMeta[] = this.categories[category];
            if (!categoryComponents) {
                categoryComponents = [];
                this.categories[category] = categoryComponents;
            }
            ex.category = category;
            categoryComponents.push(component);
        }
    }
}

export default new MetaAll();
