import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './do-dont.html?style=./do-dont.scss';

export enum ModulDoDontMode {
    Do = 'do',
    Dont = 'dont'
}

@WithRender
@Component
export class ModulDoDont extends Vue {
    @Prop({ default: ModulDoDontMode.Do })
    public mode: ModulDoDontMode;
}

export const DO_DONT_NAME: string = 'modul-do-dont';
