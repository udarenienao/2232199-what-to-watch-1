import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllGenres} from '../../utils/genre';
import {changeGenre} from '../../store/action';
import {MouseEvent, useState} from 'react';
import {DEFAULT_GENRE} from '../../types/genres';

function GenresFilter(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);

  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films);
  const genres = getAllGenres(films);

  const handleChangeGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    setCurrentGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <a
            href="/project/src/pages"
            className="catalog__genres-link"
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>))}
    </ul>
  );
}

export default GenresFilter;
