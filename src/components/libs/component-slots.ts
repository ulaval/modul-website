import { MetaSlot } from '@ulaval/modul-components/dist/meta/v2';
import Component from 'vue-class-component';
import { ComponentMetaEx } from '../../meta/meta-all';
import { GET_COMPONENT } from '../../store/modules/components/getters';
import { ModulWebsite } from '../modul-website';
import WithRender from './component-slots.html?style=./component-slots.scss';

@WithRender
@Component
export class ComponentSlots extends ModulWebsite {

    private get component(): ComponentMetaEx | null {
        return this.$store.getters[GET_COMPONENT];
    }

    private get hasSlots(): boolean {
        return this.component.metaV2.slots && this.component.metaV2.slots.length != 0;
    }

    private get slots(): MetaSlot[] {
        return this.component.metaV2.slots;
    }

    private getSlotDescriptionKey(slot: MetaSlot): string {
        return `${this.component.metaKey}slot_${slot.name}`;
    }

}
