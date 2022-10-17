import React from 'react';

import Footer from '../../components/footer/footer';
import {Film} from '../../types/film';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';

type MainProps = {
    promoMovie: Film;
    films: Film[];
}

function Main({ promoMovie, films } : MainProps): JSX.Element{
  return (
    <React.Fragment>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={promoMovie.backgroundUrl} alt={promoMovie.title}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo/>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
              </div>
            </li>
            <li className='user-block__item'>
              <Link to='/login' className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={promoMovie.posterUrl} alt={promoMovie.title}
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{promoMovie.title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{promoMovie.genre}</span>
                <span className='film-card__year'>{promoMovie.releaseDate}</span>
              </p>

              <div className='film-card__buttons'>
                <Link
                  to={`/player/${promoMovie.id}`}
                  className='btn btn--play film-card__button'
                  type='button'
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className='btn btn--list film-card__button'
                  type='button'
                  to={'/mylist'}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>All genres</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Comedies</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Crime</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Documentary</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Dramas</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Horror</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Kids & Family</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Romance</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Sci-Fi</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Thrillers</a>
            </li>
          </ul>

          <Catalog films={films}/>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Main;
