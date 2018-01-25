import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './icon-gallery.html?style=./icon-gallery.scss';
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { normalizeString } from '@ulaval/modul-components/dist/utils/str/str';
import { start } from 'repl';

export enum MIconGalleryViewMode {
    List = 'list',
    Block = 'block'
}

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MIconGallery extends ModulWebsite {

    private iconSize: string = '20px';
    private focus: boolean = false;
    private searchModel: string = '';
    private intenalViewMode: string = MIconGalleryViewMode.Block;

    private dialogOpen: boolean = false;
    private previewIconSize: number = 32;
    private previewName: string = '';
    private previewTag: string = '';

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
            'nameFr': 'Pastille de validation'
        },
        {
            'name': 'chip-close',
            'nameFr': 'Pastille de fermeture'
        },
        {
            'name': 'chip-error',
            'nameFr': 'Pastille d\'erreur'
        },
        {
            'name': 'chip-info',
            'nameFr': 'Pastille d\'information'
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
            'nameFr': 'Chevrons de balisage'
        },
        {
            'name': 'down-arrow',
            'nameFr': 'Flèche vers le bas'
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
            'nameFr': 'Menu d\'options'
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

    private get sizeFieldWidth(): string {
        return this.focus ? '0' : '64px';
    }

    private get viewModeButtonWidth(): string {
        return this.focus ? '0' : '44px';
    }

    private get isViewModeBlock(): boolean {
        return this.as<MediaQueriesMixin>().isMqMinS && (this.viewMode == MIconGalleryViewMode.Block);
    }

    private getName(index: number, lang: string = 'en'): string {
        return lang == 'en' ? this.iconList[index].name : this.iconList[index].nameFr;
    }

    private get searchIconsText(): string {
        return this.$i18n.translate('modul:search-icons');
    }

    private get sizePixel(): string {
        return this.iconSize + 'px';
    }

    private onFocus(): void {
        this.focus = true;
    }

    private onBlur(): void {
        this.focus = false;
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

    private openDialog(index) {
        this.dialogOpen = true;
        this.previewName = this.getName(index, 'fr');
        this.previewTag = this.getName(index);
    }

}

export const ICON_GALLERY_NAME: string = 'modul-icon-gallery';
