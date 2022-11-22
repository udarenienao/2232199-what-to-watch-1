import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {DEFAULT_GENRE} from '../types/genres';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  resetMainScreen
} from './action';
import {filterFilmsByGenre} from '../utils/genre';
import {FilmTabs} from '../types/film-tabs';

const initialState = {
  films: films,

  currentGenre: DEFAULT_GENRE,
  filteredFilms: films,
  cardCount: films.length < 8 ? films.length : 8,

  filmTab: FilmTabs.Overview
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = films;
      state.cardCount = films.length < 8 ? films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);
      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < 8 ?
        filteredFilms.length :
        8;
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmTab = FilmTabs.Overview;
    })
    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + 8) < state.filteredFilms.length ?
        state.cardCount + 8 :
        state.filteredFilms.length;
    })
    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < 8 ?
        state.filteredFilms.length :
        8;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmTab = action.payload.currentTab;
    });
});
