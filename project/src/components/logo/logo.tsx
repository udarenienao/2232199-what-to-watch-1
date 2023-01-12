import {Link} from 'react-router-dom';
import {resetMainScreen} from '../../store/main-data/main-data';
import {useAppDispatch} from '../../hooks';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className='logo'>
      <Link
        className='logo__link'
        to='/'
        onClick={
          () => {
            dispatch(resetMainScreen());
          }
        }
      >
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </Link>
    </div>
  );
}

export default Logo;
