import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import WithRender from './component.html?style=./component.scss';
import { ModulActions } from '@/app/store/actions';
import { Overview, OverviewType } from 'modul-components/dist/meta';

import { ServiceMixin } from 'modul-components/dist/services';

@WithRender
@Component({
    mixins: [ServiceMixin]
})
export class ComponentViewer extends Vue {
    public mounted() {
        this.getMeta();
    }

    public isRubric(item: Overview): boolean {
        return this.isOverviewType(item, 'rubric');
    }

    public isDo(item: Overview): boolean {
        return this.isOverviewType(item, 'do');
    }

    public isDont(item: Overview): boolean {
        return this.isOverviewType(item, 'dont');
    }

    private isOverviewType(item: Overview, type: OverviewType): boolean {
        return item.type == type;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPOSANT_GET, this.$route.meta);
        // console.log(this);
        // console.log(this, (this as any).$aa, (this as any).$globalMixin);
        // console.log('c', this.$options);
        // ((this.$options as any).$serviceMixin as ServiceMixin).log('fjeiowfiowfw');
        // ((this as any).$globalFunc).log('fjeiowfiowfw');
    }
}
