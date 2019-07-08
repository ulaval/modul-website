import MetaAll from '@/meta/meta-all';
import { ROUTER_STANDARDS_ACCESSIBILITY, ROUTER_STANDARDS_DEVELOPMENT, ROUTER_STANDARDS_EDITORIAL, ROUTER_STANDARDS_UI } from '@/router';
import ExpandableLayoutPlugin from '@ulaval/modul-components/dist/components/expandable-layout/expandable-layout';
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

type CategoryIndexMap = {
    [id: string]: number;
};

export enum ModulMenuSection {
    Home = 'home',
    Philosophy = 'philosophy',
    Components = 'components',
    Standards = 'standards'
}

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MWMegaMenu extends ModulWebsite {

    private categoriesComponent: Category[] = [];
    private pagesStandards: Category[] = [];
    private menuSection: string = '';

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

        // For menu
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

    private getRouterIndex(tag: string): string {
        return this.$routerIndex.for(tag);
    }

    get Open(): boolean {
        return this.open;
    }

    set Open(value: boolean) {
        this.$emit('update:open', value);
    }

    @Watch('$route')
    close(value: boolean) {
        this.Open = false;
    }
}

export const MWMEGAMENU_NAME: string = 'mw-mega-menu';

const MWMegaMenuPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(IconButtonPlugin);
        v.use(ExpandableLayoutPlugin);
        v.component(MWMEGAMENU_NAME, MWMegaMenu);
    }
};

export default MWMegaMenuPlugin;
