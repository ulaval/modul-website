import Vue from 'vue';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import { ModulState } from '@/app/store/modul-state';

export class ModulWebsite extends ModulVue {
    protected get state(): ModulState {
        return this.$store.state as ModulState;
    }
}
