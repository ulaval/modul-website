import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './highlight.html?style=./highlight.scss';
import * as hljs from 'highlight.js';
import { log } from 'util';

@WithRender
@Component
export class MHighlight extends Vue {

    @Prop({ default: 'html' })
    public lang: string;
    @Prop()
    public template: string;
    public languageSubset = ['js', 'html', 'xml', 'css'];
    public language: string = '';

    private get highlightedTemplate(): string {
        let result: any = '';
        if (this.template) {
            result = hljs.highlightAuto(this.template, this.languageSubset);
            this.language = result.language;
        }
        return result.value;
    }

    private get languageClass(): string {
        return this.language;
    }
}

export const HIGHLIGHT_NAME: string = 'm-highlight';

const HighlightPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(HIGHLIGHT_NAME, MHighlight);
    }
};

export default HighlightPlugin;
