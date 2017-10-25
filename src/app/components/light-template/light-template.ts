import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './light-template.html?style=./light-template.scss';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class MLightTemplate extends Vue {

    private defaultTitle: string = 'Add a dropdown';
    private headerMessage: string = 'You must put a dropdown in the header slot';
    private bodyMessage: string = 'You must put content in the body slot';

    protected mounted(): void {
        if (!this.hasHeader) {
            console.error(this.headerMessage);
        }

        if (!this.hasBody) {
            console.error(this.bodyMessage);
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

    private get hasBody(): boolean {
        return !!this.$slots.body;
    }
}
export const LIGHT_TEMPLATE_NAME: string = 'modul-light-template';

const LightTemplatePlugin: PluginObject<any> = {
    install(v, options) {
        v.component(LIGHT_TEMPLATE_NAME, MLightTemplate);
    }
};

export default LightTemplatePlugin;
