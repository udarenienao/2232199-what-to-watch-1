import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {films} from '../../mocks/films';
import {createAPI} from '../../services/api';
import SignIn from './sign-in';
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
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    avatar: null,
  },
  MAIN: {
    favoriteFilms: films,
  }
});

describe('sign-in tests', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
