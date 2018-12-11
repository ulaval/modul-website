
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './standards-ui-colors.html?style=./standards-ui-colors.scss';

@WithRender
@Component
export class MWStandardsUiColorsPage extends ModulVue {

    markdown: string = null;

    mounted(): void {
        this.setMarkdown();
    }

    updated(): void {
        this.setMarkdown();
    }

    setMarkdown() {
        let url: string = `${__webpack_public_path__}content/standards/visual-standards/visual-standards.colors.fr.md`;
        this.$http.execute({ method: 'get', rawUrl: url }).then((md) => {
            this.markdown = (md as any).data;
        });
    }

}
