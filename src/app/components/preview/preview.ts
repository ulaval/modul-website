import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './preview.html';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import DynamicTemplate from '@ulaval/modul-components/dist/components/dynamic-template/dynamic-template';
import { log } from 'util';

@WithRender
@Component
export class MPreview extends Vue {
    @Prop()
    public src: string;

    private template: any = {};
    private js: any = {};
    private jim: string = 'carrey';

    private a = {
        template: `<div id="A">
        <m-radio-group ref="g" :position="position" >
            <m-radio ref="a" position="left" value="radio1">Item 1</m-radio>
            <m-radio ref="b" position="right" value="radio2">Item 2</m-radio>
            <m-radio ref="c" value="radio3">Item 3</m-radio>
        </m-radio-group>
    </div>`,
        data: function() {
            return {
                position: 'right'
            };
        },
        methods: {
            changePosition: function () {
                this.position = 'right';
            }
        }
    };

    private b = {
        template: `<div id="B">
        <m-radio-group ref="g" :position="position" >
            <m-radio ref="a" position="left" value="radio1">Item 1</m-radio>
        </m-radio-group>
    </div>`,
        data: function() {
            return {
                position: 'right'
            };
        },
        methods: {
            changePosition: function () {
                this.position = 'right';
            }
        }
    };

    protected created() {
        this.template = this.a;
    }

    // protected mounted(): void {
    //     let path = '../../..' + this.src;
    //     console.log(this.src);
    //     console.log(path);

    //     setTimeout(() => {
    //         // this.template = require('../../../assets/md/m-dropdown.preview.fr.js').default;
    //         // this.template = require(this.src).default;
    //         // this.template = require(path).default;
    //         // let bundle = (require as any)(['bundle-loader!' + path]);
    //         // function(waitForChunk) {
    //         //     console.log(bundle);
    //         // };

    //         let dynamicLoad = (require as any)(['bundle-loader!' + path]);
    //         dynamicLoad(function (loadedModule) {
    //             this.template = dynamicLoad.default;
    //             console.log(loadedModule);
    //         });

    //         // this.template = bundle.default;
    //     }, 3000);

    // }

    private get preview(): string {
        this.template = Vue.component(this.jim, this.template);
        return this.jim;
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
