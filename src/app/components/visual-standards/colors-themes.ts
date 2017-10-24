import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './colors-themes.html?style=./colors-themes.scss';

@WithRender
@Component
export class ColorsThemes extends Vue {
}
