import Vue, { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './dark-template.html?style=./dark-template.scss';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class MDarkTemplate extends Vue {
    private headerMessage: string = 'You must put a title in the header slot';
    private defaultSlotMessage: string = 'You must put content in the default slot';

    protected mounted(): void {
        if (!this.hasHeaderSlot) {
            console.error(this.headerMessage);
        }

        if (!this.hasDefalutSlot) {
            console.error(this.defaultSlotMessage);
        }
    }

    private get hasBacklinkSlot(): boolean {
        return !!this.$slots.backlink;
    }

    private get hasHeaderSlot(): boolean {
        return !!this.$slots.header;
    }

    private get hasLeftArrowSlot(): boolean {
        return !!this.$slots.leftArrow;
    }

    private get hasRightArrowSlot(): boolean {
        return !!this.$slots.rightArrow;
    }

    private get hasIntroductionSlot(): boolean {
        return !!this.$slots.introduction;
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
