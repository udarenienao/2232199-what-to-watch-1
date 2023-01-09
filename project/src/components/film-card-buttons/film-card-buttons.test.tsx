import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { films } from '../../mocks/films';
import {AuthorizationStatus} from '../../const';
import FilmCardButtons from './film-card-buttons';
import {createAPI} from '../../services/api';
import thunk from 'redux-thunk';
import {State} from '../../types/state';
import {reviews} from '../../mocks/reviews';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockFilm = films[0];

describe('film card buttons tests', () => {
  it('should render correctly when no auth', () => {
    const store = mockStore({
      USER:{
        authorizationStatus:AuthorizationStatus.NoAuth
      },
      MAIN: {
        favoriteCount: 0
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmCardButtons film={mockFilm} authStatus={AuthorizationStatus.NoAuth} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.queryByText(/My List/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Add Review/i)).not.toBeInTheDocument();
  });

  it('should render correctly when auth', () => {
    const store = mockStore({
      USER:{
        authorizationStatus:AuthorizationStatus.Auth
      },
      MAIN: {
        favoriteCount: 0
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmCardButtons film={mockFilm} authStatus={AuthorizationStatus.Auth} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  });
});
