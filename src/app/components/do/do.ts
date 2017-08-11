import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './do.html';

@WithRender
@Component
export class MDo extends Vue {
}

export const DO_NAME: string = 'm-do';
