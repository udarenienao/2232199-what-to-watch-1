import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import {BrowserRouter} from 'react-router-dom';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText('Looking for something?')).toBeInTheDocument();
    expect(screen.getByText('To main')).toBeInTheDocument();
  });
});
