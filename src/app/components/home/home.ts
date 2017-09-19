import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';
import ElementQueries from 'css-element-queries/src/ElementQueries';

@WithRender
@Component
export class HomePage extends ModulVue {

    private experimentTitlePosition: number = 1;
    private experimentContentPosition: number = 1;
    private designTemplateMinWidth: number = 270;
    private designTemplateWidth: number = this.designTemplateMinWidth;
    private scrollDesignStart: boolean = false;
    private widthStep: number = 1;
    private designButtonPosition: number = 1;

    protected mounted(): void {
        this.setParallaxEffect();
        this.$modul.event.$on('scroll', this.onScroll);
        ElementQueries.init();
    }

    protected beforeDestroy(): void {
        this.$modul.event.$off('scroll', this.onScroll);
        ElementQueries.detach(this.$el);
    }

    private onScroll(): void {
        this.setParallaxEffect();
    }

    private setParallaxEffect() {
        let windowHeight: number = window.innerHeight;
        let scrollY: number = this.$modul.scrollPosition == 0 ? this.$modul.stopScrollPosition : this.$modul.scrollPosition;
        let designTop: number = (this.$refs.design as HTMLElement).getBoundingClientRect().top - 60;
        let designTemplateMaxWidth: number = (this.$refs.designBody as HTMLElement).clientWidth;
        let designTemplateWidthRemaining: number = designTemplateMaxWidth - this.designTemplateMinWidth;
        this.experimentContentPosition = scrollY / 18;
        this.experimentTitlePosition = - (scrollY / 18);
        this.designButtonPosition = (designTop - 230) <= windowHeight ? ((designTop - 230) - windowHeight) / 2 : 1;
        if (designTop >= 0) {
            this.designTemplateWidth = designTop <= designTemplateWidthRemaining ? designTemplateMaxWidth - designTop : this.designTemplateMinWidth;
        } else {
            this.designTemplateWidth = designTemplateMaxWidth;
        }
    }
}
