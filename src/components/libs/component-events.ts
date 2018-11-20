import { MetaEvent } from '@ulaval/modul-components/dist/meta/v2';
import Component from 'vue-class-component';
import { ComponentMetaEx } from '../../meta/meta-all';
import { GET_COMPONENT } from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './component-events.html?style=./component-events.scss';

@WithRender
@Component
export class ComponentEvents extends ModulWebsite {

    private get component(): ComponentMetaEx | null {
        return this.$store.getters[GET_COMPONENT];
    }

    private get hasEvents(): boolean {
        return this.component.metaV2.events && this.component.metaV2.events.length != 0;
    }

    private get events(): MetaEvent[] {
        return this.component.metaV2.events;
    }

    private getEventDescriptionKey(event: MetaEvent): string {
        return `${this.component.metaKey}event_${event.name}`;
    }

}
