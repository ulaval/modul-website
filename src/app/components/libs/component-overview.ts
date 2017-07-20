import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './component-overview.html?style=./component-overview.scss';
import { ModulWebsite } from '../modul-website';
import Meta, { ComponentMeta, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';


@WithRender
@Component
export class ComponentOverview extends ModulWebsite {

    private isOverviewType(item: Overview, type: OverviewType): boolean {
        return item.type == type;
    }

    private isRubric(item: Overview): boolean {
        return this.isOverviewType(item, 'rubric');
    }

    private isDo(item: Overview): boolean {
        return this.isOverviewType(item, 'do');
    }

    private isDont(item: Overview): boolean {
        return this.isOverviewType(item, 'dont');
    }

    private getItemContent(item: Overview): string {
        return this.$i18n.translate(item.content);
    }
}
