import Vue, { PluginObject } from 'vue';
import { COLOR_NAME, MColor } from './color/color';
import { DARK_TEMPLATE_NAME, MDarkTemplate } from './dark-template/dark-template';
import { DEMO_NAME, MDemo } from './demo/demo';
import { DO_NAME, MDo } from './do/do';
import { DONT_NAME, MDont } from './dont/dont';
import { GO_NAME, MGo } from './go/go';
import { HIGHLIGHT_NAME, MHighlight } from './highlight/highlight';
import { ICON_GALLERY_NAME, MIconGallery } from './icon-gallery/icon-gallery';
import { LIGHT_TEMPLATE_NAME, MLightTemplate } from './light-template/light-template';
import { MARKDOWN_NAME, MMarkdown } from './markdown/markdown';
import { MPreview, PREVIEW_NAME } from './preview/preview';

const WebsiteComponentsPlugin: PluginObject<any> = {
    install(v): void {
        Vue.component(COLOR_NAME, MColor);
        Vue.component(DEMO_NAME, MDemo);
        Vue.component(DO_NAME, MDo);
        Vue.component(DONT_NAME, MDont);
        Vue.component(GO_NAME, MGo);
        Vue.component(MARKDOWN_NAME, MMarkdown);
        Vue.component(PREVIEW_NAME, MPreview);
        Vue.component(DARK_TEMPLATE_NAME, MDarkTemplate);
        Vue.component(LIGHT_TEMPLATE_NAME, MLightTemplate);
        Vue.component(HIGHLIGHT_NAME, MHighlight);
        Vue.component(ICON_GALLERY_NAME, MIconGallery);
    }
};

export default WebsiteComponentsPlugin;
