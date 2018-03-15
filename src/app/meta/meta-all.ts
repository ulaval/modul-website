import {
    ACCORDION_GROUP_NAME,
    ACCORDION_NAME,
    BUTTON_GROUP_NAME,
    BUTTON_NAME,
    CHECKBOX_NAME,
    DATEFIELDS_NAME,
    DATEPICKER_NAME,
    DIALOG_NAME,
    DROPDOWN_GROUP_NAME,
    DROPDOWN_ITEM_NAME,
    DROPDOWN_NAME,
    DYNAMIC_TEMPLATE_NAME,
    FILE_SELECT_NAME,
    FILE_UPLOAD_NAME,
    FLEX_TEMPLATE_NAME,
    I18N_NAME,
    ICON_BUTTON_NAME,
    ICON_NAME,
    LIMIT_TEXT_NAME,
    LINK_NAME,
    LIST_ITEM_NAME,
    MENU_ITEM_NAME,
    MENU_NAME,
    MESSAGE_NAME,
    MODAL_NAME,
    NAVBAR_ITEM_NAME,
    NAVBAR_NAME,
    PANEL_NAME,
    POPPER_NAME,
    POPUP_NAME,
    PROGRESS_NAME,
    RADIO_GROUP_NAME,
    RADIO_NAME,
    SCROLL_TOP_NAME,
    SIDEBAR_NAME,
    SPINNER_NAME,
    STATUS_NAME,
    STEP_NAME,
    STEPPERS_ITEM_NAME,
    STEPPERS_NAME,
    SWITCH_NAME,
    TAB_PANEL_NAME,
    TABS_NAME,
    TEMPLATE_NAME,
    TEXTAREA_NAME,
    TEXTFIELD_NAME,
    TIMEPICKER_NAME,
    TOOLTIP_NAME,
    VALIDATION_MESSAGE_NAME
} from '@ulaval/modul-components/dist/components/component-names';
import { ComponentMeta, Meta, Preview } from '@ulaval/modul-components/dist/meta/meta';
import { PluginObject } from 'vue';

import {
    ELEMENT_QUERIES,
    INPUT_MANAGEMENT,
    INPUT_LABEL,
    INPUT_POPUP,
    INPUT_STATE,
    INPUT_WIDTH,
    MEDIA_QUERIES,
    OPEN_TRIGGER,
    PORTAL,
    TRANSITION_ACCORDION
} from './mixins/mixins-names';

// should be i18n key format
export const CATEGORY_CONTENT: string = 'categories:content';
export const CATEGORY_FORMS: string = 'categories:forms';
export const CATEGORY_NAVIGATION: string = 'categories:navigation';
export const CATEGORY_LAYOUT: string = 'categories:layout';
export const CATEGORY_WINDOWS: string = 'categories:windows';
export const CATEGORY_MIXINS: string = 'categories:mixins';

export type CategoryOrder = {
    [key: string]: number
};

const ORDER: CategoryOrder = {
    [CATEGORY_CONTENT]: 1,
    [CATEGORY_LAYOUT]: 2,
    [CATEGORY_FORMS]: 3,
    [CATEGORY_NAVIGATION]: 4,
    [CATEGORY_WINDOWS]: 5,
    [CATEGORY_MIXINS]: 6
};

export interface ComponentMetaEx extends ComponentMeta {
    metaKey?: string;
    folder?: string;
    name?: string;
    production?: boolean;
    overview?: string;
    category?: string;
    preview?: Preview;
}

export type EnumMap = {
    [key: string]: string[];
};

export type CategoryComponentMap = {
    [key: string]: ComponentMetaEx[];
};

export class MetaAll implements PluginObject<any> {
    private categories: CategoryComponentMap = {};
    private baseMeta: Meta;
    private enums: EnumMap = {};

