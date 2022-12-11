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
import Loading from '../../pages/loading/loading';
import {isCheckedAuth} from '../../utils/check-auth';
import {useAppSelector} from '../../hooks';


type AppProps = {
  films: Film[];
}

function App({ films }: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main promoMovie={films[0]}/>} />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<MoviePage/>}/>
          <Route path='player/:id' element={<Player films={films}/>}/>
          <Route path='films/:id/review' element={<AddReview/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
