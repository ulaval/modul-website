import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './color.html?style=./color.scss';

@WithRender
@Component
export class MColor extends Vue {
    @Prop()
    public hex: string;
    @Prop()
    public name: string;

    private red: number;
    private green: number;
    private blue: number;

    private get rgb(): string {
        let shorthandRegex: any = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        let hex: string = this.hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        this.red = parseInt(result[1], 16);
        this.green = parseInt(result[2], 16);
        this.blue = parseInt(result[3], 16);

        return result ? this.red + ', ' + this.green + ', ' + this.blue : undefined;
    }

    private get cmyk() {
        // let cyan = 1 - this.red;
        // let magenta = 1 - this.green;
        // let yellow = 1 - this.blue;
        // let black = 1;

        // if (this.red || this.green || this.blue) {
        //     black = Math.min(cyan, Math.min(magenta, yellow));
        //     cyan = (cyan - black) / (1 - black);
        //     magenta = (magenta - black) / (1 - black);
        //     yellow = (yellow - black) / (1 - black);
        // } else {
        //     black = 1;
        // }

        // return Math.round(cyan * 255) + ', ' + Math.round(magenta * 255) + ', ' + Math.round(yellow * 255) + ', ' + Math.round(black + 254);
        // var result = new CMYK(0, 0, 0, 0);

        let r = this.red / 255;
        let g = this.green / 255;
        let b = this.blue / 255;

        let k = Math.min(1 - r, 1 - g, 1 - b);
        let c = (1 - r - k) / (1 - k);
        let m = (1 - g - k) / (1 - k);
        let y = (1 - b - k) / (1 - k);

        return Math.round(c * 100) + ', ' + Math.round(m * 100) + ', ' + Math.round(y * 100) + ', ' + Math.round(k * 100);
    }
}

export const COLOR_NAME: string = 'modul-color';
