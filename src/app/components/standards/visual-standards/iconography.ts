import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './iconography.html?style=./iconography.scss';

@WithRender
@Component
export class Iconography extends Vue {
}
