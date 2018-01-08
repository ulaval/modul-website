import Vue, { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './go.html?style=./go.scss';

@WithRender
@Component
export class MGo extends Vue {

    @Prop()
    public name: string;

    @Prop()
    public tab: string;

    private get URL(): string | undefined {
        for (let section of (this.$router as any).options.routes) {
            if (section.children) {
                for (let route of section.children) {
                    if (route.meta && route.meta.page == this.name) {
                        let path: string = route.path;
                        let prodPath: string = '';

                        if (this.tab) {
                            path += '/' + this.tab;
                        }

                        if (!(process.env.NODE_ENV as any).dev) {
                            prodPath = '/modul';
                        }

                        return prodPath + path;
                    }
                }
            }
        }
        return undefined;
    }
}

export const GO_NAME: string = 'modul-go';

const GoPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(GO_NAME, MGo);
    }
};

export default GoPlugin;
