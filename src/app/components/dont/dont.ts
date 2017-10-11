import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './dont.html?style=../do/do.scss';

@WithRender
@Component
export class MDont extends Vue {
}

export const DONT_NAME: string = 'modul-dont';
