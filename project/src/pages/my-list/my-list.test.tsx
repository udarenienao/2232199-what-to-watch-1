import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { films } from '../../mocks/films';
import { createAPI } from '../../services/api';
import MyList from './my-list';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

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

describe('my-list tests', () => {
  it('should render correctly when auth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
      },
      FILM: {
        film: mockFilm,
        similar: mockFilms,
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
          <MyList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
