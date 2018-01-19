// export interface RouteInfo {
//     url: string;
//     name: string;
// }

// export type RouteMap = {
//     [key: string]: RouteInfo;
// };

export type KeyMap = {
    [key: string]: string
};

export class PagesState {
    // public pageRoutes: RouteMap = {};
    // public tabRoutes: RouteMap = {};
    public pagesText: KeyMap = {};

    public tabs: string[] | null = null;
    public tab: string | null = null;
    public tabMarkdown: string | null = null;
    public page: string | null = null;
    public pageSummaryMarkdown: string | null = null;
}
