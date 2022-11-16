import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';

function Catalog(): JSX.Element{
  const [activeCard, setActiveCard] = useState(-1);
  const films = useAppSelector((state) => state.shownFilms);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <div className='catalog__films-list'>
      {films.map((film) => (
        <SmallFilmCard
          key={film.title}
          id={film.id}
          title={film.title}
          posterUrl={film.posterUrl}
          isPointed={activeCard === film.id}
          videoUrl={film.videoUrl}
          hoverHandler={() => changeActiveCard(film.id)}
          outHandler={() => changeActiveCard(-1)}
        />))}
    </div>);
}

export default Catalog;
