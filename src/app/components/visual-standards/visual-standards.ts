import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './visual-standards.html?style=./visual-standards.scss';
import * as Messages from 'modul-components/dist/i18n';

@WithRender
@Component
export class VisualStandards extends Vue {
}
