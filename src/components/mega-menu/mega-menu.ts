import MetaAll from '@/meta/meta-all';
import { ROUTER_PHILOSOPHY, ROUTER_STANDARDS_ACCESSIBILITY, ROUTER_STANDARDS_DEVELOPMENT, ROUTER_STANDARDS_EDITORIAL, ROUTER_STANDARDS_UI } from '@/router';
import IconButtonPlugin from '@ulaval/modul-components/dist/components/icon-button/icon-button';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import WithRender from './mega-menu.html?style=./mega-menu.scss';

type Category = {
    id: string;
    text: string;
};

type Component = {
    tag: string;
    category: string;
    text: string;
};

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MWMegaMenu extends ModulWebsite {

    private categoriesComponent: Category[] = [];
    private pagesStandards: Category[] = [];
    private menuSection: string = '';
    private menuLevelOne: boolean = true;

    @Prop()
    public list: [];
    @Prop({ default: false })
    public open: boolean;

    protected beforeMount(): void {
        MetaAll.getCategories().forEach(category => {
            this.categoriesComponent.push({
                id: category,
                text: this.$i18n.translate(category)
            });
        });

        this.pagesStandards.push(
            {
                id: ROUTER_STANDARDS_UI,
                text: this.$i18n.translate(`website:standards-ui`)
            },
            {
                id: ROUTER_STANDARDS_EDITORIAL,
                text: this.$i18n.translate(`website:standards-editorial`)
            }
            ,
            {
                id: ROUTER_STANDARDS_DEVELOPMENT,
                text: this.$i18n.translate(`website:standards-development`)
            }
            ,
            {
                id: ROUTER_STANDARDS_ACCESSIBILITY,
                text: this.$i18n.translate(`website:accessibility-standards`)
            }
        );

    }

    getRouterIndex(tag: string): string {
        return this.$routerIndex.for(tag);
    }

    get isOpen(): boolean {
        return this.open;
    }

    get routerPhilosophy(): string {
        return this.$routerIndex.for(ROUTER_PHILOSOPHY);
    }

    set isOpen(value: boolean) {
        this.$emit('update:open', value);
    }

    showMenuLevelTwo(menuSection: string): void {
        this.menuSection = menuSection;
        this.menuLevelOne = false;
    }

    showMenuLevelOne(): void {
        this.menuLevelOne = true;
    }

    calise() {
        console.log('calise');

    }

    @Watch('$route')
    close(value: boolean) {
        this.isOpen = false;
        this.menuLevelOne = true;
    }
}

export const MWMEGAMENU_NAME: string = 'mw-mega-menu';

const MWMegaMenuPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(IconButtonPlugin);
        v.component(MWMEGAMENU_NAME, MWMegaMenu);
    }
};

export default MWMegaMenuPlugin;
