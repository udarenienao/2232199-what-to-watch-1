import { configureMockStore } from '@jedmao/redux-mock-store';
import {Action} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { films } from '../mocks/films';
import { reviews } from '../mocks/reviews';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import {
  changeFilmStatusToView,
  checkAuthAction,
  fetchCommentsByID,
  fetchFavoriteFilmsAction,
  fetchFilmByID,
  fetchFilmsAction,
  fetchPromoAction,
  fetchSimilarByID,
  loginAction,
  logoutAction,
  postComment
} from './api-actions';
import {UserComment} from '../types/user-comment';
import {AuthData} from '../types/auth-data';
import {FilmStatus} from '../types/film-status';

jest.mock('../services/error-handle.ts');

describe('async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockFilm = films[0];
  const mockFilms = films;
  const mockReviews = reviews;

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch authorization status when GET /login', async () => {
    const store = mockStore();
    mockAPI
      .onGet('/login')
      .reply(200);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch login when POST /login', async () => {
    const fakeUser: AuthData = { email: 'moonshine@mail.com', password: 'moonshine' };

    mockAPI
      .onPost('/login')
      .reply(200, { token: '12345678' });


    const store = mockStore();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);
  });

  it('should dispatch logout on DELETE /logout', async () => {
    mockAPI
      .onDelete('/logout')
      .reply(204);

    const store = mockStore();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
  });

  it('should dispatch films when GET /films', async () => {
    mockAPI
      .onGet('/films')
      .reply(200);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch promo film when GET /promo', async () => {
    mockAPI
      .onGet('/promo')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should fetch film when GET /films/{id}', async () => {
    mockAPI
      .onGet('/films/1')
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(fetchFilmByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFilmByID.pending.type,
      fetchFilmByID.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /films/{id}/similar', async () => {
    mockAPI
      .onGet('/films/1/similar')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchSimilarByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSimilarByID.pending.type,
      fetchSimilarByID.fulfilled.type
    ]);
  });

  it('should fetch similar films film when GET /comments/{id}', async () => {
    mockAPI
      .onGet('/comments/1')
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchCommentsByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCommentsByID.pending.type,
      fetchCommentsByID.fulfilled.type
    ]);
  });

  it('POST /comments/{id}', async () => {
    const postData: UserComment = {
      filmId: '1',
      comment: 'i wanna die',
      rating: 8,
    };

    mockAPI
      .onPost('/comments/1', {
        comment: postData.comment,
        rating: postData.rating
      })
      .reply(200);

    const store = mockStore();

    await store.dispatch(postComment(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postComment.pending.type,
      postComment.fulfilled.type
    ]);
  });

  it('should fetch favorite films film when GET /favorite', async () => {
    mockAPI
      .onGet('/favorite')
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoriteFilmsAction.pending.type,
      fetchFavoriteFilmsAction.fulfilled.type
    ]);
  });

  it('POST /favorite/{filmId}/{status}', async () => {
    const postData: FilmStatus = {
      filmId: 1,
      status: 0
    };

    mockAPI
      .onPost('/favorite/1/0')
      .reply(200);

    const store = mockStore();

    await store.dispatch(changeFilmStatusToView(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      changeFilmStatusToView.pending.type,
      changeFilmStatusToView.fulfilled.type
    ]);
  });
});
