
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './standards-editorial.html?style=./standards-editorial.scss';

@WithRender
@Component
export class MWStandardsEditorialPage extends ModulVue {
}
