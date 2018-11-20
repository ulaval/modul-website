import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { ModulComponentStatus } from '../../meta/meta-all';
import { ROUTER_EVENTS, ROUTER_OVERVIEW, ROUTER_PROPERTIES, ROUTER_SLOTS } from '../../router';
import * as ComponentsActions from '../../store/modules/components/actions';
import * as ComponentsGetters from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './component-details.html?style=./component-details.scss';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    private intenalCodePreviewOpen: boolean = false;

    protected beforeUpdate(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_PREVIEW_GET, {
            restAdapter: this.$http
        });
    }

    @Watch('$route')
    private routeChanged(route): void {
        this.intenalCodePreviewOpen = false;
    }

    private get currentTab(): string {
        switch (this.$route.meta.type) {
            case ROUTER_PROPERTIES:
                return 'properties';
            case ROUTER_EVENTS:
                return 'events';
            case ROUTER_SLOTS:
                return 'slots';
            default:
                return 'overview';
        }

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
    private get slots(): string {
        return this.$routerIndex.for(ROUTER_SLOTS, () => this.component.tag);
    }
    private get events(): string {
        return this.$routerIndex.for(ROUTER_EVENTS, () => this.component.tag);
    }

    private get overview(): string {
        return this.$routerIndex.for(ROUTER_OVERVIEW, () => this.component.tag);
    }

    private isProduction(status): boolean {
        return status === ModulComponentStatus.Production;
    }

    private get htmlTag(): string {
        if (this.component) {
            return `<${this.component.tag}></${this.component.tag}>`;
        } else {
            return '';
        }
    }

    private get openCloseLabel(): string {
        if (this.intenalCodePreviewOpen) {
            return this.$i18n.translate('modul:close-label');
        } else {
            return this.$i18n.translate('modul:code-label');
        }
    }
}
