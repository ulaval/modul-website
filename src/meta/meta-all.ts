import { ACCORDION_GROUP_NAME, ACCORDION_NAME, BUTTON_GROUP_NAME, BUTTON_NAME, CAROUSEL_ITEM_NAME, CAROUSEL_NAME, CHECKBOX_NAME, DATEFIELDS_NAME, DATEPICKER_NAME, DIALOG_NAME, DROPDOWN_GROUP_NAME, DROPDOWN_ITEM_NAME, DROPDOWN_NAME, DYNAMIC_TEMPLATE_NAME, FILE_SELECT_NAME, FILE_UPLOAD_NAME, FLEX_TEMPLATE_NAME, I18N_NAME, ICON_BUTTON_NAME, ICON_FILE_NAME, ICON_NAME, INPLACE_EDIT_NAME, INPUT_STYLE_NAME, LIMIT_TEXT_NAME, LINK_NAME, LIST_ITEM_NAME, MENU_ITEM_NAME, MENU_NAME, MESSAGE_NAME, MODAL_NAME, NAVBAR_ITEM_NAME, NAVBAR_NAME, OVERLAY_NAME, PANEL_NAME, PHONE_NUMBER_NAME, POPPER_NAME, POPUP_NAME, PROGRESS_NAME, RADIO_GROUP_NAME, RADIO_NAME, RADIO_STYLE_NAME, SCROLL_TOP_NAME, SIDEBAR_NAME, SLIDER_NAME, SPINNER_NAME, STATUS_NAME, STEPPERS_ITEM_NAME, STEPPERS_NAME, STEP_NAME, SWITCH_NAME, TABS_NAME, TAB_PANEL_NAME, TEMPLATE_NAME, TEXTAREA_NAME, TEXTFIELD_NAME, TIMEPICKER_NAME, TOOLTIP_NAME, VALIDATION_MESSAGE_NAME } from '@ulaval/modul-components/dist/components/component-names';
import { ComponentMeta, Meta, Preview } from '@ulaval/modul-components/dist/meta/meta';
import { Meta as Meta2, MetaV2, MetaV2Converter } from '@ulaval/modul-components/dist/meta/v2';
import { PluginObject } from 'vue';
import { ELEMENT_QUERIES, INPUT_LABEL, INPUT_MANAGEMENT, INPUT_POPUP, INPUT_STATE, INPUT_WIDTH, MEDIA_QUERIES, OPEN_TRIGGER, PORTAL, TRANSITION_ACCORDION } from './mixins/mixins-names';

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
    status?: string;
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

export enum ModulComponentStatus {
    Production = 'production',
    Beta = 'beta'
}

export class MetaAll implements PluginObject<any> {
    private categories: CategoryComponentMap = {};
    private baseMeta: Meta;
    private enums: EnumMap = {};
    public modulVersion: string;

