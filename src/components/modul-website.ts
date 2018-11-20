import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import { ComponentsState } from '../store/modules/components/components-state';

export class ModulWebsite extends ModulVue {
    protected get state(): ComponentsState {
        return this.$store.state as ComponentsState;
    }
}
