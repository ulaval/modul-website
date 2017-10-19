import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './preview.html';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import DynamicTemplate from '@ulaval/modul-components/dist/components/dynamic-template/dynamic-template';

@WithRender
@Component
export class MPreview extends Vue {
    @Prop()
    public src: string;

    private preview: object = {};

    protected mounted(): void {
        console.log(this.src);
        // if (this.src) {
        this.preview = require('../../../assets/md/m-dropdown.preview.fr.js').default;
        // }
    }

    // public get preview() {
    //     // if (this.src) {
    //     let preview = {};
    //     (require as any).ensure(['../../../assets/md/m-dropdown.preview.fr.js'], () => {
    //         preview = require('../../../assets/md/m-dropdown.preview.fr.js');
    //     });

    //     // console.log(preview.default);
    //     // console.log(typeof preview.default);
    //     // }
    //     return (preview as any).default;
    // }

}
export const PREVIEW_NAME: string = 'modul-preview';

const PreviewPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(DynamicTemplate);
        v.component(PREVIEW_NAME, MPreview);
    }
};

export default PreviewPlugin;
