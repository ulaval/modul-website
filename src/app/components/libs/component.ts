import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component.html';
import { Watch } from 'vue-property-decorator';
import * as ComponentsActions from '@/app/store/modules/components/actions';
import * as ComponentsGetters from '@/app/store/modules/components/getters';
import { KeyMap, RouteMap, ComponentsState } from '@/app/store/modules/components/components-state';
import { ModulWebsite } from '../modul-website';
import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { fail } from 'assert';
import { log } from 'util';
import { components } from '@ulaval/modul-components/dist/components/component-names';

const ZINDEX: number = 200;

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class ComponentViewer extends ModulWebsite {

    private listOpened: boolean = false;
    private routerVisible: boolean = true;

    protected mounted(): void {
        this.getMeta();
    }

    private back(category): void {
        this.$router.push(this.$store.getters[ComponentsGetters.GET_CATEGORY_ROUTES][category].url);
    }

    private get components(): string[] {
        return this.$store.getters[ComponentsGetters.GET_COMPONENTS_SORTED_BY_CATEGORY];
    }

    private get translatedCategory(): string | undefined {
        let category: string = this.$store.getters[ComponentsGetters.GET_CATEGORY];
        return category ? this.$store.getters[ComponentsGetters.GET_CATEGORIES_TEXT][category] : undefined;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_GET, this.$route.meta.page);
    }

    private get component(): ComponentMeta | null {
        return this.$store.getters[ComponentsGetters.GET_COMPONENT];
    }

    private get selectedComponent(): string | undefined {
        return this.component ? this.component.tag : undefined;
    }

    private set selectedComponent(tag: string | undefined) {
        if (tag) {
            this.$router.push(this.$store.getters[ComponentsGetters.GET_COMPONENT_ROUTES][tag].url);
            this.$nextTick(() => {
                this.routerVisible = false;
                setTimeout(() => {
                    this.routerVisible = true;
                }, 0);
            });
        }
    }

    private getComponentName(tag: string): string {
        let keyMap: KeyMap = this.$store.getters[ComponentsGetters.GET_COMPONENTS_TEXT];
        return keyMap[tag];
    }

    private get hasSelectedComponent(): boolean {
        return this.selectedComponent != undefined ? Object.keys(this.selectedComponent).length > 0 : false;
    }

    private getPreviousComponent(): void {
        if (this.selectedComponent) {
            let index: number = this.components.indexOf(this.selectedComponent);
            index--;
            if (index < 0) {
                index = this.components.length - 1;
            }
            this.selectedComponent = this.components[index];
        }
    }

    private getNextComponent(): void {
        if (this.selectedComponent) {
            let index: number = this.components.indexOf(this.selectedComponent);
            index++;
            if (index >= this.components.length) {
                index = 0;
            }
            this.selectedComponent = this.components[index];
        }
    }

    private navigateToComponent(component: string): void {
        this.$router.push(this.$store.getters[ComponentsGetters.GET_COMPONENT_ROUTES][component].url);
    }

    private onOpen(): void {
        this.listOpened = true;
    }

    private onClose(): void {
        this.listOpened = false;
    }

    // private set selectedComponent(selected: Component | undefined) {
    //     this.internalSelected = selected;
    // }

    private get zIndex(): number {
        return this.listOpened ? ZINDEX : 0;
    }
}
