import Vue, { PluginObject } from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './demo.html?style=./demo.scss';
import hljs from 'highlight.js';
import { TransitionAccordion } from '@ulaval/modul-components/dist/mixins/transition-accordion/transition-accordion';

@WithRender
@Component({
    mixins: [TransitionAccordion]
})
export class MDemo extends Vue {

    public disponible: boolean = false;
    public html: string = '';
    public htmlHl: string = '';
    public typescript: string = '';
    public typescriptHl: string = '';

    public open: boolean = false;
    public activeTab: string = '';

    protected mounted(): void {
        this.$nextTick(() => {
            this.html = (this.$el.getElementsByClassName('hlhtml')[0] as HTMLElement).innerText;
            this.htmlHl = hljs.highlight('html', this.html).value;
            this.typescript = (this.$el.getElementsByClassName('hljavascript')[0] as HTMLElement).innerText;
            this.typescriptHl = hljs.highlight('javascript', this.typescript).value;
            this.activeTab = 'html';
            this.disponible = true;
        });
    }

    private get label(): string {
        if (this.open) {
            return 'Fermer';
        } else {
            return 'Code';
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
