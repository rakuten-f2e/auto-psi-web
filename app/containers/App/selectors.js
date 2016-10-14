import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectPsiResults = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('psiResults')
);

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
);

export {
  selectGlobal,
  selectPsiResults,
  selectLoading,
  selectError,
};
