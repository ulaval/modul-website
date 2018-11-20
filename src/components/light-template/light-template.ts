import Vue, { PluginObject } from 'vue';
import Component from 'vue-class-component';
import WithRender from './light-template.html?style=./light-template.scss';

@WithRender
@Component
export class MLightTemplate extends Vue {

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

    private get hasDefaultSlot(): boolean {
        return !!this.$slots.default;
    }
}
export const LIGHT_TEMPLATE_NAME: string = 'modul-light-template';

const LightTemplatePlugin: PluginObject<any> = {
    install(v, options) {
        v.component(LIGHT_TEMPLATE_NAME, MLightTemplate);
    }
};

export default LightTemplatePlugin;
