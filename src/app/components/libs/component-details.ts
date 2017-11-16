import Vue from 'vue';
import Component from 'vue-class-component';
// import store from './store';
import WithRender from './component-details.html?style=./component-details.scss';
import { ModulWebsite } from '../modul-website';
import { ROUTES, COMPONENT_PROPERTIES, COMPONENT_OVERVIEW, COMPONENT_VARIANT } from '@/app/router';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    private codePreviewOpen: boolean = false;

    protected beforeUpdate(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_PREVIEW_GET, {
            restAdapter: this.$http
        });
    }

    private openCodePreview() {
        this.codePreviewOpen = !this.codePreviewOpen;
    }

    private get markdownPreview() {
        return this.$store.getters[ComponentsGetters.GET_MARKDOWN_PREVIEW];
    }

    private get component(): ComponentMeta | null {
        return this.$store.getters[ComponentsGetters.GET_COMPONENT];
    }

    private get properties(): string {
        return ROUTES[COMPONENT_PROPERTIES];
    }

    private get overview(): string {
        return ROUTES[COMPONENT_OVERVIEW];
    }

    private get variant(): string {
        return ROUTES[COMPONENT_VARIANT];
    }

    private get htmlTag(): string {
        if (this.component) {
            return `<${this.component.tag}></${this.component.tag}>`;
        } else {
            return '';
        }
    }
}
