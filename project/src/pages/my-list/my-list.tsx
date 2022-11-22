import React from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

function MyList(): JSX.Element{
  const films = useAppSelector((state) => state.filteredFilms);
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo/>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
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

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <Catalog films={ films }/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
