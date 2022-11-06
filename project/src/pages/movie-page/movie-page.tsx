import React from 'react';

import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import {Film} from '../../types/film';
import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import FilmDescription from '../../components/film-description/film-description';


type MoviePageProps = {
  films: Film[]
};

function MoviePage({ films }: MoviePageProps): JSX.Element{
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);

  if (!film) {
    return <Navigate to={'/*'}/>;
  }

  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundUrl} alt={film.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <Link to='/login' className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${id}`}
                  className='btn btn--play film-card__button'
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className='btn btn--list film-card__button'
                  to={'/mylist'}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterUrl} alt={film.title}
                width="218" height="327"
              />
            </div>
            <FilmDescription film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog/>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;

