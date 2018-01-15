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
        let cyan = 1 - this.red;
        let magenta = 1 - this.green;
        let yellow = 1 - this.blue;
        let black = 1;

        if (this.red || this.green || this.blue) {
            black = Math.min(cyan, Math.min(magenta, yellow));
            cyan = (cyan - black) / (1 - black);
            magenta = (magenta - black) / (1 - black);
            yellow = (yellow - black) / (1 - black);
        } else {
            black = 1;
        }

        return Math.round(cyan * 255) + ', ' + Math.round(magenta * 255) + ', ' + Math.round(yellow * 255) + ', ' + Math.round(black + 254);
    }
}

export const COLOR_NAME: string = 'modul-color';
