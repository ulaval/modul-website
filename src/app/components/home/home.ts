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

    protected mounted(): void {
        this.setParallaxEffect();
        ElementQueries.init();
        this.$mWindow.event.$on('scroll', this.onScroll);
    }

    protected destroyed(): void {
        ElementQueries.detach();
        this.$mWindow.event.$off('scroll', this.onScroll);
    }

    private onScroll(): void {
        this.setParallaxEffect();
    }

    private setParallaxEffect() {
        let scrollY: number = this.$mWindow.scrollPosition == 0 ? this.$mWindow.stopScrollPosition : this.$mWindow.scrollPosition;
        let designTop: number = (this.$refs.design as HTMLElement).getBoundingClientRect().top - 60;
        let designTemplateMaxWidth: number = (this.$refs.designBody as HTMLElement).clientWidth;
        let designTemplateWidthRemaining: number = designTemplateMaxWidth - this.designTemplateMinWidth;
        this.experimentContentPosition = scrollY / 20;
        this.experimentTitlePosition = - (scrollY / 12);
        if (designTop >= 0) {
            this.designTemplateWidth = designTop <= designTemplateWidthRemaining ? designTemplateMaxWidth - designTop : this.designTemplateMinWidth;
        } else {
            this.designTemplateWidth = designTemplateMaxWidth;
        }
    }
}
