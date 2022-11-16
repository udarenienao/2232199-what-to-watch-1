import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {DEFAULT_GENRE} from '../types/genres';
import {changeFilmTab, changeGenre, getFilmsByGenre, resetFilmScreen, resetMainScreen} from './action';
import {sortFilmsByGenre} from '../utils/genre';
import {FilmTabs} from '../types/film-tabs';

const initialState = {
  films: films,

  currentGenre: DEFAULT_GENRE,
  shownFilms: films,

  filmTab: FilmTabs.Overview
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.shownFilms = films;
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.shownFilms = sortFilmsByGenre(state.films, state.currentGenre);
    })

    .addCase(resetFilmScreen, (state) => {
      state.filmTab = FilmTabs.Overview;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmTab = action.payload.currentTab;
    });
});
