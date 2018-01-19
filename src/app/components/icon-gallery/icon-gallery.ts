import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './icon-gallery.html?style=./icon-gallery.scss';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MIconGallery extends ModulWebsite {

    private size = '20px';

    private focus: boolean = false;

    private searchModel: string = '';

    private iconList = [
        {
            'name': 'arrow',
            'nameFr': 'Flèche'
        },
        {
            'name': 'calendar',
            'nameFr': 'Calendrier'
        },
        {
            'name': 'check',
            'nameFr': 'Valide'
        },
        {
            'name': 'chevron',
            'nameFr': 'Chevron'
        },
        {
            'name': 'chip-check',
            'nameFr': 'Pastille valide'
        },
        {
            'name': 'chip-error',
            'nameFr': 'Pastille erreur'
        },
        {
            'name': 'chip-info',
            'nameFr': 'Pastille information'
        },
        {
            'name': 'chip-warning',
            'nameFr': 'Pastille d\'avertisement'
        },
        {
            'name': 'clock',
            'nameFr': 'Horlogue'
        },
        {
            'name': 'code-chevrons',
            'nameFr': 'Chevrons code'
        },
        {
            'name': 'down-arrow',
            'nameFr': 'Flèche evrs le bas'
        },
        {
            'name': 'down-chevron',
            'nameFr': 'Chevron vers le bas'
        },
        {
            'name': 'error',
            'nameFr': 'Erreur'
        },
        {
            'name': 'heraldry',
            'nameFr': 'Héraldique'
        },
        {
            'name': 'information',
            'nameFr': 'Information'
        },
        {
            'name': 'left-arrow',
            'nameFr': 'Flèche vers la gauche'
        },
        {
            'name': 'left-chevron',
            'nameFr': 'Chevron vers la gauche'
        },
        {
            'name': 'options',
            'nameFr': 'menu d\'options'
        },
        {
            'name': 'search',
            'nameFr': 'Recherche'
        },
        {
            'name': 'top-arrow',
            'nameFr': 'Flèche vers le haut'
        },
        {
            'name': 'top-chevron',
            'nameFr': 'Chevron vers le haut'
        }

    ];

    private getName(index: number, lang: string = 'en'): string {
        return lang == 'en' ? this.iconList[index].name : this.iconList[index].nameFr;
    }

    private get searchIconsText(): string {
        return this.$i18n.translate('modul:search-icons');
    }

    private get sizePixel(): string {
        return this.size + 'px';
    }

    private onFocus(): void {
        this.focus = true;
    }

    private onBlur(): void {
        this.focus = false;
    }

    private get searchResult(): any[] {
        let filtereComponents: any[] = this.iconList;
        if (this.searchModel != '') {
            filtereComponents = this.iconList.filter((element) => {
                let textToSearch = element.name + ' ' + element.nameFr;
                return normalizeString(textToSearch).match(normalizeString(this.searchModel));
            });
        }
        return filtereComponents;
    }

}

export const ICON_GALLERY_NAME: string = 'modul-icon-gallery';
