import { Pages } from './pages';

export class Page {
    public tabs: string[];

    constructor(public id: string) {
        this.tabs = [];
    }
}

export const Standards: Pages = new Pages();
export const GettingStarted: Pages = new Pages();

let pageGettingStarted: Page;

// getting-started
pageGettingStarted = new Page('getting-started');
pageGettingStarted.tabs.push('computer-setup');
pageGettingStarted.tabs.push('source-code');
pageGettingStarted.tabs.push('frontend-architecture');
pageGettingStarted.tabs.push('release-tracking');

GettingStarted.pages.push(pageGettingStarted);

let pageStandard: Page;
// unified-experience
pageStandard = new Page('unified-experience');
pageStandard.tabs.push('overview-unified-experience');

Standards.pages.push(pageStandard);

// responsive-design
pageStandard = new Page('responsive-design');
pageStandard.tabs.push('overview-responsive-design');

Standards.pages.push(pageStandard);

// writing-standards
pageStandard = new Page('writing-standards');
pageStandard.tabs.push('editorial-tone');
pageStandard.tabs.push('formats');
pageStandard.tabs.push('punctuation');
pageStandard.tabs.push('glossary');
pageStandard.tabs.push('message-bank');

Standards.pages.push(pageStandard);

// visual-standards
pageStandard = new Page('visual-standards');

pageStandard.tabs.push('colors');
pageStandard.tabs.push('iconography');
pageStandard.tabs.push('typography-styles');
pageStandard.tabs.push('images-videos');

Standards.pages.push(pageStandard);

// coding-standards
pageStandard = new Page('coding-standards');

pageStandard.tabs.push('css-sass');
pageStandard.tabs.push('typescript');
pageStandard.tabs.push('accessibility');

Standards.pages.push(pageStandard);
