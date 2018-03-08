import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import ElementQueries from 'css-element-queries/src/ElementQueries';
import { ROUTER_COMPONENTS, ROUTER_ECOSYSTEM } from '../../router';
import { VISUAL_STANDARDS, WRITING_STANDARDS, CODING_STANDARDS, GETTING_STARTED, UNIFIED_EXPERIENCE, RESPONSIVE_DESIGN } from '@/app/components/pages/page';
import { CATEGORY_CONTENT } from '../../meta/meta-all';

@WithRender
@Component({
    mixins: [MediaQueries]
})
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
        if (this.as<MediaQueriesMixin>().isMqMinS) {
            let windowHeight: number = window.innerHeight;
            let scrollY: number = this.$modul.scrollPosition == 0 ? this.$modul.stopScrollPosition : this.$modul.scrollPosition;
            let designTop: number = (this.$refs.design as HTMLElement).getBoundingClientRect().top - 70;
            let designTemplateMaxWidth: number = (this.$refs.designBody as HTMLElement).clientWidth;
            let designTemplateWidthRemaining: number = designTemplateMaxWidth - this.designTemplateMinWidth;
            this.experimentContentPosition = scrollY / 18;
            this.experimentTitlePosition = - (scrollY / 18);
            this.designButtonPosition = (designTop - 60) <= windowHeight ? ((designTop - 60) - windowHeight) / 2 : 1;
            if (designTop >= 0) {
                this.designTemplateWidth = designTop <= designTemplateWidthRemaining ? designTemplateMaxWidth - designTop : this.designTemplateMinWidth;
            } else {
                this.designTemplateWidth = designTemplateMaxWidth;
            }
        }
    }

    private onRoute(route: string): void {
        this.$router.push(route);
    }

    private get visualStandards(): string {
        return this.$routerIndex.for(VISUAL_STANDARDS);
    }

    private get writingStandards(): string {
        return this.$routerIndex.for(WRITING_STANDARDS);
    }

    private get components(): string {
        return this.$routerIndex.for(CATEGORY_CONTENT);
    }

    private get ecosystem(): string {
        return this.$routerIndex.for(ROUTER_ECOSYSTEM);
    }

    private get codingStandards(): string {
        return this.$routerIndex.for(CODING_STANDARDS);
    }

    private get gettingStarted(): string {
        return this.$routerIndex.for(GETTING_STARTED);
    }

    private get unifiedExperience(): string {
        return this.$routerIndex.for(UNIFIED_EXPERIENCE);
    }

    private get responsiveDesign(): string {
        return this.$routerIndex.for(RESPONSIVE_DESIGN);
    }
}
