import { PluginObject } from 'vue';
import { SpritesService } from '@ulaval/modul-components/dist/utils/svg/sprites';
import DefaultSpritesPlugin from '@ulaval/modul-components/dist/utils/svg/default-sprites';

const SvgPlugin: PluginObject<any> = {
    install(v, options) {
        v.use(DefaultSpritesPlugin);
        let svg: SpritesService = (v as any).$svg;
        svg.addSprites(require('../../assets/sprites-website.svg'));
    }
};

export default SvgPlugin;
