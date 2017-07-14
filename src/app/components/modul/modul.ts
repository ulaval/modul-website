import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './modul.html?style=./modul.scss';
import { ROUTES, COMPONENTS, ECOSYSTEM, VISUAL_STANDARDS, WRITING_RULES } from '@/app/router';

@WithRender
@Component
export default class Modul extends Vue {
    public get visualStandards(): string {
        return '/' + ROUTES[VISUAL_STANDARDS];
    }

    public get writingRules(): string {
        return '/' + ROUTES[WRITING_RULES];
    }

    public get components(): string {
        return '/' + ROUTES[COMPONENTS];
    }

    public get ecosystem(): string {
        return '/' + ROUTES[ECOSYSTEM];
    }
}
