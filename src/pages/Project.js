import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/gitHub/githubContext';
import Slider from '../components/Slider';

const Project = () => {
  const { reposVue, getRepos, loading } = useContext(GithubContext);

  useEffect(() => {
    getRepos();
    //eslint-disable-nest-line
  }, []);
  return (
    <Fragment>
      <h2>Проекты</h2>
      <p>Проекты сделаны на Vue3 и React</p>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Slider reposVue={reposVue} />
      )}
    </Fragment>
  );
};

export default Project;
