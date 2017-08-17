import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';

@WithRender
@Component
export class HomePage extends ModulVue {
}
