import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';
import Component from 'vue-class-component';

import { ModulWebsite } from '../modul-website';
import WithRender from './icon-gallery.html?style=./icon-gallery.scss';

export enum MIconGalleryViewMode {
    List = 'list',
    Block = 'block'
}

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MIconGallery extends ModulWebsite {

    private iconSize: string = '24px';
    private focus: boolean = false;
    private searchModel: string = '';
    private intenalViewMode: string = MIconGalleryViewMode.Block;

    private dialogOpen: boolean = false;
    private previewIconSize: number = 32;
    private previewName: string = '';
    private previewTag: string = '';
    private maxWidth: string = 'regular';

    private iconList = [
        {
            'name': 'm-svg__add-circle-filled',
            'nameFr': 'Ajouter'
        },
        {
            'name': 'm-svg__arrow--down',
            'nameFr': 'Flèche'
        },
        {
            'name': 'm-svg__arrow--left',
            'nameFr': 'Calendrier'
        },
        {
            'name': 'm-svg__arrow--right',
            'nameFr': 'Valide'
        },
        {
            'name': 'm-svg__arrow--up',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__arrow-head-filled--down',
            'nameFr': 'Pastille de validation'
        },
        {
            'name': 'm-svg__arrow-head-filled--left',
            'nameFr': 'Pastille de fermeture'
        },
        {
            'name': 'm-svg__arrow-head-filled--right',
            'nameFr': 'Pastille d\'erreur'
        },
        {
            'name': 'm-svg__arrow-head-filled--up',
            'nameFr': 'Pastille d\'information'
        },
        {
            'name': 'm-svg__arrow-thin--down',
            'nameFr': 'Pastille d\'avertisement'
        },
        {
            'name': 'm-svg__arrow-thin--left',
            'nameFr': 'Horlogue'
        },
        {
            'name': 'm-svg__arrow-thin--right',
            'nameFr': 'Fermer'
        },
        {
            'name': 'm-svg__arrow-thin--up',
            'nameFr': 'Chevrons de balisage'
        },
        {
            'name': 'm-svg__attachment',
            'nameFr': 'Flèche vers le bas'
        },
        {
            'name': 'm-svg__calendar',
            'nameFr': 'Erreur'
        },
        {
            'name': 'm-svg__chevron--down',
            'nameFr': 'Chevron vers le bas'
        },
        {
            'name': 'm-svg__chevron--left',
            'nameFr': 'Héraldique'
        },
        {
            'name': 'm-svg__chevron--right',
            'nameFr': 'Information'
        },
        {
            'name': 'm-svg__chevron--up',
            'nameFr': 'Flèche vers la gauche'
        },
        {
            'name': 'm-svg__chevron-circle--down',
            'nameFr': 'Chevron vers la gauche'
        },
        {
            'name': 'm-svg__chevron-circle--left',
            'nameFr': 'Menu d\'options'
        },
        {
            'name': 'm-svg__chevron-circle--right',
            'nameFr': 'Recherche'
        },
        {
            'name': 'm-svg__chevron-circle--up',
            'nameFr': 'Flèche vers le haut'
        },
        {
            'name': 'm-svg__clock',
            'nameFr': 'Chevron vers le haut'
        },
        {
            'name': 'm-svg__close-clear',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__code-tag',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__completed-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__confirmation',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__delete',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__dragndrop',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__edit',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__email',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__error-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__error',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__evaluation',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-access',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-default',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-dwg',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-excel',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-flash',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-image',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-mediaplayer',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-music',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-base',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-calc',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-default',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-draw',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-impress',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-math',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-openoffice-writter',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-pdf',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-powerpoint',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-quicktime',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-realplayer',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-text',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-video',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-visio',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-word',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__file-zip',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__full-screen',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__good-answer',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__good-answer2',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__grouping',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__heraldry',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__hide',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__image-slideshow',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__image-square',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__image1-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__image2-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__information-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__information',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__leave-full-screen',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__logout',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__notification',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__options',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__panel',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__profile',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__search',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__show',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__subtitle',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__text1',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__text2',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__tip',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__video-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__video-slideshow',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__video',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__warning-filled',
            'nameFr': 'Chevron'
        },
        {
            'name': 'm-svg__warning',
            'nameFr': 'Chevron'
        }
    ];

    private toggleViewMode(): void {
        this.viewMode = this.viewMode == MIconGalleryViewMode.List ? MIconGalleryViewMode.Block : this.viewMode == MIconGalleryViewMode.Block ? MIconGalleryViewMode.List : MIconGalleryViewMode.Block;
    }

    private get viewMode(): string {
        return this.as<MediaQueriesMixin>().isMqMaxS ? MIconGalleryViewMode.List : this.intenalViewMode;
    }

    private set viewMode(value: string) {
        this.intenalViewMode = value;
    }

    private get iconViewMode(): string {
        return this.viewMode == MIconGalleryViewMode.Block ? 'm-radio' : 'm-panel';
    }

    private get isViewModeBlock(): boolean {
        return this.as<MediaQueriesMixin>().isMqMinS && (this.viewMode == MIconGalleryViewMode.Block);
    }

    private get searchIconsText(): string {
        return this.$i18n.translate('modul:search-icons');
    }

    private get sizePixel(): string {
        return this.iconSize + 'px';
    }

    private onFocus(): void {
        this.focus = true;
        this.maxWidth = '100%';
    }

    private onBlur(): void {
        this.focus = false;
        this.maxWidth = 'regular';
    }

    private setLargeIconSize(): void {
        this.previewIconSize = 64;
    }

    private setSmallIconSize(): void {
        this.previewIconSize = 16;
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

    private get hasSearchResult(): boolean {
        return this.searchResult.length > 0;
    }

    private openDialog(name, nameFr) {
        this.dialogOpen = true;
        this.previewName = nameFr;
        this.previewTag = name;
    }

}

export const ICON_GALLERY_NAME: string = 'modul-icon-gallery';
