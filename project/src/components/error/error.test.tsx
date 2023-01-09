import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import Error from './error';
import {State} from '../../types/state';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

describe('error-message tests', () => {
  const store = mockStore({
    APP: {
      error: 'something wrong',
    },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Error />
      </Provider>
    );

    expect(screen.getByText(/something wrong/i)).toBeInTheDocument();
  });
});
