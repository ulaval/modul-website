import { ROUTER_PHILOSOPHY, ROUTER_STANDARDS } from '@/router';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
import { ModulWebsite } from '../modul-website';
import WithRender from './menu.html?style=./menu.scss';

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
export class MWMenu extends ModulWebsite {

    @Emit('open')
    public emitOpen(): void { }

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

export const MWMENU_NAME: string = 'mw-menu';

const MWMenuPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(MWMENU_NAME, MWMenu);
    }
};

export default MWMenuPlugin;
