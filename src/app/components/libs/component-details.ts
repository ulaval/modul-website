import { ROUTER_OVERVIEW, ROUTER_PROPERTIES } from '@/app/router';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Component from 'vue-class-component';

import { ModulWebsite } from '../modul-website';
import WithRender from './component-details.html?style=./component-details.scss';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    private intenalCodePreviewOpen: boolean = false;

    private currentTab: string = 'overview';

    protected beforeUpdate(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_PREVIEW_GET, {
            restAdapter: this.$http
        });
    }

    private get codePreviewOpen(): boolean {
        return this.intenalCodePreviewOpen;
    }

    private toggleOpenCodePreview(event: MouseEvent): void {
        this.intenalCodePreviewOpen = !this.intenalCodePreviewOpen;
        (event.currentTarget as HTMLElement).blur();
    }

    private get markdownPreview() {
        return this.$store.getters[ComponentsGetters.GET_MARKDOWN_PREVIEW];
    }

    private get component(): ComponentMeta | null {
        return this.$store.getters[ComponentsGetters.GET_COMPONENT];
    }

    private get properties(): string {
        return this.$routerIndex.for(ROUTER_PROPERTIES, _ => this.component.tag);
    }

    private get overview(): string {
        return this.$routerIndex.for(ROUTER_OVERVIEW, _ => this.component.tag);
    }

    private get htmlTag(): string {
        if (this.component) {
            return `<${this.component.tag}></${this.component.tag}>`;
        } else {
            return '';
        }
    }
}
