import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import ElementQueries from 'css-element-queries/src/ElementQueries';
import * as Routes from '../../router';

console.warn('TODO: url service');

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

        console.log('$router', this.$router);
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
        return this.$i18n.translate('pages:standards-route') + '/' + this.$i18n.translate('pages:visual-standards-route');
    }

    private get writingStandards(): string {
        return this.$i18n.translate('pages:standards-route') + '/' + this.$i18n.translate('pages:writing-standards-route');
    }

    private get components(): string {
        return this.$i18n.translate('router:components');
    }

    // TODO: should call a url service instead of hardcoding paths
    private get ecosystem(): string {
        return this.$i18n.translate('router.ecosystem');
    }

    private get codingStandards(): string {
        return this.$i18n.translate('pages:standards-route') + '/' + this.$i18n.translate('pages:coding-standards-route');
    }

    private get gettingStarted(): string {
        return this.$i18n.translate('pages:getting-started-route') + '/' + this.$i18n.translate('pages:getting-started-route');
    }

    private get unifiedExperience(): string {
        return this.$i18n.translate('pages:standards-route') + '/' + this.$i18n.translate('pages:unified-experience-route');
    }

    private get responsiveDesign(): string {
        return this.$i18n.translate('pages:standards-route') + '/' + this.$i18n.translate('pages:responsive-design-route');
    }
}
