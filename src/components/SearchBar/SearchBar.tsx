import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';

import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const {
    setSearchQuery,
    setSortParam,
    setCurrentPage,
    setPagesPerPage,
  } = useActions();

  const { perPage } = useTypedSelector(state => state.repos);

  const [inputValue, setInputValue] = useState('');
  const [pagesValue, setPagesValue] = useState(perPage);

  const handleSumbitSearchForm = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);

    setSearchQuery(inputValue);

    setInputValue('');
  };

  const handleSumbitPagesForm = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);

    setPagesPerPage(pagesValue);

    setInputValue('');
  };

  return (
    <>
      <form
        className="search-bar__search-form"
        onSubmit={(event) => {
          handleSumbitSearchForm(event);
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="button is-warning"
        >
          Search
        </button>
      </form>
      <div className="search-bar__button-container">
        <button
          type="button"
          className="button search-bar__sort-button"
          onClick={() => {
            setSortParam('updated');
          }}
        >
          Sort by Update
        </button>
        <button
          type="button"
          className="button search-bar__sort-button"
          onClick={() => {
            setSortParam('stars');
          }}
        >
          Sort by Rank
        </button>
        <button
          type="button"
          className="button search-bar__sort-button"
          onClick={() => {
            setSortParam('forks');
          }}
        >
          Sort by Forks
        </button>
      </div>
      <form
        className="search-bar__set-pages-form"
        onSubmit={(event) => {
          handleSumbitPagesForm(event);
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Items..."
          value={pagesValue}
          onChange={(event) => {
            setPagesValue(Number(event.target.value));
          }}
          required
        />
        <button
          type="submit"
          className="button is-warning"
        >
          Show repos per page
        </button>
      </form>
    </>
  );
};
