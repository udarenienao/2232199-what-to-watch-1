import {SmallFilmCardProps} from './small-film-card-props';

function SmallFilmCard({src, alt, title}: SmallFilmCardProps): JSX.Element{
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={src} alt={alt} width='280' height='175'/>
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>{title}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
