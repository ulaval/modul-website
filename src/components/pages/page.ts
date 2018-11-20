import { Pages } from './pages';

console.debug('TODO: review');

export class Page {
    public tabs: string[];

    constructor(public id: string) {
        this.tabs = [];
    }
}

// these names should match labels defined in pages.<lang>.json
export const GETTING_STARTED_SECTION: string = 'getting-started-section';
export const GETTING_STARTED: string = 'getting-started';
export const COMPUTER_SETUP: string = 'computer-setup';
export const RELEASE_TRACKING: string = 'release-tracking';

export const STANDARDS_SECTION: string = 'standards';

export const UNIFIED_EXPERIENCE: string = 'unified-experience';
export const OVERVIEW: string = 'overview';
export const RESPONSIVE_DESIGN: string = 'responsive-design';

export const WRITING_STANDARDS: string = 'writing-standards';
export const EDITORIAL_TONE: string = 'editorial-tone';
export const FORMATS: string = 'formats';
export const PUNCTUATION: string = 'punctuation';
export const GLOSSARY: string = 'glossary';
export const MESSAGE_BANK: string = 'message-bank';

export const VISUAL_STANDARDS: string = 'visual-standards';
export const COLORS: string = 'colors';
export const ICONOGRAPHY: string = 'iconography';
export const TYPOGRAPHY_STYLES: string = 'typography-styles';
export const IMAGES_VIDEOS: string = 'images-videos';

export const CODING_STANDARDS: string = 'coding-standards';
export const CSS_SASS: string = 'css-sass';
export const TYPESCRIPT: string = 'typescript';
export const A11Y: string = 'accessibility';

export const GettingStarted: Pages = new Pages(GETTING_STARTED_SECTION);
export const Standards: Pages = new Pages(STANDARDS_SECTION);

let pageGettingStarted: Page;

// getting-started
pageGettingStarted = new Page(GETTING_STARTED);
pageGettingStarted.tabs.push(COMPUTER_SETUP);
// pageGettingStarted.tabs.push('frontend-architecture');
pageGettingStarted.tabs.push(RELEASE_TRACKING);

GettingStarted.pages.push(pageGettingStarted);

let pageStandard: Page;
// unified-experience
pageStandard = new Page(UNIFIED_EXPERIENCE);
pageStandard.tabs.push(OVERVIEW);

Standards.pages.push(pageStandard);

// responsive-design
pageStandard = new Page(RESPONSIVE_DESIGN);
pageStandard.tabs.push(OVERVIEW);

Standards.pages.push(pageStandard);

// writing-standards
pageStandard = new Page(WRITING_STANDARDS);
pageStandard.tabs.push(EDITORIAL_TONE);
pageStandard.tabs.push(FORMATS);
pageStandard.tabs.push(PUNCTUATION);
pageStandard.tabs.push(GLOSSARY);
pageStandard.tabs.push(MESSAGE_BANK);

Standards.pages.push(pageStandard);

// visual-standards
pageStandard = new Page(VISUAL_STANDARDS);

pageStandard.tabs.push(COLORS);
pageStandard.tabs.push(ICONOGRAPHY);
pageStandard.tabs.push(TYPOGRAPHY_STYLES);
pageStandard.tabs.push(IMAGES_VIDEOS);

Standards.pages.push(pageStandard);

// coding-standards
pageStandard = new Page(CODING_STANDARDS);

pageStandard.tabs.push(CSS_SASS);
pageStandard.tabs.push(TYPESCRIPT);
pageStandard.tabs.push(A11Y);

Standards.pages.push(pageStandard);

export const Sections: string[] = [GettingStarted.section, Standards.section];
