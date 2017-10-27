export default {
    template: `<div id="js">
        <m-radio-group ref="g" :position="position">
            <m-radio ref="a" position="left" value="radio1">Item 1</m-radio>
            <m-radio ref="b" position="right" value="radio2">Item 2</m-radio>
        </m-radio-group>
    </div>`,
    data: function() {
        return {
            position: 'right'
        };
    },
    methods: {
        changePosition: function() {
            this.position = 'right';
        }
    }
};
