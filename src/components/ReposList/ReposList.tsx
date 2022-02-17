import React, { useEffect } from 'react';
import 'bulma';
import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import './ReposList.scss';
import { Loader } from '../Loader';

export const ReposList: React.FC = () => {
  const {
    repos,
    loading,
    searchQuery,
    sortBy,
    currentPage,
    perPage,
    reposCount,
    favoritesIds,
  } = useTypedSelector(state => state.repos);
  const { fetchRepos, addToFavorites, removeFromFavorites } = useActions();

  useEffect(() => {
    fetchRepos(searchQuery, sortBy, currentPage, perPage);
  }, [searchQuery, sortBy, currentPage, perPage]);

  const setFavorites = (repoId: number) => {
    if (favoritesIds.includes(repoId)) {
      removeFromFavorites(repoId);
    } else {
      addToFavorites(repoId);
    }
  };

  const setButtonName = (repoId: number) => {
    if (favoritesIds.includes(repoId)) {
      return 'Remove from favorites';
    }

    return 'Add to Favorites';
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="box">
        {`${reposCount || 'No'} repositories were found`}
      </div>
      <div className="content__repos-list">
        {repos.map(repo => (
          <div key={repo.id} className="box repos-list__box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={repo.owner.avatar_url} alt={repo.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p className="content-item">
                    <strong>{repo.name}</strong>
                  </p>
                  <p className="content-item">
                    <small>{`rank: ${repo.stargazers_count}`}</small>
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="button top-button is-primary is-info"
              >
                View more
              </button>
              <button
                type="button"
                className={classNames('button',
                  { 'is-success': !favoritesIds.includes(repo.id) },
                  { 'is-danger': favoritesIds.includes(repo.id) })}
                onClick={() => {
                  setFavorites(repo.id);
                }}
              >
                {setButtonName(repo.id)}
              </button>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};
