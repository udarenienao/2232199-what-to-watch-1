import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import {AuthorizationStatus} from '../../const';

const mockStore = configureMockStore();
const initialEntries = ['/'];
const store = mockStore();

describe('private route tests', () => {
  beforeEach(() => {
    initialEntries.push('/private');
  });

  it('should redirect to login when no auth', () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route
              path={'/login'}
              element={<h1>Login</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                  <h1>Private</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private/i)).not.toBeInTheDocument();
  });

  it('should render component for private route when auth', () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route
              path={'/login'}
              element={<h1>Login</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <h1>Private</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Private/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
  });
});
