import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import { films } from '../../mocks/films';
import { createAPI } from '../../services/api';
import App from './app';
import {DEFAULT_GENRE} from '../../types/genres';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import Error from './../error/error';
import {FilmTabs} from '../../types/film-tabs';
import React from 'react';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockFilm = films[0];

describe('routing when logged in', () => {
  const store = mockStore({
    APP: {
      error: null
    },
    FILM: {
      film: mockFilm,
      similar: [],
      comments: [],
      currentFilmTab: FilmTabs.Overview,
      isFilmLoadingStatus: false,
      isFilmFoundStatus: true
    },
    MAIN: {
      films: [mockFilm],
      promo: mockFilm,
      isDataLoaded: false,
      currentGenre: DEFAULT_GENRE,
      filteredFilms: [],
      cardCount: 0,
      favoriteFilms: [],
      favoriteCount: 0
    },
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      avatar: null,
      userId: null
    }
  });

  const routes = ['/'];

  const fakeApp = (
    <Provider store={store}>
      <MemoryRouter initialEntries={routes}>
        <Error />
        <App />
      </MemoryRouter>
    </Provider>
  );

  it('should render main page when navigated to "/"', () => {
    render(fakeApp);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render login page when navigated to "/login"', () => {
    routes.push('/login');
    render(fakeApp);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render film page when navigated to "/films/{id}"', () => {
    routes.push('/films/1');
    render(fakeApp);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render player when navigated to "/player/{id}"', () => {
    routes.push('/player/1');
    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  });

  it('should render reviews editor when navigated to "/films/{id}/review"', () => {
    routes.push('/films/1/review');
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should render favorites list when navigated to "/mylist"', () => {
    routes.push('/mylist');
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render not found when navigated to non-existent route', () => {
    routes.push('/fakeurl');
    render(fakeApp);

    expect(screen.getByText('Looking for something?')).toBeInTheDocument();
    expect(screen.getByText('To main')).toBeInTheDocument();
  });
});

describe('routing when not logged in', () => {
  const store = mockStore({
    APP: {
      error: null
    },
    FILM: {
      film: mockFilm,
      similar: [],
      comments: [],
      currentFilmTab: FilmTabs.Overview,
      isFilmLoadingStatus: false,
      isFilmFoundStatus: true
    },
    MAIN: {
      films: [mockFilm],
      promo: mockFilm,
      isDataLoaded: false,
      currentGenre: DEFAULT_GENRE,
      filteredFilms: [],
      cardCount: 0,
      favoriteFilms: [],
      favoriteCount: 0
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
      userId: null
    }
  });

  const routes = ['/'];

  const fakeApp = (
    <Provider store={store}>
      <MemoryRouter initialEntries={routes}>
        <Error />
        <App />
      </MemoryRouter>
    </Provider>
  );

  it('should render main page when navigated to "/"', () => {
    render(fakeApp);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render login page when navigated to "/login"', () => {
    routes.push('/login');
    render(fakeApp);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render film page when navigated to "/films/{id}"', () => {
    routes.push('/films/1');
    render(fakeApp);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render player when navigated to "/player/{id}"', () => {
    routes.push('/player/1');
    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  });

  it('should render sign-in when navigated to "/mylist"', () => {
    routes.push('/mylist');
    render(fakeApp);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
  });

  it('should render sign-in when navigated to "/films/{id}/review"', () => {
    routes.push('/films/1/review');
    render(fakeApp);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
  });

  it('should render not found when navigated to non-existent route', () => {
    routes.push('/fakeurl');
    render(fakeApp);

    expect(screen.getByText('Looking for something?')).toBeInTheDocument();
    expect(screen.getByText('To main')).toBeInTheDocument();
  });
});
