import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component.html';
import { Watch } from 'vue-property-decorator';
import * as ModulActions from '@/app/store/actions';
import * as ModulGetters from '@/app/store/getters';
import { ModulWebsite } from '../modul-website';

const ZINDEX: number = 200;

@WithRender
@Component
export class ComponentViewer extends ModulWebsite {

    private listOpened: boolean = false;

    protected mounted(): void {
        this.getMeta();
    }

    private back(category): void {
        this.$router.push(this.state.categoryRoutes[category].url);
    }

    private get components(): string[] {
        return this.$store.getters[ModulGetters.GET_COMPONENTS_SORTED_BY_CATEGORY];
    }

    private get translatedCategory(): string | undefined {
        return this.state.category ? this.state.categoriesText[this.state.category] : undefined;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPONENT_GET, this.$route.meta);
    }

    private get selectedComponent(): string | undefined {
        return this.state.component ? this.state.component.tag : undefined;
    }

    private set selectedComponent(tag: string | undefined) {
        if (tag) {
            this.$router.push(this.state.componentRoutes[tag].url);
        }
    }

    private getComponentName(tag: string): string {
        return this.state.componentsText[tag];
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
        this.$router.push(this.state.componentRoutes[component].url);
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
