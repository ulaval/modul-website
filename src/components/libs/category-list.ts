import Component from 'vue-class-component';
import Meta, { ComponentMetaEx, ModulComponentStatus } from '../../meta/meta-all';
import { GET_CATEGORY } from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './category-list.html?style=./category-list.scss';

@WithRender
@Component
export class CategoryList extends ModulWebsite {
    private get categoryComponents(): ComponentMetaEx[] {
        let result: ComponentMetaEx[] = [];
        if (this.category) {
            result = Meta.getMetaByCategory(this.category);
        }
        return result;
    }

    private get category(): string | null {
        return this.$store.getters[GET_CATEGORY];
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.$routerIndex.for(tag));
    }

    private isProduction(status): boolean {
        return status === ModulComponentStatus.Production;
    }
}
