import React from 'react';
import './App.scss';
import { Pages } from './components/Pages';
import { ReposList } from './components/ReposList';
import { SearchBar } from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__search-bar search-bar">
        <SearchBar />
      </div>
      <div className="App_content">
        <ReposList />
        <div className="App_pages">
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default App;
