import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import { ModulActions } from '@/app/store/actions';

@WithRender
@Component
export class Components extends Vue {
    public mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, 'fr');
    }
}
