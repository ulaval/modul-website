import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './typography-styles.html?style=./typography-styles.scss';

@WithRender
@Component
export class TypographyStyles extends Vue {
}
