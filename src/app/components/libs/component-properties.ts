import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-properties.html?style=./component-properties.scss';

@WithRender
@Component
export class ComponentProperties extends Vue {
}
