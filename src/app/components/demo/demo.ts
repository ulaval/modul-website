import Vue, { PluginObject } from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './demo.html?style=./demo.scss';
import hljs from 'highlight.js';
import { TransitionAccordion } from '@ulaval/modul-components/dist/mixins/transition-accordion/transition-accordion';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';

@WithRender
@Component({
    mixins: [TransitionAccordion]
})
export class MDemo extends ModulVue {

    public disponible: boolean = false;
    public html: string = '';
    public htmlHl: string = '';
    public typescriptElement: HTMLElement;
    public typescript: string = '';
    public typescriptHl: string = '';
    public cssElement: HTMLElement;
    public css: string = '';
    public cssHl: string = '';

    public open: boolean = false;
    public activeTab: string = '';

    protected mounted(): void {
        this.$nextTick(() => {
            this.html = (this.$el.getElementsByClassName('hlhtml')[0] as HTMLElement).innerText;
            this.htmlHl = hljs.highlight('html', this.html).value;

            this.typescriptElement = (this.$el.getElementsByClassName('hljavascript')[0] as HTMLElement);
            if (this.typescriptElement) {
                this.typescript = this.typescriptElement.innerText;
                this.typescriptHl = hljs.highlight('javascript', this.typescript).value;
            }

            this.cssElement = (this.$el.getElementsByClassName('hlcss')[0] as HTMLElement);
            if (this.cssElement) {
                this.css = this.cssElement.innerText;
                this.cssHl = hljs.highlight('css', this.css).value;
                let style: HTMLStyleElement = document.createElement('style');
                style.innerHTML = this.cssElement.innerText;
                this.$el.appendChild(style);
            }

            this.activeTab = 'html';
            this.disponible = true;
        });
    }

    private get label(): string {
        if (this.open) {
            return this.$i18n.translate('modul:close-label');
        } else {
            return this.$i18n.translate('modul:code-label');
        }
    }

    private get htmlActive(): boolean {
        if (this.activeTab === 'html') {
            return true;
        }
        return false;
    }

    private get typescriptActive(): boolean {
        if (this.activeTab === 'typescript') {
            return true;
        }
        return false;
    }

    private get cssActive(): boolean {
        if (this.activeTab === 'css') {
            return true;
        }
        return false;
    }

    private tab(id: string): void {
        this.activeTab = id;
    }

    private defaultSlot(): boolean {
        return !!this.$slots.default;
    }
}

export const DEMO_NAME: string = 'modul-demo';

const DemoPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(DEMO_NAME, MDemo);
    }
};

export default DemoPlugin;
