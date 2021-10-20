import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/gitHub/githubContext';

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
        <div className="card">
          <ul className="list-group">
            {reposVue.map((r) => (
              <li key={r.id} className="list-group-item list-group-item-action">
                <h4 className="project_name">{r.name}</h4>
                <a href={r.html_url}>{r.html_url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Project;
