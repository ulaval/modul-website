import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './pages.html';
import { Watch } from 'vue-property-decorator';
import * as PagesActions from '@/app/store/modules/pages/actions';
import * as PagesGetters from '@/app/store/modules/pages/getters';
import { KeyMap, RouteMap } from '@/app/store/modules/components/components-state';
import { ModulWebsite } from '../modul-website';
import { Page, Standards } from './page';
import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
// import { STANDARDS, GETTING_STARTED } from './../../router';

console.warn('TODO: url service');

const ZINDEX: number = 200;

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class PageViewer extends ModulWebsite {
    private listOpened: boolean = false;
    private tab: string | null = null;

    protected created(): void {
        this.getMeta();
    }

    private get pages(): string[] {
        return this.$route.meta.sectionObj.getPages();
    }

    // TODO: url service
    @Watch('$route')
    private getMeta(): void {
        let pagesObj: Pages = this.$route.meta.sectionObj;
        let route: string | null;

        if (pagesObj.section === 'standards') {
            route = this.$i18n.translate('pages:standards-route');
        } else if (pagesObj.section === 'getting-started') {
            route = this.$i18n.translate('pages:getting-started-route');
        }

        this.$store.dispatch(PagesActions.SECTION_GET, { section: pagesObj.section, route: route });

        this.$store.dispatch(this.section + PagesActions.PAGE_GET, this.$route.meta.page);
        this.$store.dispatch(this.section + PagesActions.PAGE_SUMMARY_GET, {
            restAdapter: this.$http
        });
        this.$store.dispatch(this.section + PagesActions.PAGE_TABS_GET, (pagesObj.getPageTabs(this.$route.meta.page)));

        if (this.$route.meta.tab) {
            this.$store.dispatch(this.section + PagesActions.TAB_GET, this.$route.meta.tab);
        }
    }

    private get section(): string {
        return this.$store.getters[PagesGetters.GET_SECTION] + '/';
    }

    private get page(): string | null {
        return this.$store.getters[this.section + PagesGetters.GET_PAGE];
    }

    private get selectedPage(): string | undefined {
        return this.page ? this.page : undefined;
    }

    private set selectedPage(id: string | undefined) {
        if (id) {
            this.$router.push(this.$store.getters[this.section + PagesGetters.GET_PAGE_ROUTES][id].url);
        }
    }

    private get summaryMarkdown(): string {
        return this.$store.getters[this.section + PagesGetters.GET_MARKDOWN_SUMMARY];
    }

    private get showNav(): boolean {
        return this.pages.length > 1;
    }

    private getPageName(id: string): string {
        let keyMap: KeyMap = this.$store.getters[this.section + PagesGetters.GET_PAGES_TEXT];
        return keyMap[id];
    }

    private getPreviousPage(): void {
        if (this.selectedPage) {
            let index: number = this.pages.indexOf(this.selectedPage);
            index--;
            if (index < 0) {
                index = this.pages.length - 1;
            }
            this.selectedPage = this.pages[index];
        }
    }

    private getNextPage(): void {
        if (this.selectedPage) {
            let index: number = this.pages.indexOf(this.selectedPage);
            index++;
            if (index >= this.pages.length) {
                index = 0;
            }
            this.selectedPage = this.pages[index];
        }
    }

    private onOpen(): void {
        this.listOpened = true;
    }

    private onClose(): void {
        this.listOpened = false;
    }

    private get zIndex(): number {
        return this.listOpened ? ZINDEX : 0;
    }
}

export class Pages {
    public pages: Page[];

    constructor(public section: string) {
        this.pages = [];
    }

    public getPages(): string[] {
        let idCategories: string[] = [];

        for (let page of this.pages) {
            idCategories.push(page.id);
        }

        return idCategories;
    }

    public getPageTabs(idPage: string): string[] {
        let tabs: string[] = [];

        for (let page of this.pages) {
            if (page.id == idPage) {
                tabs = page.tabs;
            }
        }

        return tabs;
    }
}
