import { LoaderInitState } from '../../types/store/initState';
import { rootState } from '../../types/store/rootState';

export const loadingSelector = (state: rootState): LoaderInitState => state.loader;
