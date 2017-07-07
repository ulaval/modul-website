import Vue from 'vue';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './components.html?style=./components.scss';
import * as ModulActions from '@/app/store/actions';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';

const ZINDEX: Number = 200;

@WithRender
@Component
export class Components extends ModulVue {

    private currentComponent: Object = this.$store.state.componentRoutes[0];
    private zIndex: Number = 0;
    private isScrolling: Boolean = false;
    private hasScrolled: Boolean = false;
    private isListOpened: Boolean = false;
    private scrollPosition: Number = 0;
    private bodyElement: HTMLElement = document.body;

    private storeReady: boolean = this.$store.state.componentRoutes != undefined ? true : false;

    private getComponentsName(element: any): String {
        let name: string = 'default'; // todo, remove when data will all be completed
        if (element.element.name != '') {
            name = this.$i18n.translate(element.element.name);
        }
        return name;
    }

    private get isPageComponent(): Boolean {
        let isPageComponent: boolean;

        if (this.$route.path == '/composants') {
            isPageComponent = true;
        } else {
            isPageComponent = false;
        }

        return isPageComponent;
    }

    private getPreviusComponent(): void {

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

    private getNextComponent(): void {

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

    private toComponent(route): void {
        if (route.url != '') {
            this.currentComponent = route;
            this.$router.push(route.url);
            this.bodyElement.scrollTop = 0;
        }
    }

    private toSelectedComponent(event): void {
        this.currentComponent = event;
        this.$router.push(event.url);
    }

    private setIsListOpened(isListOpened): void {
        this.isListOpened = isListOpened;
        // reset the scroll
        this.hasScrolled = false;
    }

    private get setZindex(): Number {

        if (this.isListOpened && !this.hasScrolled) {
            this.zIndex = ZINDEX;
        } else {
            this.zIndex = 0;
        }

        return this.zIndex;
    }

    // private animDropDownOnScroll(scrollPosition): void {
    //     let position = this.$refs.dropdown['scrollHeight'];
    //     this.$refs.dropdown['style'].transform = 'translate3d(0,' + (position + scrollPosition) + ', 0)';
    // }

    // https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    private onScroll(): void {

        let isScrolling;

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        this.isScrolling = true;
        this.hasScrolled = true;
        this.isListOpened = false;

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {

            // Run the callback
            this.isScrolling = false;
            this.scrollPosition = this.bodyElement.scrollTop;
            // console.log('Scrolling has stopped: ' + this.scrollPosition);

        }, 66);

    }

    private mounted(): void {
        this.$store.dispatch(ModulActions.COMPONENTS_META_GET, FRENCH);
        window.addEventListener('scroll', this.onScroll);
        console.log(this.$store.state.componentRoutes);

    }

    private destroyed() {
        window.removeEventListener('mousedown', this.onScroll);
    }
}
