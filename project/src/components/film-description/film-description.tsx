import {FilmTabs} from '../../types/film-tabs';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';
import {useAppSelector} from '../../hooks';
import {getComments, getFilm, getFilmPageTab} from '../../store/film-data/selectors';
import Tabs from '../tabs/tabs';
import {Navigate} from 'react-router-dom';

function FilmDescription(): JSX.Element {
  const currentTab = useAppSelector(getFilmPageTab);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab}/>

      {currentTab === FilmTabs.Overview && <FilmOverview film={film} />}
      {currentTab === FilmTabs.Details && <FilmDetails film={film} />}
      {currentTab === FilmTabs.Reviews && <FilmReviews reviews={comments} />}
    </div>
  );
}

export default FilmDescription;
