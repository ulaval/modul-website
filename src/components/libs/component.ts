import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as ComponentsActions from '../../store/modules/components/actions';
import { KeyMap } from '../../store/modules/components/components-state';
import * as ComponentsGetters from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './component.html';

const ZINDEX: number = 200;

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class ComponentViewer extends ModulWebsite {

    private listOpened: boolean = false;
    private routerVisible: boolean = true;

    private selectedComponentTag: string = '';
    private currentComponent: ComponentMeta;
    private components: string[] = [];

    protected mounted(): void {
        this.getMeta();
    }

    private back(category): void {
        this.$router.push(this.$routerIndex.for(category));
    }

    private get translatedCategory(): string | undefined {
        let category: string = this.$store.getters[ComponentsGetters.GET_CATEGORY];
        return category ? this.$store.getters[ComponentsGetters.GET_CATEGORIES_TEXT][category] : undefined;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ComponentsActions.COMPONENT_GET, this.$route.meta.page);
        this.currentComponent = this.$store.getters[ComponentsGetters.GET_COMPONENT];
        this.selectedComponentTag = this.currentComponent.tag;
        this.components = this.$store.getters[ComponentsGetters.GET_COMPONENTS_SORTED_BY_CATEGORY];
    }

    private getCurrentComponent(): ComponentMeta {
        return this.currentComponent;
    }

    // private get selectedComponent(): string | undefined {
    //     return this.selectedComponentTag;
    // }

    private getComponentName(tag: string): string {
        let keyMap: KeyMap = this.$store.getters[ComponentsGetters.GET_COMPONENTS_TEXT];

        return keyMap[tag];
    }

    private get hasSelectedComponent(): boolean {
        return this.selectedComponentTag != undefined ? Object.keys(this.selectedComponentTag).length > 0 : false;
    }

    private getPreviousComponent(): void {
        if (this.selectedComponentTag) {
            let index: number = this.components.indexOf(this.selectedComponentTag);
            index--;
            if (index < 0) {
                index = this.components.length - 1;
            }
            this.onChange(this.components[index]);
        }
    }

    private getNextComponent(): void {
        if (this.selectedComponentTag) {
            let index: number = this.components.indexOf(this.selectedComponentTag);
            index++;
            if (index >= this.components.length) {
                index = 0;
            }
            this.onChange(this.components[index]);

        }
    }

    private onChange(tag: string) {
        if (tag) {
            this.$router.push(this.$routerIndex.for(tag));
            this.$nextTick(() => {
                this.routerVisible = false;
                setTimeout(() => {
                    this.routerVisible = true;
                }, 0);
            });
            this.selectedComponentTag = tag;
        }
    }

    private onOpen(): void {
        this.listOpened = true;
    }

    private onClose(): void {
        this.listOpened = false;
    }

    private get zIndex(): number {
        return this.listOpened ? ZINDEX : 0;
    }
}
