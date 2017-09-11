import Vue from 'vue';
import Component from 'vue-class-component';
// import store from './store';
import WithRender from './component-details.html?style=./component-details.scss';
import { ModulWebsite } from '../modul-website';
import { Watch } from 'vue-property-decorator';
import { ROUTES, COMPONENT_PROPERTIES, COMPONENT_OVERVIEW } from '@/app/router';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ModulActions from '@/app/store/actions';
import * as ModulGetters from '@/app/store/getters';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    protected mounted(): void {
        // this.getMdPreview();
    }

    private get categoryComponents(): ComponentMeta[] {
        let result: ComponentMeta[] = [];
        if (this.state.category) {
            result = Meta.getMetaByCategory(this.state.category);
        }
        return result;
    }

    // @Watch('$route')
    // protected getMdPreview(): void {
    //     if (this.state.component && this.state.component.preview != false && this.state.component.preview != true) {
    //         this.$store.dispatch(ModulActions.COMPONENT_PREVIEW_GET, {
    //             restAdapter: this.$http,
    //             markdown: this.state.component.preview
    //         });
    //     }
    // }

    private get markdownPreview() {
        return this.$store.getters[ModulGetters.GET_MARKDOWN_PREVIEW];
    }

    private get markdownOverview() {
        return this.$store.getters[ModulGetters.GET_MARKDOWN_DOCUMENTATION];
    }

    private get MetaComponents() {
        return this.$store.getters[ModulGetters.GET_COMPONENT_META];
    }

    private get properties(): string {
        return ROUTES[COMPONENT_PROPERTIES];
    }

    private get overview(): string {
        return ROUTES[COMPONENT_OVERVIEW];
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.state.componentRoutes[tag].url);
    }

    private getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }

    private get htmlTag(): string {
        if (this.state.component) {
            return `<${this.state.component.tag}></${this.state.component.tag}>`;
        } else {
            return '';
        }
    }
}
