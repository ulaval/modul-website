import { ActionTree, GetterTree, MutationTree } from 'vuex';
import * as Actions from './actions';
import * as Getters from './getters';
import * as Mutations from './mutations';
import { pages } from './pages';
import { SectionsState } from './sections-state';

const sectionsState: SectionsState = new SectionsState();
const mutations: MutationTree<SectionsState> = {
    [Mutations.SECTIONS_META_GET]: Mutations.getMetaSections,
    [Mutations.SECTIONS_GET]: Mutations.getSections,
    [Mutations.SECTION_GET]: Mutations.getSection
};

const actions: ActionTree<SectionsState, SectionsState> = {
    [Actions.SECTIONS_META_GET]: Actions.getMetaSectionsAction,
    [Actions.SECTIONS_GET]: Actions.getSectionsAction,
    [Actions.SECTION_GET]: Actions.getSectionAction
};

const getters: GetterTree<SectionsState, SectionsState> = {
    [Getters.GET_SECTIONS]: Getters.getSections,
    [Getters.GET_SECTION]: Getters.getSection
};

console.debug('TODO: review module names');
export const sections = {
    state: sectionsState,
    mutations: mutations,
    actions: actions,
    getters: getters,
    strict: true,
    modules: {
        'getting-started-section': pages,
        'standards': pages
    }
};
