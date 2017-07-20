import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './category-list.html?style=./category-list.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';

@WithRender
@Component
export class CategoryList extends ModulWebsite {
    private get categoryComponents(): ComponentMeta[] {
        let result: ComponentMeta[] = [];
        if (this.state.category) {
            result = Meta.getMetaByCategory(this.state.category);
        }
        return result;
    }

    private onComponentClick(tag: string): void {
        this.$router.push(this.state.componentRoutes[tag].url);
    }
}
