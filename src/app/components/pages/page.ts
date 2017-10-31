import { Pages } from './pages';

export class Page {
    public tabs: string[];

    constructor(public id: string) {
        this.tabs = [];
    }
}

export const Standards: Pages = new Pages();

let page: Page;

// unified-experience
page = new Page('unified-experience');
Standards.pages.push(page);

// responsive-design
page = new Page('responsive-design');
Standards.pages.push(page);

// writing-standards
page = new Page('writing-standards');
page.tabs.push('editorial-tone');
page.tabs.push('formats');
page.tabs.push('punctuation');
page.tabs.push('glossary');
page.tabs.push('message-bank');

Standards.pages.push(page);

// visual-standards
page = new Page('visual-standards');

page.tabs.push('colors');
page.tabs.push('iconography');
page.tabs.push('typography-styles');
page.tabs.push('images-videos');

Standards.pages.push(page);

// coding-standards
page = new Page('coding-standards');

page.tabs.push('css-sass');
page.tabs.push('typescript');
page.tabs.push('accessibility');

Standards.pages.push(page);
