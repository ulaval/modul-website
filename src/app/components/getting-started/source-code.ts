import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './source-code.html?style=./source-code.scss';

@WithRender
@Component
export class SourceCode extends Vue {
}
