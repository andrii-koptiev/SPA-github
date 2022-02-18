import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Repo } from './components/Repo';
import { ReposList } from './components/ReposList';

import './App.scss';

const App: React.FC = () => {
  const [loadList, setLoadList] = useState(false);

  setTimeout(() => {
    setLoadList(true);
  }, 3000);

  return (
    <div className="App">
      {!loadList
        ? (
          <div className="App__splashscreen">
            Andrii Koptiev
          </div>
        )
        : (
          <div className="App_content">
            <Routes>
              <Route
                path="/"
                element={<ReposList />}
              />
              <Route
                path="/:repoId"
                element={<Repo />}
              />
              <Route
                path="/home"
                element={<Navigate to="/" />}
              />
              <Route
                path="*"
                element={<Navigate to="/" />}
              />
            </Routes>
          </div>
        )}
    </div>
  );
};

export default App;