    public install(v, options) {
        if (!options) {
            throw new Error(
                'MetaAll.install -> you must provide a Meta object within the options argument'
            );
        }
        this.baseMeta = options as Meta;
        // mixins should be registered first, starting with the lowest order in the mixin hierarchy
        // if this doesn't work anymore, we'll have to add a meta.complete() method that will complete the attributes merge
        this.mergeMixin(
            MEDIA_QUERIES,
            require('@ulaval/modul-components/dist/mixins/media-queries/media-queries.meta.json'),
            'media-queries',
            false,
            false
        );
        this.mergeMixin(
            INPUT_STATE,
            require('@ulaval/modul-components/dist/mixins/input-state/input-state.meta.json'),
            'input-state',
            false,
            false
        );

        this.mergeMixin(
            ELEMENT_QUERIES,
            require('@ulaval/modul-components/dist/mixins/element-queries/element-queries.meta.json'),
            'element-queries',
            false,
            false
        );
        this.mergeMixin(
            INPUT_MANAGEMENT,
            require('@ulaval/modul-components/dist/mixins/input-management/input-management.meta.json'),
            'input-management',
            false,
            false
        );
        this.mergeMixin(
            INPUT_POPUP,
            require('@ulaval/modul-components/dist/mixins/input-popup/input-popup.meta.json'),
            'input-popup',
            false,
            false
        );
        this.mergeMixin(
            INPUT_WIDTH,
            require('@ulaval/modul-components/dist/mixins/input-width/input-width.meta.json'),
            'input-width',
            false,
            false
        );
        this.mergeMixin(
            INPUT_LABEL,
            require('@ulaval/modul-components/dist/mixins/input-label/input-label.meta.json'),
            'input-label',
            false,
            false
        );
        this.mergeMixin(
            OPEN_TRIGGER,
            require('@ulaval/modul-components/dist/mixins/open-trigger/open-trigger.meta.json'),
            'open-trigger',
            false,
            false
        );
        this.mergeMixin(
            PORTAL,
            require('@ulaval/modul-components/dist/mixins/portal/portal.meta.json'),
            'portal',
            false,
            false
        );
        this.mergeMixin(
            TRANSITION_ACCORDION,
            require('@ulaval/modul-components/dist/mixins/transition-accordion/transition-accordion.meta.json'),
            'transition-accordion',
            false,
            false
        );

        this.mergeComponentMeta(
            ACCORDION_NAME,
            require('@ulaval/modul-components/dist/components/accordion/accordion.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            ACCORDION_GROUP_NAME,
            require('@ulaval/modul-components/dist/components/accordion-group/accordion-group.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            BUTTON_NAME,
            require('@ulaval/modul-components/dist/components/button/button.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            BUTTON_GROUP_NAME,
            require('@ulaval/modul-components/dist/components/button-group/button-group.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            CHECKBOX_NAME,
            require('@ulaval/modul-components/dist/components/checkbox/checkbox.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            DATEFIELDS_NAME,
            require('@ulaval/modul-components/dist/components/datefields/datefields.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            DATEPICKER_NAME,
            require('@ulaval/modul-components/dist/components/datepicker/datepicker.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            DIALOG_NAME,
            require('@ulaval/modul-components/dist/components/dialog/dialog.meta.json'),
            CATEGORY_WINDOWS,
            true,
            true
        );
        this.mergeComponentMeta(
            DROPDOWN_NAME,
            require('@ulaval/modul-components/dist/components/dropdown/dropdown.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            DROPDOWN_ITEM_NAME,
            require('@ulaval/modul-components/dist/components/dropdown-item/dropdown-item.meta.json'),
            CATEGORY_FORMS,
            true,
            false
        );
        this.mergeComponentMeta(
            DROPDOWN_GROUP_NAME,
            require('@ulaval/modul-components/dist/components/dropdown-group/dropdown-group.meta.json'),
            CATEGORY_FORMS,
            false,
            false
        );
        this.mergeComponentMeta(
            DYNAMIC_TEMPLATE_NAME,
            require('@ulaval/modul-components/dist/components/dynamic-template/dynamic-template.meta.json'),
            CATEGORY_LAYOUT,
            false,
            false
        );
        this.mergeComponentMeta(
            FILE_SELECT_NAME,
            require('@ulaval/modul-components/dist/components/file-select/file-select.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            FILE_UPLOAD_NAME,
            require('@ulaval/modul-components/dist/components/file-upload/file-upload.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            FLEX_TEMPLATE_NAME,
            require('@ulaval/modul-components/dist/components/flex-template/flex-template.meta.json'),
            CATEGORY_LAYOUT,
            false,
            false
        );
        this.mergeComponentMeta(
            I18N_NAME,
            require('@ulaval/modul-components/dist/components/i18n/i18n.meta.json')
        );
        this.mergeComponentMeta(
            ICON_BUTTON_NAME,
            require('@ulaval/modul-components/dist/components/icon-button/icon-button.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            ICON_NAME,
            require('@ulaval/modul-components/dist/components/icon/icon.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            LIMIT_TEXT_NAME,
            require('@ulaval/modul-components/dist/components/limit-text/limit-text.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            LINK_NAME,
            require('@ulaval/modul-components/dist/components/link/link.meta.json'),
            CATEGORY_NAVIGATION,
            true,
            true
        );
        this.mergeComponentMeta(
            LIST_ITEM_NAME,
            require('@ulaval/modul-components/dist/components/list-item/list-item.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            MENU_NAME,
            require('@ulaval/modul-components/dist/components/menu/menu.meta.json'),
            CATEGORY_WINDOWS,
            true,
            true
        );
        this.mergeComponentMeta(
            MENU_ITEM_NAME,
            require('@ulaval/modul-components/dist/components/menu-item/menu-item.meta.json'),
            CATEGORY_WINDOWS,
            true,
            false
        );
        this.mergeComponentMeta(
            MESSAGE_NAME,
            require('@ulaval/modul-components/dist/components/message/message.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            MODAL_NAME,
            require('@ulaval/modul-components/dist/components/modal/modal.meta.json'),
            CATEGORY_WINDOWS,
            true,
            true
        );
        this.mergeComponentMeta(
            NAVBAR_NAME,
            require('@ulaval/modul-components/dist/components/navbar/navbar.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            NAVBAR_ITEM_NAME,
            require('@ulaval/modul-components/dist/components/navbar-item/navbar-item.meta.json'),
            CATEGORY_CONTENT,
            false,
            false
        );
        this.mergeComponentMeta(
            PANEL_NAME,
            require('@ulaval/modul-components/dist/components/panel/panel.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            POPPER_NAME,
            require('@ulaval/modul-components/dist/components/popper/popper.meta.json'),
            CATEGORY_WINDOWS,
            false,
            true
        );
        this.mergeComponentMeta(
            POPUP_NAME,
            require('@ulaval/modul-components/dist/components/popup/popup.meta.json'),
            CATEGORY_WINDOWS,
            false,
            true
        );
        this.mergeComponentMeta(
            PROGRESS_NAME,
            require('@ulaval/modul-components/dist/components/progress/progress.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            RADIO_NAME,
            require('@ulaval/modul-components/dist/components/radio/radio.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            RADIO_GROUP_NAME,
            require('@ulaval/modul-components/dist/components/radio-group/radio-group.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            SCROLL_TOP_NAME,
            require('@ulaval/modul-components/dist/components/scroll-top/scroll-top.meta.json'),
            CATEGORY_NAVIGATION,
            false,
            false
        );
        this.mergeComponentMeta(
            SIDEBAR_NAME,
            require('@ulaval/modul-components/dist/components/sidebar/sidebar.meta.json'),
            CATEGORY_WINDOWS,
            false,
            true
        );
        this.mergeComponentMeta(
            SPINNER_NAME,
            require('@ulaval/modul-components/dist/components/spinner/spinner.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            STATUS_NAME,
            require('@ulaval/modul-components/dist/components/status/status.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            STEP_NAME,
            require('@ulaval/modul-components/dist/components/step/step.meta.json'),
            CATEGORY_CONTENT,
            true,
            true
        );
        this.mergeComponentMeta(
            STEPPERS_NAME,
            require('@ulaval/modul-components/dist/components/steppers/steppers.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            STEPPERS_ITEM_NAME,
            require('@ulaval/modul-components/dist/components/steppers-item/steppers-item.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            SWITCH_NAME,
            require('@ulaval/modul-components/dist/components/switch/switch.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            TAB_PANEL_NAME,
            require('@ulaval/modul-components/dist/components/tab-panel/tab-panel.meta.json'),
            CATEGORY_CONTENT,
            false,
            false
        );
        this.mergeComponentMeta(
            TABS_NAME,
            require('@ulaval/modul-components/dist/components/tabs/tabs.meta.json'),
            CATEGORY_CONTENT,
            false,
            true
        );
        this.mergeComponentMeta(
            TEMPLATE_NAME,
            require('@ulaval/modul-components/dist/components/template/template.meta.json'),
            CATEGORY_LAYOUT,
            false,
            false
        );
        this.mergeComponentMeta(
            TEXTAREA_NAME,
            require('@ulaval/modul-components/dist/components/textarea/textarea.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            TEXTFIELD_NAME,
            require('@ulaval/modul-components/dist/components/textfield/textfield.meta.json'),
            CATEGORY_FORMS,
            true,
            true
        );
        this.mergeComponentMeta(
            TIMEPICKER_NAME,
            require('@ulaval/modul-components/dist/components/timepicker/timepicker.meta.json'),
            CATEGORY_FORMS,
            false,
            true
        );
        this.mergeComponentMeta(
            TOOLTIP_NAME,
            require('@ulaval/modul-components/dist/components/tooltip/tooltip.meta.json'),
            CATEGORY_WINDOWS,
            false,
            true
        );
        this.mergeComponentMeta(
            VALIDATION_MESSAGE_NAME,
            require('@ulaval/modul-components/dist/components/validation-message/validation-message.meta.json'),
            CATEGORY_FORMS,
            false,
            false
        );

        // this.mergeComponentMeta(
        //     SCROLL_TO_NAME,
        //     require('@ulaval/modul-components/dist/directives/scroll-to/scroll-to.meta.json'),
        //     CATEGORY_NAVIGATION,
        //     false,
        //     true
        // );
    }

    public getCategories(): string[] {
        let categories: string[] = Object.keys(this.categories).filter(key =>
            this.categories.hasOwnProperty(key)
        );
        if (!(process.env && (process.env.NODE_ENV as any).dev)) {
            categories = categories.filter(category =>
                this.categories[category].some(
                    component => component.production === true
                )
            );
        }
        return categories.sort((a, b) => {
            return ORDER[a] > ORDER[b] ? 1 : ORDER[a] === ORDER[b] ? 0 : -1;
        });
    }

    public getMetaByCategory(category: string): ComponentMetaEx[] {
        return process.env && (process.env.NODE_ENV as any).dev
            ? this.categories[category]
            : this.categories[category].filter(
                  component => component.production === true
              );
    }

    public getAllMeta(): ComponentMetaEx[] {
        return this.baseMeta
            .getMeta()
            .filter(
                m =>
                    (process.env && (process.env.NODE_ENV as any).dev) ||
                    (m as ComponentMetaEx).production === true
            );
    }

    public getEnum(name: string): string[] {
        return this.enums[name];
    }

    private mergeMixin(
        name: string,
        meta: string,
        folder: string,
        production?: boolean,
        defaultPreview?: boolean
    ): void {
        this.mergeComponentMeta(
            name,
            meta,
            CATEGORY_MIXINS,
            production,
            false,
            folder,
            `m-${folder}-meta:`
        );
    }

    private mergeComponentMeta(
        name: string,
        componentMeta: any,
        category?: string,
        production?: boolean,
        defaultPreview?: boolean,
        folder?: string,
        metaKey?: string
    ): void {
        let component: ComponentMeta = this.baseMeta.mergeComponentMeta(
            name,
            componentMeta
        );
        let ex: ComponentMetaEx = component as ComponentMetaEx;

        ex.metaKey = metaKey ? metaKey : component.tag + '-meta:';
        ex.name = ex.metaKey + 'name';
        ex.folder = folder ? folder : component.tag.substr(2);
        ex.overview = ex.folder + '.overview';
        ex.preview = defaultPreview ? ex.folder + '.preview' : undefined;
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

        if (component.enums) {
            this.enums = { ...this.enums, ...component.enums };
        }
    }
}

export default new MetaAll();
