import { PluginObject } from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './demo.html?style=./demo.scss';

@WithRender
@Component
export class MDemo extends ModulWebsite {

    public disponible: boolean = false;
    public html: HTMLElement = undefined;
    public htmlText: string = '';
    public javascript: string = '';

    protected mounted(): void {
        this.$nextTick(() => {
            // this.html = (this.$el.getElementsByClassName('html')[0] as HTMLElement);
            // this.htmlText = this.html.innerText;
            // this.javascript = (this.$el.getElementsByClassName('hljavascript')[0] as HTMLElement).innerText;
            this.disponible = true;
            console.log(this.html);
        });

    }

    // @Prop()
    // public name: string;

    // @Prop()
    // public tab: string;

    // private get URL(): string | undefined {
    //     for (let section of (this.$router as any).options.routes) {
    //         if (section.children) {
    //             for (let route of section.children) {
    //                 if (route.meta && route.meta.page == this.name) {
    //                     let path: string = route.path;

    //                     if (this.tab) {
    //                         path += '/' + this.tab;
    //                     }

    //                     return path;
    //                 }
    //             }
    //         }
    //     }
    //     return undefined;
    // }

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
