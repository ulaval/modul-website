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

    private textColor: string = '#000';

    private get rgb(): string {
        let shorthandRegex: any = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        let hex: string = this.hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        this.red = parseInt(result[1], 16);
        this.green = parseInt(result[2], 16);
        this.blue = parseInt(result[3], 16);

        let yiq = ((this.red * 299) + (this.green * 587) + (this.blue * 114)) / 1000;
        this.textColor = (yiq >= 128) ? '#000' : '#fff';

        return result ? this.red + ', ' + this.green + ', ' + this.blue : undefined;
    }

    private get cmyk(): string {
        let r: number = this.red / 255;
        let g: number = this.green / 255;
        let b: number = this.blue / 255;

        let k: number = Math.min(1 - r, 1 - g, 1 - b);
        let c: number = (1 - r - k) / (1 - k);
        let m: number = (1 - g - k) / (1 - k);
        let y: number = (1 - b - k) / (1 - k);

        return Math.round(c * 100) + ', ' + Math.round(m * 100) + ', ' + Math.round(y * 100) + ', ' + Math.round(k * 100);
    }
}

export const COLOR_NAME: string = 'modul-color';
