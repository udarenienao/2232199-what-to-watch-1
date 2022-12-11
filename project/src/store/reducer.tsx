import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {DEFAULT_GENRE} from '../types/genres';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount, loadComments, loadFilm,
  loadFilms, loadSimilar,
  requireAuthorization,
  resetCardCount,
  resetFilmScreen,
  resetMainScreen, setAvatar,
  setDataLoadedStatus,
  setError
} from './action';
import {filterFilmsByGenre} from '../utils/genre';
import {FilmTabs} from '../types/film-tabs';
import {AuthorizationStatus, CARDS_PER_STEP} from '../const';
import {Film} from '../types/film';
import {Comment} from '../types/comment';

type InitialState = {
  films: Film[];
  currentGenre: string,
  filteredFilms: Film[],
  cardCount: number,
  authorizationStatus: string,
  isDataLoaded: boolean,
  filmTab: string,
  error: string | null,
  avatar: string | null,
  comments: Comment[],
  similar: Film[],
  film: Film | null
}

const initialState: InitialState = {
  films: films,

  currentGenre: DEFAULT_GENRE,
  filteredFilms: films,
  cardCount: films.length < 8 ? films.length : 8,

  filmTab: FilmTabs.Overview,

  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,

  avatar: null,

  comments: [],
  similar: [],
  film: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_PER_STEP ? films.length : CARDS_PER_STEP;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);
      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_PER_STEP ?
        filteredFilms.length :
        8;
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmTab = FilmTabs.Overview;
    })
    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + CARDS_PER_STEP) < state.filteredFilms.length ?
        state.cardCount + CARDS_PER_STEP :
        state.filteredFilms.length;
    })
    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_PER_STEP ?
        state.filteredFilms.length :
        8;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmTab = action.payload.currentTab;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.cardCount = CARDS_PER_STEP;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(setAvatar, (state, action) => {
      state.avatar = action.payload;
    })

    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilar, (state, action) => {
      state.similar = action.payload;
    });
});
