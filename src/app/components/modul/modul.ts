import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import * as Messages from 'modul-components/dist/i18n';

@WithRender
@Component
export default class Modul extends Vue {
}
