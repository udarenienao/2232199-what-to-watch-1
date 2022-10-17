import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/film';
import {useState} from 'react';

type CatalogProps = {
  films: Film[]
}

function Catalog({ films }: CatalogProps): JSX.Element{
  const [activeCard, setActiveCard] = useState(-1);

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
          hoverHandler={() => changeActiveCard(film.id)}
          outHandler={() => changeActiveCard(-1)}
        />))}
    </div>);
}

export default Catalog;
