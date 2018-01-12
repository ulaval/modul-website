import { PluginObject } from 'vue';
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './go.html?style=./go.scss';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class MGo extends ModulWebsite {

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

    private get meta(): ComponentMeta {
        return Meta.getMetaByTag(this.name);
    }

    private get label(): string {
        return this.meta ? this.$i18n.translate(this.meta.tag + '-meta:name').toLowerCase() : this.$i18n.translate('name:' + this.name).toLowerCase();
    }

    private get tag(): string {
        return this.meta ? this.meta.tag : undefined;
    }

    private defaultSlot(): boolean {
        return !!this.$slots.default;
    }
}

export const GO_NAME: string = 'modul-go';

const GoPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(GO_NAME, MGo);
    }
};

export default GoPlugin;
