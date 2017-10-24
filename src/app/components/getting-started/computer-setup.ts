import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './computer-setup.html?style=./computer-setup.scss';

@WithRender
@Component
export class ComputerSetup extends Vue {
}
