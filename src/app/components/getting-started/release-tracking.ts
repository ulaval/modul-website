import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './release-tracking.html?style=./release-tracking.scss';

@WithRender
@Component
export class ReleaseTracking extends Vue {
}
