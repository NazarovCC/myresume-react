import axios from 'axios';
import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { GET_VUE_REPOS, SET_LOADING } from '../types';
import { githubReducer } from './githubReducer';

const CLEINT_ID = 'ac8a958f40182b598055';
const CLEINT_SECRET = '7e5ac6567542cfbc97ee95a8fb0bf0348c5878ec';

const withCreds = (url) => {
  return `${url}client_id=${CLEINT_ID}&client_secret=${CLEINT_SECRET}`;
};

export const GithubState = ({ children }) => {
  const initialState = {
    reposVue: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getRepos = async () => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/users/NazarovCC/repos?per_page=5&`)
    );

    dispatch({
      type: GET_VUE_REPOS,
      payload: response.data,
    });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  const { reposVue, loading } = state;
  return (
    <GithubContext.Provider
      value={{
        getRepos,
        reposVue,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
