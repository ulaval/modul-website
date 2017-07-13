import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-overview.html?style=./component-overview.scss';

@WithRender
@Component
export class ComponentOverview extends Vue {
}
