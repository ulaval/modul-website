import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import { routes, COMPONENTS, ECOSYSTEM, VISUAL_STANDARDS, WRITING_RULES } from '@/app/router';

@WithRender
@Component
export default class Modul extends Vue {
    public get visualStandards(): string {
        return '/' + routes[VISUAL_STANDARDS];
    }

    public get writingRules(): string {
        return '/' + routes[WRITING_RULES];
    }

    public get components(): string {
        return '/' + routes[COMPONENTS];
    }

    public get ecosystem(): string {
        return '/' + routes[ECOSYSTEM];
    }
}
