import { Page, Tab } from '@/app/components/pages/page';

export interface RouteInfo {
    url: string;
    name: string;
}

export type RouteMap = {
    [key: string]: RouteInfo;
};

export type KeyMap = {
    [key: string]: string
};

export class PagesState {
    public metaLanguageLoaded: string | null = null;
    public messagesLanguageLoaded: string | null = null;

    public pageRoutes: RouteMap = {};
    public tagRoutes: RouteMap = {};
    public pagesText: KeyMap = {};
    public tabsText: KeyMap = {};

    public tab: Tab | null = null;
    public tabMarkdown: string | null = null;
    public page: string | null = null;
}
