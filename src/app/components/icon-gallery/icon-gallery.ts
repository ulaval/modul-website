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
            'nameFr': 'Flèche bas'
        },
        {
            'name': 'm-svg__arrow--left',
            'nameFr': 'Flèche gauche'
        },
        {
            'name': 'm-svg__arrow--right',
            'nameFr': 'Flèche droite'
        },
        {
            'name': 'm-svg__arrow--up',
            'nameFr': 'Flèche haut'
        },
        {
            'name': 'm-svg__arrow-head-filled--down',
            'nameFr': 'Flèche triangle bas'
        },
        {
            'name': 'm-svg__arrow-head-filled--left',
            'nameFr': 'Flèche triangle gauche'
        },
        {
            'name': 'm-svg__arrow-head-filled--right',
            'nameFr': 'Flèche triangle droite'
        },
        {
            'name': 'm-svg__arrow-head-filled--up',
            'nameFr': 'Flèche triangle haut'
        },
        {
            'name': 'm-svg__arrow-thin--down',
            'nameFr': 'Flèche mince bas'
        },
        {
            'name': 'm-svg__arrow-thin--left',
            'nameFr': 'Flèche mince gauche'
        },
        {
            'name': 'm-svg__arrow-thin--right',
            'nameFr': 'Flèche mince droite'
        },
        {
            'name': 'm-svg__arrow-thin--up',
            'nameFr': 'Flèche mince haut'
        },
        {
            'name': 'm-svg__attachment',
            'nameFr': 'Pièce jointe'
        },
        {
            'name': 'm-svg__calendar',
            'nameFr': 'Calendrier'
        },
        {
            'name': 'm-svg__chevron--down',
            'nameFr': 'Chevron bas'
        },
        {
            'name': 'm-svg__chevron--left',
            'nameFr': 'Chevron gauche'
        },
        {
            'name': 'm-svg__chevron--right',
            'nameFr': 'Chevron droit'
        },
        {
            'name': 'm-svg__chevron--up',
            'nameFr': 'Chevron haut'
        },
        {
            'name': 'm-svg__chevron-circle--down',
            'nameFr': 'Chevron cercle bas'
        },
        {
            'name': 'm-svg__chevron-circle--left',
            'nameFr': 'Chevron cercle gauche'
        },
        {
            'name': 'm-svg__chevron-circle--right',
            'nameFr': 'Chevron cercle droit'
        },
        {
            'name': 'm-svg__chevron-circle--up',
            'nameFr': 'Chevron cercle haut'
        },
        {
            'name': 'm-svg__clock',
            'nameFr': 'Horloge'
        },
        {
            'name': 'm-svg__close-clear',
            'nameFr': 'Fermer / Vider'
        },
        {
            'name': 'm-svg__code-tag',
            'nameFr': 'Balise de code '
        },
        {
            'name': 'm-svg__completed-filled',
            'nameFr': 'Pastille complété'
        },
        {
            'name': 'm-svg__confirmation',
            'nameFr': 'Confirmation'
        },
        {
            'name': 'm-svg__delete',
            'nameFr': 'Supprimer'
        },
        {
            'name': 'm-svg__dragndrop',
            'nameFr': 'Glisser déposer'
        },
        {
            'name': 'm-svg__edit',
            'nameFr': 'Modifier'
        },
        {
            'name': 'm-svg__email',
            'nameFr': 'Courriel'
        },
        {
            'name': 'm-svg__error-filled',
            'nameFr': 'Pastille erreur'
        },
        {
            'name': 'm-svg__error',
            'nameFr': 'Erreur'
        },
        {
            'name': 'm-svg__evaluation',
            'nameFr': 'Évaluation'
        },
        {
            'name': 'm-svg__file-access',
            'nameFr': 'Fichier Acces'
        },
        {
            'name': 'm-svg__file-default',
            'nameFr': 'Fichier'
        },
        {
            'name': 'm-svg__file-dwg',
            'nameFr': 'Fichier DWG'
        },
        {
            'name': 'm-svg__file-excel',
            'nameFr': 'Fichier Excel'
        },
        {
            'name': 'm-svg__file-flash',
            'nameFr': 'Fichier Flash'
        },
        {
            'name': 'm-svg__file-image',
            'nameFr': 'Fichier image'
        },
        {
            'name': 'm-svg__file-mediaplayer',
            'nameFr': 'Fichier Mediaplayer'
        },
        {
            'name': 'm-svg__file-audio',
            'nameFr': 'Fichier audio'
        },
        {
            'name': 'm-svg__file-openoffice-base',
            'nameFr': 'Fichier OpenOffice base'
        },
        {
            'name': 'm-svg__file-openoffice-calc',
            'nameFr': 'Fichier OpenOffice calc'
        },
        {
            'name': 'm-svg__file-openoffice-default',
            'nameFr': 'Fichier OpenOffice'
        },
        {
            'name': 'm-svg__file-openoffice-draw',
            'nameFr': 'Fichier OpenOffice draw'
        },
        {
            'name': 'm-svg__file-openoffice-impress',
            'nameFr': 'Fichier OpenOffice impress'
        },
        {
            'name': 'm-svg__file-openoffice-math',
            'nameFr': 'Fichier OpenOffice math'
        },
        {
            'name': 'm-svg__file-openoffice-writter',
            'nameFr': 'Fichier OpenOffice writter'
        },
        {
            'name': 'm-svg__file-pdf',
            'nameFr': 'Fichier PDF '
        },
        {
            'name': 'm-svg__file-powerpoint',
            'nameFr': 'Fichier PowerPoint'
        },
        {
            'name': 'm-svg__file-quicktime',
            'nameFr': 'Fichier Quicktime'
        },
        {
            'name': 'm-svg__file-realplayer',
            'nameFr': 'Fichier Realplayer'
        },
        {
            'name': 'm-svg__file-text',
            'nameFr': 'Fichier texte'
        },
        {
            'name': 'm-svg__file-video',
            'nameFr': 'Fichier vidéo'
        },
        {
            'name': 'm-svg__file-visio',
            'nameFr': 'Fichier Visio'
        },
        {
            'name': 'm-svg__file-word',
            'nameFr': 'Fichier Word'
        },
        {
            'name': 'm-svg__file-zip',
            'nameFr': 'Fichier ZIP'
        },
        {
            'name': 'm-svg__full-screen',
            'nameFr': 'Plein écran'
        },
        {
            'name': 'm-svg__good-answer',
            'nameFr': 'Bonne réponse'
        },
        {
            'name': 'm-svg__good-answer2',
            'nameFr': 'Bonne réponse'
        },
        {
            'name': 'm-svg__grouping',
            'nameFr': 'Regroupement'
        },
        {
            'name': 'm-svg__heraldry',
            'nameFr': 'Blason'
        },
        {
            'name': 'm-svg__hide',
            'nameFr': 'Masquer'
        },
        {
            'name': 'm-svg__image-slideshow',
            'nameFr': 'Galerie image'
        },
        {
            'name': 'm-svg__image-square',
            'nameFr': 'Image'
        },
        {
            'name': 'm-svg__image1-filled',
            'nameFr': 'Image'
        },
        {
            'name': 'm-svg__image2-filled',
            'nameFr': 'Image'
        },
        {
            'name': 'm-svg__information-filled',
            'nameFr': 'Pastille information'
        },
        {
            'name': 'm-svg__information',
            'nameFr': 'Information'
        },
        {
            'name': 'm-svg__leave-full-screen',
            'nameFr': 'Quitter plein écran'
        },
        {
            'name': 'm-svg__logout',
            'nameFr': 'Se déconnecter'
        },
        {
            'name': 'm-svg__notification',
            'nameFr': 'Notification'
        },
        {
            'name': 'm-svg__options',
            'nameFr': 'Menu d\'options'
        },
        {
            'name': 'm-svg__panel',
            'nameFr': 'Palette'
        },
        {
            'name': 'm-svg__profile',
            'nameFr': 'Profil'
        },
        {
            'name': 'm-svg__search',
            'nameFr': 'Rechercher'
        },
        {
            'name': 'm-svg__show',
            'nameFr': 'Afficher'
        },
        {
            'name': 'm-svg__subtitle',
            'nameFr': 'Sous-titre'
        },
        {
            'name': 'm-svg__text1',
            'nameFr': 'Texte'
        },
        {
            'name': 'm-svg__text2',
            'nameFr': 'Texte'
        },
        {
            'name': 'm-svg__tip',
            'nameFr': 'Conseil'
        },
        {
            'name': 'm-svg__video-filled',
            'nameFr': 'Vidéo'
        },
        {
            'name': 'm-svg__video-slideshow',
            'nameFr': 'Galerie vidéo'
        },
        {
            'name': 'm-svg__video',
            'nameFr': 'Vidéo'
        },
        {
            'name': 'm-svg__warning-filled',
            'nameFr': 'Pastille avertissement'
        },
        {
            'name': 'm-svg__warning',
            'nameFr': 'Avertissement'
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
