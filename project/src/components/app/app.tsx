import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import {Film} from '../../types/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';


type AppProps = {
  films: Film[];
}

function App({ films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main promoMovie={films[0]}/>} />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute hasAccess={false}>
                <MyList myFilms={films.slice(0,3)}/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<MoviePage films={films}/>}/>
          <Route path='player/:id' element={<Player films={films}/>}/>
          <Route path='films/:id/review' element={<AddReview films={films}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
