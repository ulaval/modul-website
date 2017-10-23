import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './page-template.html?style=./page-template.scss';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class MPageTemplate extends Vue {

    private defaultTitle: string = 'Add a title';
    private headerMessage: string = 'You must put a title in the header slot';
    private previewMessage: string = 'You must put text in the preview slot';
    private bodyMessage: string = 'You must put content in the body slot';

    protected mounted(): void {
        if (!this.hasHeader) {
            console.error(this.headerMessage);
        }

        if (!this.hasPreview) {
            console.error(this.previewMessage);
        }

        if (!this.hasBody) {
            console.error(this.bodyMessage);
        }
    }

    private get hasHeader(): boolean {
        return !!this.$slots.header;
    }

    private get hasPreview(): boolean {
        return !!this.$slots.preview;
    }

    private get hasBody(): boolean {
        return !!this.$slots.body;
    }
}
export const PAGE_TEMPLATE_NAME: string = 'modul-page-template';

const PageTemplatePlugin: PluginObject<any> = {
    install(v, options) {
        v.component(PAGE_TEMPLATE_NAME, MPageTemplate);
    }
};

export default PageTemplatePlugin;
