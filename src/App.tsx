import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/loader/loader';
import Login from './components/login/login';

const Character: Function = React.lazy(() => import('./components/character/character'));
const Characters: Function = React.lazy(() => import('./components/characters/characters'));
const FavoriteCharacters: Function = React.lazy(() => import('./components/favoriteCharacters/favoriteCharacters'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/characters/:id"
        element={
          (
            <Suspense fallback={<Loader />}>
              <Character />
            </Suspense>
          )
        }
      />
      <Route
        path="/characters"
        element={
          (
            <Suspense fallback={<Loader />}>
              <Characters />
            </Suspense>
          )
        }
      />
      <Route
        path="/characters/:id/characters/favorite"
        element={
          (
            <Suspense fallback={<Loader />}>
              <FavoriteCharacters />
            </Suspense>
          )
        }
      />
    </Routes>
  );
};

export default App;
