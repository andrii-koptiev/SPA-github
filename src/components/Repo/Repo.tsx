import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Loader } from '../Loader';

import './Repo.scss';

export const Repo: React.FC = () => {
  const { repos } = useTypedSelector(state => state.repos);
  const [selectedRepo, setSelectedRepo] = useState<GitRepo | undefined>();
  const { repoId } = useParams();

  useEffect(() => {
    const repoFromState = repos.find(repo => repo.id === Number(repoId));

    setSelectedRepo(repoFromState);
  }, [repoId]);

  if (selectedRepo === undefined) {
    return (
      <Loader />
    );
  }

  const {
    name,
    owner,
    html_url,
    description,
    stargazers_count,
    language,
  } = selectedRepo;
  const { avatar_url, login } = owner;

  return (
    <div className="card card-repo">
      <p className="card__name">{name}</p>
      <div className="card__image-box">
        <img
          className="card__picture"
          src={avatar_url}
          alt={String(name)}
        />
      </div>
      <p className="card__login">{`User: ${login}`}</p>
      <p className="card__repo-link">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          Repo Link
        </a>
      </p>
      <p className="description">Rank</p>
      <p className="card__rank">{stargazers_count}</p>
      <p className="description">Language</p>
      <p className="card__language">{language}</p>
      <p className="description">Description</p>
      <p className="card__description">{description}</p>
    </div>
  );
};
