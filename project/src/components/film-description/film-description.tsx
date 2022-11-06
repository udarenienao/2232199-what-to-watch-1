import Tabs from '../tabs/tabs';
import { Film } from '../../types/film';
import { useState } from 'react';
import {FilmTabs} from '../../types/film-tabs';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';

type FilmDescProps = {
  film: Film;
}

function FilmDescription({film}: FilmDescProps): JSX.Element {
  const [pageTab, setPageTab] = useState<string>(FilmTabs.Overview);

  return (
    <div className="film-card__desc">
      <Tabs
        currentTab={pageTab}
        updateTab={(tabName: string) => {
          setPageTab(tabName);
        }}
      />

      {pageTab === FilmTabs.Overview && <FilmOverview film={film} />}
      {pageTab === FilmTabs.Details && <FilmDetails film={film} />}
      {pageTab === FilmTabs.Reviews && <FilmReviews film={film} />}
    </div>
  );
}

export default FilmDescription;
