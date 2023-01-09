import { render, screen } from '@testing-library/react';
import { films } from '../../mocks/films';
import FilmDetails from './film-details';

const mockFilm = films[0];

describe('details tests', () => {
  it('should render correctly', () => {
    render(
      <FilmDetails film={mockFilm}/>
    );

    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.released)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.runTime)).toBeInTheDocument();
    mockFilm.starring.forEach((star) => expect(screen.getByText(star)).toBeInTheDocument());
  });
});
