import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './pages.html';
import { Watch } from 'vue-property-decorator';
import * as PagesActions from '@/app/store/modules/pages/actions';
import * as PagesGetters from '@/app/store/modules/pages/getters';
import { KeyMap, RouteMap, ComponentsState } from '@/app/store/modules/components/components-state';
import { ModulWebsite } from '../modul-website';
import { ComponentMeta } from '@ulaval/modul-components/dist/meta/meta';
import { Page, Tab, Standards } from './page';

const ZINDEX: number = 200;

@WithRender
@Component
export class PageViewer extends ModulWebsite {

    private listOpened: boolean = false;

    protected mounted(): void {
        this.getMeta();
    }

    private get pages(): string[] {
        let pagesObj: Pages = this.$route.matched[0].props.valueOf()['default']['sectionObj'];
        return pagesObj.getPages();
    }

    @Watch('$route')
    private getMeta(): void {
        let pagesObj: Pages = this.$route.matched[0].props.valueOf()['default']['sectionObj'];

        this.$store.dispatch(PagesActions.PAGE_GET, this.$route.meta);
        this.$store.dispatch(PagesActions.PAGE_SUMMARY_GET, {
            restAdapter: this.$http
        });
        this.$store.dispatch(PagesActions.PAGE_TABS_GET, (pagesObj.getPageTabs(this.$route.meta)));
    }

    private get page(): string | null {
        return this.$store.getters[PagesGetters.GET_PAGE];
    }

    private get selectedPage(): string | undefined {
        return this.page ? this.page : undefined;
    }

    private set selectedPage(id: string | undefined) {
        if (id) {
            this.$router.push(this.$store.getters[PagesGetters.GET_PAGE_ROUTES][id].url);
        }
    }

    private get summaryMarkdown(): string {
        return this.$store.getters[PagesGetters.GET_MARKDOWN_SUMMARY];
    }

    private getPageName(id: string): string {
        let keyMap: KeyMap = this.$store.getters[PagesGetters.GET_PAGES_TEXT];
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
    pages: Page[];
    constructor() {
        this.pages = [];
    }

    public getPages(): string[] {
        let idCategories: string[] = [];

        for (let page of this.pages) {
            idCategories.push(page.id);
        }

        return idCategories;
    }

    public getPageTabs(idPage: string): Tab[] {
        let tabs: Tab[] = [];

        for (let page of this.pages) {
            if (page.id == idPage) {
                tabs = page.tabs;

            }
        }

        return tabs;
    }
}