import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus} from '../../store/film-data/selectors';
import Loading from '../loading/loading';
import {fetchFilmByID} from '../../store/api-actions';
import VideoPlayer from '../../components/video-player/video-player';
import FullScreen from '../../components/player-control/full-screen';
import Pause from '../../components/player-control/pause';
import Play from '../../components/player-control/play';

function Player(): JSX.Element{
  const [isPlay, setIsPlay] = useState(true);
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  if (isFilmLoadingStatus) {
    return <Loading />;
  }

  if (!isFilmFoundStatus) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <div className='player'>

      <VideoPlayer
        poster={film?.backgroundImage || ''}
        src={film?.videoLink || ''}
        isMute={false}
        isPlay={isPlay}
      />

      <Link
        to={`/films/${id}`}
        className='player__exit'
        onClick={() => navigate(-1)}
      >
        Exit
      </Link>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{left: '30%'}}>Toggler</div>
          </div>
          <div className='player__time-value'>{film.runTime}</div>
        </div>

        <div className='player__controls-row'>
          {
            isPlay
              ? <Pause onClick={() => setIsPlay(false)}/>
              : <Play onClick={() => setIsPlay(true)}/>
          }
          <div className='player__name'>Transpotting</div>

          <FullScreen/>
        </div>
      </div>
    </div>
  );
}

export default Player;
