import MetaAll from '@/meta/meta-all';
import { ROUTER_PHILOSOPHY, ROUTER_STANDARDS } from '@/router';
import ExpandableLayoutPlugin from '@ulaval/modul-components/dist/components/expandable-layout/expandable-layout';
import IconButtonPlugin from '@ulaval/modul-components/dist/components/icon-button/icon-button';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import WithRender from './header.html?style=./header.scss';

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
export class MWHeader extends ModulWebsite {

    openSearch: boolean = false;
    openMegaMenu: boolean = false;

    @Prop({ default: false })
    public showLogo: boolean;

    @Emit('search')
    private onSearch(): void {
        this.openSearch = !this.openSearch;
    }

    get toggleSearch(): boolean {
        return this.openSearch;
    }

    public toggleMegaMenu(): boolean {
        return this.openMegaMenu = !this.openMegaMenu;
    }

    get modulVersion(): string {
        return MetaAll.getModulVersion();
    }

    private navigateTo(event: MouseEvent, menuSection: string) {
        switch (menuSection) {
            case ModulMenuSection.Home:
                this.$router.push('/');
                // this.closeMenu();
                break;
            case ModulMenuSection.Philosophy:
                this.$router.push(this.$routerIndex.for(ROUTER_PHILOSOPHY));
                // this.closeMenu();
                break;
            case ModulMenuSection.Standards:
                this.$router.push(this.$routerIndex.for(ROUTER_STANDARDS));
                // this.closeMenu();
                break;
            // default:
            //     if (this.menuOpen && this.menuSection == menuSection) {
            //         // this.closeMenu();
            //     } else {
            //         // this.openMenu();
            //     }
        }
    }
}

export const MWHEADER_NAME: string = 'mw-header';

const MWHeaderPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(IconButtonPlugin);
        v.use(ExpandableLayoutPlugin);
        v.component(MWHEADER_NAME, MWHeader);
    }
};

export default MWHeaderPlugin;
