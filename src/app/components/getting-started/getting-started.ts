import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './getting-started.html?style=./getting-started.scss';

@WithRender
@Component
export class GettingStarted extends Vue {
}
