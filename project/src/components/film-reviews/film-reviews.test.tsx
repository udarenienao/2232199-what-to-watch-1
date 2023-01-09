import { render, screen } from '@testing-library/react';
import FilmReviews from './film-reviews';
import {reviews} from '../../mocks/reviews';
import {formatDate} from '../../utils/date';

describe('reviews tests', () => {
  it('should render correctly', () => {
    render(
      <FilmReviews reviews={reviews}/>);

    const expectedReview = reviews[0];
    expect(screen.getByText(expectedReview.comment)).toBeInTheDocument();
    expect(screen.getByText(expectedReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(formatDate(expectedReview.date))).toBeInTheDocument();
    expect(screen.getByText(expectedReview.rating)).toBeInTheDocument();
  });
});
