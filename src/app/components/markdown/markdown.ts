import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './markdown.html';
import MarkdownIt from 'markdown-it';

@WithRender
@Component
export class MMarkdown extends Vue {
    @Prop()
    public template: string;

    private renderer: MarkdownIt = new MarkdownIt();

    private get propTemplate(): string {
        let result = '';
        if (this.template) {
            result = this.renderer.render(this.template).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        }
        return result;
    }
}

export const MARKDOWN_NAME: string = 'm-markdown';
