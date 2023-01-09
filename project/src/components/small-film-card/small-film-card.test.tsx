import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { films } from '../../mocks/films';
import SmallFilmCard from './small-film-card';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockFilm = films[0];
const mockStore = configureMockStore();
const store = mockStore();

describe('small-film-card tests', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SmallFilmCard
            id={mockFilm.id}
            title={mockFilm.name}
            previewImage={mockFilm.previewImage}
            videoUrl={mockFilm.previewVideoLink}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('should redirect correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path={`/films/${mockFilm.id}`} element={<h1>Film</h1>} />
            <Route
              path="*"
              element={
                <SmallFilmCard
                  id={mockFilm.id}
                  title={mockFilm.name}
                  previewImage={mockFilm.previewImage}
                  videoUrl={mockFilm.previewVideoLink}
                />
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const filmButton = screen.getByTestId('film-link');
    fireEvent.click(filmButton);

    expect(screen.getByText(/Film/i)).toBeInTheDocument();
  });
});
