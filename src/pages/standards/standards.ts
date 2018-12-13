
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './standards.html?style=./standards.scss';

@WithRender
@Component
export class MWStandardsPage extends ModulVue {
}
