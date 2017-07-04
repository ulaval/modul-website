import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import * as ModulActions from '@/app/store/actions';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';

@WithRender
@Component
export class Components extends Vue {

    public get getComponentsName(): String[] {

        let i;
        let componentsName: String[] = [];

        for (i = 0; i < this.$store.state.componentRoutes.length; i++) {
            if (this.$store.state.componentRoutes[i].name != '') {
                componentsName.push(this.$store.state.componentRoutes[i].name);
            }
        }

        return componentsName;
    }

    public getPreviusComponent() {

        let activePath = this.$route.path;
        let i: number = 0;
        let index: number = 0;
        let max: number = this.$store.state.componentRoutes.length - 1;
        for (i; i < this.$store.state.componentRoutes.length; i++) {
            if (this.$store.state.componentRoutes[i].url == activePath) {
                if (i != 0) {
                    index = i - 1;
                    break;
                }
            }
        }

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

        this.$router.push(this.$store.state.componentRoutes[index].url);

    }

    public get isPageComponent(): boolean {
        let isPageComponent: boolean;

        if (this.$route.path == '/composants') {
            isPageComponent = true;
        } else {
            isPageComponent = false;
        }
        console.log('isPageComponent:');
        return isPageComponent;
    }

    public mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, FRENCH);
    }
}
