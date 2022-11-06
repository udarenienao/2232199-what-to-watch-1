import Tabs from '../tabs/tabs';
import { Film } from '../../types/film';
import {FilmTabs} from '../../types/film-tabs';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';
import {useAppSelector} from '../../hooks';

type FilmDescProps = {
  film: Film;
}

function FilmDescription({film}: FilmDescProps): JSX.Element {
  const currentTab = useAppSelector((state) => state.filmTab);

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab}/>

      {currentTab === FilmTabs.Overview && <FilmOverview film={film} />}
      {currentTab === FilmTabs.Details && <FilmDetails film={film} />}
      {currentTab === FilmTabs.Reviews && <FilmReviews film={film} />}
    </div>
  );
}

export default FilmDescription;
