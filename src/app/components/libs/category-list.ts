import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './category-list.html?style=./category-list.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMetaEx } from '../../meta/meta-all';
import * as ComponentsGetters from '@/app/store/modules/components/getters';
// import { RouteMap } from '@/app/store/modules/components/components-state';

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
        return this.$store.getters[ComponentsGetters.GET_CATEGORY];
    }

    // private get componentRoutes(): RouteMap {
    //     return this.$store.getters[ComponentsGetters.GET_COMPONENT_ROUTES];
    // }

    private onComponentClick(tag: string): void {
        this.$router.push(this.$routerIndex.for(tag));
    }
}
