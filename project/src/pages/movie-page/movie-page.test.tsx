import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { films } from '../../mocks/films';
import {reviews} from '../../mocks/reviews';
import { createAPI } from '../../services/api';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import MoviePage from './movie-page';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockFilms = films;
const mockFilm = films[0];
const mockReviews = reviews;


describe('movie page tests', () => {
  it('should render correctly if noauth', () => {
    const store = mockStore({
      USER:{
        authorizationStatus:AuthorizationStatus.NoAuth
      },
      FILM: {
        film: mockFilm,
        comments: mockReviews,
        similar: mockFilms,
        isFilmFoundStatus: true,
        isFilmLoadingStatus: false
      },
      MAIN: {
        films: mockFilms,
        filteredFilms: mockFilms
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.queryByText(/My List/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Add Review/i)).not.toBeInTheDocument();
  });

  it('should render correctly if auth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      FILM: {
        film: mockFilm,
        comments: mockReviews,
        similar: mockFilms,
        isFilmLoadingStatus: false,
        isFilmFoundStatus: true
      },
      MAIN: {
        films: mockFilms,
        filteredFilms: mockFilms,
        promo: mockFilm,
        favoriteFilms: mockFilms,
        favoriteCount: mockFilms.length,
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  });
});
