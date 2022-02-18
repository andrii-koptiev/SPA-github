import React, { useEffect } from 'react';
import 'bulma';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { Loader } from '../Loader';
import { SearchBar } from '../SearchBar';
import { Pages } from '../Pages';

import './ReposList.scss';

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

  const {
    fetchRepos,
    addToFavorites,
    removeFromFavorites,
  } = useActions();

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

  return (
    <>
      <div className="search-bar repos-list__search-bar">
        <SearchBar />
      </div>
      <div className="box repos-list__info-box">
        {`${reposCount || 'No'} repositories were found`}
      </div>
      {loading
        ? <Loader />
        : (
          <>
            <div className="repos-list__list">
              <div className="repos-list__content">
                {repos.map(repo => (
                  <div key={repo.id} className="box card repos-list__card">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-128x128 card__image-container">
                          <img
                            className="card__image"
                            src={repo.owner.avatar_url}
                            alt={repo.name}
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p className="content-item">
                            <strong className="card__title">{repo.name}</strong>
                          </p>
                          <p className="content-item">
                            <small>{`rank: ${repo.stargazers_count}`}</small>
                          </p>
                        </div>
                      </div>
                      <Link
                        type="button"
                        className="button top-button is-primary is-info"
                        to={`/${repo.id}`}
                      >
                        View more
                      </Link>
                      <button
                        type="button"
                        className={classNames('button bottom-button',
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
            </div>
            <div className="repos-list__pages">
              <Pages />
            </div>
          </>
        )}
    </>
  );
};
