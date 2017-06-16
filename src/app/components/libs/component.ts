import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import WithRender from './component.html?style=./component.scss';
import * as ModulActions from '@/app/store/actions';
import { Overview, OverviewType } from 'modul-components/dist/meta/meta';
import { ModulVue } from 'modul-components/dist/utils/vue';

import { ServiceMixin } from 'modul-components/dist/services/component-meta-impl';

@WithRender
@Component({
    mixins: [ServiceMixin]
})
export class ComponentViewer extends ModulVue {
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

    public getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }

    private isOverviewType(item: Overview, type: OverviewType): boolean {
        return item.type == type;
    }

    @Watch('$route')
    private getMeta(): void {
        this.$store.dispatch(ModulActions.COMPOSANT_GET, this.$route.meta);
    }
}
