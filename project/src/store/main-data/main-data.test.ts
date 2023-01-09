import { DEFAULT_GENRE } from '../../types/genres';
import { films } from '../../mocks/films';
import { fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoAction } from '../api-actions';
import { mainData } from './main-data';
import {MainData} from '../../types/main-data';

const mockFilm = films[0];
const mockFilms = films;

describe('main-data', () => {
  let state: MainData;

  beforeEach(() => {
    state = {
      films: [],
      filteredFilms: [],
      currentGenre: DEFAULT_GENRE,
      promo: null,
      favoriteFilms: [],
      favoriteCount: 0,
      isDataLoaded: false,
      cardCount: 0,
    };
  });

  it('without type should return initial state', () => {
    expect(mainData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchFilms test', () => {
    it('load all films on setInitFilmsInfo', () => {
      expect(mainData.reducer(state, { type: fetchFilmsAction.fulfilled.type, payload: mockFilms }).films)
        .toEqual(mockFilms);
    });
  });

  describe('fetchPromoFilm test', () => {
    it('load promo film on setPromoFilmInfo', () => {
      expect(mainData.reducer(state, { type: fetchPromoAction.fulfilled.type, payload: mockFilm }).promo)
        .toEqual(mockFilm);
    });
  });

  describe('fetchFavoriteFilms test', () => {
    it('load promo film on setPromoFilmInfo', () => {
      expect(mainData.reducer(state, { type: fetchFavoriteFilmsAction.fulfilled.type, payload: mockFilms }).favoriteFilms)
        .toEqual(mockFilms);
    });
  });
});
