import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { films } from '../../mocks/films';
import { createAPI } from '../../services/api';
import AddReview from './add-review';
import {AuthorizationStatus} from '../../const';
import {State} from '../../types/state';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockFilm = films[0];

describe('add-review tests', () => {
  it('should render correctly when auth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
      },
      FILM: {
        film: mockFilm,
      },
      MAIN: {
        isDataLoaded: false
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddReview />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  });
});
