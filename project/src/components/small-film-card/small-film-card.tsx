import {Link} from 'react-router-dom';
import { MouseEvent } from 'react';
import PreviewPlayer from '../preview-player/preview-player';

type SmallFilmCardProps ={
  id: number;
  title: string;
  posterUrl: string;
  isPointed: boolean;
  videoUrl: string;
  hoverHandler: (event: MouseEvent<HTMLDivElement>) => void;
  outHandler: (event: MouseEvent<HTMLDivElement>) => void;
};

function SmallFilmCard({id, title, posterUrl, isPointed, videoUrl, hoverHandler, outHandler}: SmallFilmCardProps): JSX.Element{
  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseOver={hoverHandler}
      onMouseLeave={outHandler}
    >
      <div className='small-film-card__image'>
        {
          isPointed
            ? <PreviewPlayer image={posterUrl} previewVideo={videoUrl}/>
            : <img src={posterUrl} alt={title} width='280' height='175'/>
        }
      </div>
      <h3 className='small-film-card__title'>
        <Link to={`/films/${id}`} className='small-film-card__link'>{title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
