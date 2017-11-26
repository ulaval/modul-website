import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './dark-template.html?style=./dark-template.scss';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class MDarkTemplate extends Vue {

    private defaultTitle: string = 'Add a title';
    private headerMessage: string = 'You must put a title in the header slot';
    private previewMessage: string = 'You must put text in the preview slot';
    private defaultSlotMessage: string = 'You must put content in the default slot';

    protected mounted(): void {
        if (!this.hasHeader) {
            console.error(this.headerMessage);
        }

        if (!this.hasPreview) {
            console.error(this.previewMessage);
        }

        if (!this.hasDefalutSlot) {
            console.error(this.defaultSlotMessage);
        }
    }

    private get hasBacklink(): boolean {
        return !!this.$slots.backlink;
    }

    private get hasHeader(): boolean {
        return !!this.$slots.header;
    }

    private get hasLeftArrow(): boolean {
        return !!this.$slots.leftArrow;
    }

    private get hasRightArrow(): boolean {
        return !!this.$slots.rightArrow;
    }

    private get hasPreview(): boolean {
        return !!this.$slots.preview;
    }

    private get hasDefalutSlot(): boolean {
        return !!this.$slots.default;
    }
}
export const DARK_TEMPLATE_NAME: string = 'modul-dark-template';

const DarkTemplatePlugin: PluginObject<any> = {
    install(v, options) {
        v.component(DARK_TEMPLATE_NAME, MDarkTemplate);
    }
};

export default DarkTemplatePlugin;
