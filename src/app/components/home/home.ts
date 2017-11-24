import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import ElementQueries from 'css-element-queries/src/ElementQueries';
import * as Routes from '../../router';
import { ROUTES, STANDARDS, UNIFIED_EXPERIENCE, RESPONSIVE_DESIGN } from '@/app/router';

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

    private visualStandards: string = Routes.ROUTES[Routes.STANDARDS] + '/' + Routes.ROUTES[Routes.VISUAL_STANDARDS];
    private writingStandards: string = Routes.ROUTES[Routes.STANDARDS] + '/' + Routes.ROUTES[Routes.WRITING_STANDARDS];
    private components: string = Routes.ROUTES[Routes.COMPONENTS];
    private ecosystem: string = Routes.ROUTES[Routes.ECOSYSTEM];
    private codingStandards: string = Routes.ROUTES[Routes.STANDARDS] + '/' + Routes.ROUTES[Routes.CODING_STANDARDS];
    private gettingStarted: string = Routes.ROUTES[Routes.GETTING_STARTED] + '/' + Routes.ROUTES[Routes.GETTING_STARTED];

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

    private unifiedExperience(event): void {
        this.$router.push('/' + ROUTES[STANDARDS] + '/' + ROUTES[UNIFIED_EXPERIENCE]);
    }

    private get responsiveDesign(): string {
        return '/' + ROUTES[STANDARDS] + '/' + ROUTES[RESPONSIVE_DESIGN];
    }
}
