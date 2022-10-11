import Main from '../../pages/main/main';
import {PromoMovie} from '../../types/promo-movie';
import {Film} from '../../types/film';

type AppProps = {
  promoMovie: PromoMovie;
  films: Film[];
}

function App({ promoMovie, films }: AppProps): JSX.Element {
  return <Main promoMovie={promoMovie} films={films} />;
}

export default App;
