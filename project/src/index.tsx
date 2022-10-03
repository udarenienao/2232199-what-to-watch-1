import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const MainFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

root.render(
  <React.StrictMode>
    <App title={MainFilm.title} genre={MainFilm.genre} year={MainFilm.year}/>
  </React.StrictMode>,
);
