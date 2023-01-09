import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { films } from '../../mocks/films';
import { createAPI } from '../../services/api';
import Player from './player';
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

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
  MAIN: {
    favoriteFilms: mockFilms,
  },
  FILM: {
    film: mockFilm,
    isFilmLoadingStatus: false,
    isFilmFoundStatus: true
  }
});

describe('video-player tests', () => {
  beforeAll(() => {
    window.HTMLVideoElement.prototype.play = jest.fn();
    window.HTMLVideoElement.prototype.load = jest.fn();
    window.HTMLVideoElement.prototype.pause = jest.fn();
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });


  it('should play when button clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId('player-play'));
    expect(window.HTMLVideoElement.prototype.play).toBeCalled();
  });
});
