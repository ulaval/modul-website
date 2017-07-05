import Vue from 'vue';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';

@WithRender
@Component
export class Components extends ModulVue {

    public currentComponent: Object = this.$store.state.componentRoutes[0];
    public isListOpen: boolean;
    public zindex: Number;

    public getComponentsName(element: any): String {
        let name: string = 'default'; // todo, remove when data will all be completed
        if (element.element.name != '') {
            name = this.$i18n.translate(element.element.name);
        }
        return name;
    }

    public getPreviusComponent() {

        let activePath = this.$route.path;
        let i: number = 0;
        let max: number = this.$store.state.componentRoutes.length - 1;
        let index: number = max;
        for (i; i < this.$store.state.componentRoutes.length; i++) {
            if (this.$store.state.componentRoutes[i].url == activePath) {
                if (i != 0) {
                    index = i - 1;
                    break;
                }
            }
        }

        this.currentComponent = this.$store.state.componentRoutes[index];
        this.$router.push(this.$store.state.componentRoutes[index].url);
    }

    public getNextComponent() {

        let activePath = this.$route.path;
        let i: number = 0;
        let index: number = 0;
        let max: number = this.$store.state.componentRoutes.length - 1;
        for (i; i < this.$store.state.componentRoutes.length; i++) {
            if (this.$store.state.componentRoutes[i].url == activePath) {
                if (i != max) {
                    index = i + 1;
                    break;
                }
            }
        }

        this.currentComponent = this.$store.state.componentRoutes[index];
        this.$router.push(this.$store.state.componentRoutes[index].url);
    }

    public toComponent(route) {
        if (route.url != '') {
            this.currentComponent = route;
            this.$router.push(route.url);
        }
    }

    public toSelectedComponent(event) {
        this.currentComponent = event;
        this.$router.push(event.url);
    }

    public setZindex(index) {
        console.log(index);
    }

    public get isPageComponent(): boolean {
        let isPageComponent: boolean;

        if (this.$route.path == '/composants') {
            isPageComponent = true;
        } else {
            isPageComponent = false;
        }

        return isPageComponent;
    }

    public mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, FRENCH);
    }
}
