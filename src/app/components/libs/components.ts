import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import * as ModulActions from '@/app/store/actions';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';

@WithRender
@Component
export class Components extends Vue {
    public mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, FRENCH);
    }
}
