import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';

export const SearchBar: React.FC = () => {
  const {
    setSearchQuery,
    setSortParam,
    setCurrentPage,
    changeStateRepos,
  } = useActions();
  const { repos } = useTypedSelector(state => state.repos);

  const [inputValue, setInputValue] = useState('');

  const handleSumbitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);

    setSearchQuery(inputValue);

    setInputValue('');
  };

  const sortByName = () => {
    const sortedRepos = [...repos].sort((a, b) => a.name.localeCompare(b.name));

    changeStateRepos(sortedRepos);
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={(event) => {
          handleSumbitForm(event);
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
          className="button search-bar__button"
          onClick={() => {
            setSortParam('updated');
          }}
        >
          Sort by Update
        </button>
        <button
          type="button"
          className="button search-bar__button"
          onClick={() => {
            setSortParam('stars');
          }}
        >
          Sort by Rank
        </button>
        <button
          type="button"
          className="button search-bar__button"
          onClick={() => {
            sortByName();
          }}
        >
          Sort by Name
        </button>
      </div>
    </>
  );
};