    public install(v, options) {
        if (!options) {
            throw new Error(
                'MetaAll.install -> you must provide a Meta object within the options argument'
            );
        }
        this.baseMeta = options as Meta;

        let metaV2 = new MetaV2(require('@ulaval/modul-components/dist/modul-meta.json') as Meta2);
        let metaV2Converter = new MetaV2Converter(metaV2);

        // get the modulVersion from v2
        this.modulVersion = metaV2.meta.modulVersion;

        // mixins should be registered first, starting with the lowest order in the mixin hierarchy
        // if this doesn't work anymore, we'll have to add a meta.complete() method that will complete the attributes merge
        this.mergeMixin(
            MEDIA_QUERIES,
            metaV2Converter.extractComponentMetaFromV2('media-queries'),
            'media-queries',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            INPUT_STATE,
            metaV2Converter.extractComponentMetaFromV2('input-state'),
            'input-state',
            ModulComponentStatus.Beta,
            false
        );

        this.mergeMixin(
            ELEMENT_QUERIES,
            metaV2Converter.extractComponentMetaFromV2('element-queries'),
            'element-queries',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            INPUT_MANAGEMENT,
            metaV2Converter.extractComponentMetaFromV2('input-management'),
            'input-management',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            INPUT_POPUP,
            metaV2Converter.extractComponentMetaFromV2('input-popup'),
            'input-popup',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            INPUT_WIDTH,
            metaV2Converter.extractComponentMetaFromV2('input-width'),
            'input-width',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            INPUT_LABEL,
            metaV2Converter.extractComponentMetaFromV2('input-label'),
            'input-label',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            OPEN_TRIGGER,
            metaV2Converter.extractComponentMetaFromV2('open-trigger'),
            'open-trigger',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            PORTAL,
            metaV2Converter.extractComponentMetaFromV2('portal'),
            'portal',
            ModulComponentStatus.Beta,
            false
        );
        this.mergeMixin(
            TRANSITION_ACCORDION,
            metaV2Converter.extractComponentMetaFromV2('transition-accordion'),
            'transition-accordion',
            ModulComponentStatus.Beta,
            false
        );

        this.mergeComponentMeta(
            ACCORDION_NAME,
            metaV2Converter.extractComponentMetaFromV2(ACCORDION_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            ACCORDION_GROUP_NAME,
            metaV2Converter.extractComponentMetaFromV2(ACCORDION_GROUP_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            BUTTON_NAME,
            metaV2Converter.extractComponentMetaFromV2(BUTTON_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            BUTTON_GROUP_NAME,
            metaV2Converter.extractComponentMetaFromV2(BUTTON_GROUP_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            CAROUSEL_NAME,
            metaV2Converter.extractComponentMetaFromV2(CAROUSEL_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            CAROUSEL_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(CAROUSEL_ITEM_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            CHECKBOX_NAME,
            metaV2Converter.extractComponentMetaFromV2(CHECKBOX_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            DATEFIELDS_NAME,
            metaV2Converter.extractComponentMetaFromV2(DATEFIELDS_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            DATEPICKER_NAME,
            metaV2Converter.extractComponentMetaFromV2(DATEPICKER_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            DIALOG_NAME,
            metaV2Converter.extractComponentMetaFromV2(DIALOG_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            DROPDOWN_NAME,
            metaV2Converter.extractComponentMetaFromV2(DROPDOWN_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            DROPDOWN_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(DROPDOWN_ITEM_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            DROPDOWN_GROUP_NAME,
            metaV2Converter.extractComponentMetaFromV2(DROPDOWN_GROUP_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            DYNAMIC_TEMPLATE_NAME,
            metaV2Converter.extractComponentMetaFromV2(DYNAMIC_TEMPLATE_NAME),
            CATEGORY_LAYOUT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            OVERLAY_NAME,
            metaV2Converter.extractComponentMetaFromV2(OVERLAY_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            FILE_SELECT_NAME,
            metaV2Converter.extractComponentMetaFromV2(FILE_SELECT_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            FILE_UPLOAD_NAME,
            metaV2Converter.extractComponentMetaFromV2(FILE_UPLOAD_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            FLEX_TEMPLATE_NAME,
            metaV2Converter.extractComponentMetaFromV2(FLEX_TEMPLATE_NAME),
            CATEGORY_LAYOUT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            I18N_NAME,
            metaV2Converter.extractComponentMetaFromV2(I18N_NAME)
        );
        this.mergeComponentMeta(
            ICON_BUTTON_NAME,
            metaV2Converter.extractComponentMetaFromV2(ICON_BUTTON_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            ICON_FILE_NAME,
            metaV2Converter.extractComponentMetaFromV2(ICON_FILE_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            ICON_NAME,
            metaV2Converter.extractComponentMetaFromV2(ICON_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            INPUT_STYLE_NAME,
            metaV2Converter.extractComponentMetaFromV2(INPUT_STYLE_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            LIMIT_TEXT_NAME,
            metaV2Converter.extractComponentMetaFromV2(LIMIT_TEXT_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            LINK_NAME,
            metaV2Converter.extractComponentMetaFromV2(LINK_NAME),
            CATEGORY_NAVIGATION,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            LIST_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(LIST_ITEM_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            MENU_NAME,
            metaV2Converter.extractComponentMetaFromV2(MENU_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            MENU_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(MENU_ITEM_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            MESSAGE_NAME,
            metaV2Converter.extractComponentMetaFromV2(MESSAGE_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            MODAL_NAME,
            metaV2Converter.extractComponentMetaFromV2(MODAL_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            NAVBAR_NAME,
            metaV2Converter.extractComponentMetaFromV2(NAVBAR_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            NAVBAR_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(NAVBAR_ITEM_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            PANEL_NAME,
            metaV2Converter.extractComponentMetaFromV2(PANEL_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            PHONE_NUMBER_NAME,
            metaV2Converter.extractComponentMetaFromV2(PHONE_NUMBER_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            POPPER_NAME,
            metaV2Converter.extractComponentMetaFromV2(POPPER_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            POPUP_NAME,
            metaV2Converter.extractComponentMetaFromV2(POPUP_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            PROGRESS_NAME,
            metaV2Converter.extractComponentMetaFromV2(PROGRESS_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            RADIO_NAME,
            metaV2Converter.extractComponentMetaFromV2(RADIO_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            RADIO_GROUP_NAME,
            metaV2Converter.extractComponentMetaFromV2(RADIO_GROUP_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            RADIO_STYLE_NAME,
            metaV2Converter.extractComponentMetaFromV2(RADIO_STYLE_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            SCROLL_TOP_NAME,
            metaV2Converter.extractComponentMetaFromV2(SCROLL_TOP_NAME),
            CATEGORY_NAVIGATION,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            SIDEBAR_NAME,
            metaV2Converter.extractComponentMetaFromV2(SIDEBAR_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            SLIDER_NAME,
            metaV2Converter.extractComponentMetaFromV2(SLIDER_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            SPINNER_NAME,
            metaV2Converter.extractComponentMetaFromV2(SPINNER_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            STATUS_NAME,
            metaV2Converter.extractComponentMetaFromV2(STATUS_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            STEP_NAME,
            metaV2Converter.extractComponentMetaFromV2(STEP_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            STEPPERS_NAME,
            metaV2Converter.extractComponentMetaFromV2(STEPPERS_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            STEPPERS_ITEM_NAME,
            metaV2Converter.extractComponentMetaFromV2(STEPPERS_ITEM_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            SWITCH_NAME,
            metaV2Converter.extractComponentMetaFromV2(SWITCH_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            TAB_PANEL_NAME,
            metaV2Converter.extractComponentMetaFromV2(TAB_PANEL_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            TABS_NAME,
            metaV2Converter.extractComponentMetaFromV2(TABS_NAME),
            CATEGORY_CONTENT,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            TEMPLATE_NAME,
            metaV2Converter.extractComponentMetaFromV2(TEMPLATE_NAME),
            CATEGORY_LAYOUT,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            TEXTAREA_NAME,
            metaV2Converter.extractComponentMetaFromV2(TEXTAREA_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            TEXTFIELD_NAME,
            metaV2Converter.extractComponentMetaFromV2(TEXTFIELD_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
        );
        this.mergeComponentMeta(
            TIMEPICKER_NAME,
            metaV2Converter.extractComponentMetaFromV2(TIMEPICKER_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            TOOLTIP_NAME,
            metaV2Converter.extractComponentMetaFromV2(TOOLTIP_NAME),
            CATEGORY_WINDOWS,
            ModulComponentStatus.Beta,
            true
        );
        this.mergeComponentMeta(
            VALIDATION_MESSAGE_NAME,
            metaV2Converter.extractComponentMetaFromV2(VALIDATION_MESSAGE_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Beta,
            false
        );
        this.mergeComponentMeta(
            INPLACE_EDIT_NAME,
            metaV2Converter.extractComponentMetaFromV2(INPLACE_EDIT_NAME),
            CATEGORY_FORMS,
            ModulComponentStatus.Production,
            true
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
        return categories.sort((a, b) => {
            return ORDER[a] > ORDER[b] ? 1 : ORDER[a] === ORDER[b] ? 0 : -1;
        });
    }

    public getMetaByCategory(category: string): ComponentMetaEx[] {
        return this.categories[category];
    }

    public getAllMeta(): ComponentMetaEx[] {
        return this.baseMeta.getMeta();
    }

    public getModulVersion(): string {
        return this.modulVersion;
    }

    public getEnum(name: string): string[] {
        return this.enums[name];
    }

    private mergeMixin(
        name: string,
        meta: ComponentMeta,
        folder: string,
        production?: string,
        defaultPreview?: boolean
    ): void {
        this.mergeComponentMeta(
            name,
            meta,
            CATEGORY_MIXINS,
            production,
            defaultPreview,
            folder,
            `m-${folder}-meta:`
        );
    }

    private mergeComponentMeta(
        name: string,
        componentMeta: ComponentMeta,
        category?: string,
        production?: string,
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
        ex.name = ex.metaKey + 'website-name';
        ex.folder = folder ? folder : component.tag.substr(2);
        ex.overview = ex.folder + '.overview';
        ex.preview = defaultPreview ? ex.folder + '.preview' : undefined;
        ex.status = production;

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
