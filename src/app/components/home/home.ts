import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';

@WithRender
@Component
export class HomePage extends ModulVue {
    private menuOpen: boolean = false;
    protected mounted(): void {
        if (this.$parent.$options['_componentTag'] == 'modul') {
            this.$parent.$on('openMenu', () => this.menuOpen = true);
            this.$parent.$on('closeMenu', () => this.menuOpen = false);
        }
    }

    private get unifiedExperienceStyle(): object | undefined {
        let style: object = {
            position: 'absolute',
            top: this.$mWindow.scrollPosition + 'px'
        }
        return this.menuOpen ? style : undefined;
    }
}
