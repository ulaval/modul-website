import { PluginObject } from 'vue';
import { SpritesService } from '@ulaval/modul-components/dist/utils/svg/sprites';

const SvgPlugin: PluginObject<any> = {
    install(v, options) {
        let svg: SpritesService = (v as any).$svg;
        svg.addSprites(require('../../assets/sprites-website.svg'));
    }
};

export default SvgPlugin;
