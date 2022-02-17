import React from 'react';
import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { createPages } from '../../functions/pagesCreator';
import './Pages.scss';

export const Pages: React.FC = () => {
  const { currentPage, reposCount, perPage } = useTypedSelector(state => state.repos);
  const { setCurrentPage } = useActions();

  const pages: number[] = [];
  const pagesCount = Math.ceil(reposCount / perPage);

  createPages(pages, pagesCount, currentPage);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {pages.map(page => (
          <li key={page} className="pagination-list__item">
            <button
              type="button"
              className={classNames('pagination-link',
                { 'is-current': page === currentPage })}
              aria-label="Page 1"
              aria-current="page"
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
