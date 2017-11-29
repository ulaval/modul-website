import { log } from "util";

export default {
    template: `<m-list-item icon-name="chip-error" @click="click($event)">blablabla {{test}} </m-list-item>`,
    data: function() {
        return {
            test: 'patate'
        };
    },
    methods: {
        click: function() {
            this.test = 'poulet'
        }
    }
};
