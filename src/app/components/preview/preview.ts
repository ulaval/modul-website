import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import WithRender from './preview.html';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import DynamicTemplate from '@ulaval/modul-components/dist/components/dynamic-template/dynamic-template';
import { log } from 'util';

@WithRender
@Component
export class MPreview extends Vue {
    @Prop()
    public src: string;
    @Prop({ default: false })
    public withHighlight: boolean;

    private template: any = {};
    private stringTemplate: string = '';
    private js: any = {};
    private jim: string = 'preview';

    private a = {
        template: `<div id="A"></div>`
    };

    protected created() {
        this.template = this.a;
    }

    protected mounted(): void {
        this.fetchPreview();
    }

    private fetchPreview() {
        let s: string = this.src;
        (require as any)(['bundle-loader!../../../assets/md/' + s + '.js'], (waitForChunk) => {
            waitForChunk((chunk) => {
                this.template = chunk.default;
                // this.stringTemplate = this.template.template;
                this.stringTemplate = JSON.stringify(this.template, ['template', 'data', 'methods'], 4);
                // console.log('obj : ', this.template);
            });
        });
    }

    private get preview(): string {
        this.template = Vue.component(this.jim, this.template);
        return this.jim;
    }

    private get getStringTemplate(): string {
        return this.stringTemplate;
    }

}
export const PREVIEW_NAME: string = 'modul-preview';

const PreviewPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(DynamicTemplate);
        v.component(PREVIEW_NAME, MPreview);
    }
};

export default PreviewPlugin;
