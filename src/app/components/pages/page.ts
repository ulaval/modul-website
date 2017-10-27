import { Pages } from './pages';

export class Page {
    public preview: string;
    public tabs: Tab[];

    constructor(public id: string) {
        this.tabs = [];
    }
}

export class Tab {
    constructor(public id: string, public content: string) {
    }
}

export const Standards: Pages = new Pages();

let page: Page;
let tab: Tab;

// unified-experience
page = new Page('unified-experience');
Standards.pages.push(page);

// responsive-design
page = new Page('responsive-design');
Standards.pages.push(page);

// writing-standards
page = new Page('writing-standards');

tab = new Tab('editorial-tone', '');
page.tabs.push(tab);
tab = new Tab('formats', '');
page.tabs.push(tab);
tab = new Tab('punctuation', '');
page.tabs.push(tab);
tab = new Tab('glossary', '');
page.tabs.push(tab);
tab = new Tab('message-bank', '');
page.tabs.push(tab);

Standards.pages.push(page);

// visual-standards
page = new Page('visual-standards');

tab = new Tab('colors', '');
page.tabs.push(tab);
tab = new Tab('iconography', '');
page.tabs.push(tab);
tab = new Tab('typography-styles', '');
page.tabs.push(tab);
tab = new Tab('images-videos', '');
page.tabs.push(tab);

Standards.pages.push(page);

// coding-standards
page = new Page('coding-standards');

tab = new Tab('css-sass', '');
page.tabs.push(tab);
tab = new Tab('typescript', '');
page.tabs.push(tab);
tab = new Tab('accessibility', '');
page.tabs.push(tab);

Standards.pages.push(page);
