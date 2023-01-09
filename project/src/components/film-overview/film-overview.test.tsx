import { render, screen } from '@testing-library/react';
import { films } from '../../mocks/films';
import FilmOverview from './film-overview';

const mockFilm = films[0];

describe('overview tests', () => {
  it('should render correctly', () => {
    render(
      <FilmOverview film={mockFilm} />
    );

    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
    expect(screen.getByText(`Director: ${mockFilm.director}`)).toBeInTheDocument();
    expect(screen.getByText(`Starring: ${mockFilm.starring.join(', ')} and other`)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilm.scoresCount} ratings`)).toBeInTheDocument();
  });
});
