import {FilmData} from '../../types/film-data';
import { films } from '../../mocks/films';
import { filmData } from './film-data';
import { fetchCommentsByID, fetchFilmByID, fetchSimilarByID } from '../api-actions';
import {FilmTabs} from '../../types/film-tabs';
import {reviews} from '../../mocks/reviews';

const mockFilm = films[0];
const mockFilms = films;
const mockReviews = reviews;

describe('film-data', () => {
  let state: FilmData;

  beforeEach(() => {
    state = {
      film: null,
      comments: [],
      similar: [],
      currentFilmTab: FilmTabs.Overview,
      isFilmFoundStatus: false,
      isFilmLoadingStatus: false
    };
  });

  it('without type should return initial state', () => {
    expect(filmData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        film: null,
        currentFilmTab: FilmTabs.Overview,
        comments: [],
        similar: [],
        isFilmFoundStatus: null,
        isFilmLoadingStatus: true,
      });
  });

  describe('fetchFilmByID test', () => {
    it('should load film on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchFilmByID.fulfilled.type, payload: mockFilm }).film)
        .toEqual(mockFilm);
    });
  });

  describe('fetchSimilarByID test', () => {
    it('should load similar films on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchSimilarByID.fulfilled.type, payload: mockFilms }).similar)
        .toEqual(mockFilms);
    });
  });

  describe('fetchCommentsByID test', () => {
    it('should load reviews on fulfilled', () => {
      expect(filmData.reducer(state, { type: fetchCommentsByID.fulfilled.type, payload: mockReviews }))
        .toMatchObject({
          comments: mockReviews,
        });
    });
  });
});
