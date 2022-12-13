import {createAction} from '@reduxjs/toolkit';
import {FilmTabs} from '../types/film-tabs';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../const';
import {Comment} from '../types/comment';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');

const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');

const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: FilmTabs }>('film/changeFilmTab');

const loadFilms = createAction<Film[]>('data/loadFilms');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
const setError = createAction<string | null>('app/setError');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setAvatar = createAction<string | null>('user/avatar');
const loadFilm = createAction<Film>('data/loadFilmById');
const loadComments = createAction<Comment[]>('data/loadCommentsById');
const loadSimilar = createAction<Film[]>('data/loadSimilarById');

export {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  changeFilmTab,
  loadFilms,
  setDataLoadedStatus,
  setError,
  requireAuthorization,
  setAvatar,
  loadSimilar,
  loadFilm,
  loadComments,
};
