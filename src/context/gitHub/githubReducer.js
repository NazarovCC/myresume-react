import { GET_VUE_REPOS, SET_LOADING } from '../types';

const handlers = {
  [GET_VUE_REPOS]: (state, { payload }) => ({
    ...state,
    reposVue: payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  DEFAULT: (state) => state,
};

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
