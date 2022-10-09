import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import {PromoMovie} from '../../types/promo-movie';
import {Film} from '../../types/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  promoMovie: PromoMovie;
  films: Film[];
}

function App({ promoMovie, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main promoMovie={promoMovie} films={films} />} />
        <Route path='login' element={<SignIn/>}/>
        <Route path='mylist' element={
          <PrivateRoute hasAccess={false}>
            <MyList myFilms={films.slice(0,9)}/>
          </PrivateRoute>}
        />
        <Route path='films/:id' element={<MoviePage moviePageFilms={films.slice(0,4)}/>}/>
        <Route path='player/:id' element={<Player/>}/>
        <Route path='films/:id/review' element={<AddReview/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
