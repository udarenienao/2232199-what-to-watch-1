import { playerControl } from '../../const';
import PlayerControl from '../player-control/player-control';

type PauseProps = {
  onClick?: () => void;
}

export default function Pause({onClick}: PauseProps):JSX.Element {
  const {className, desc, height, width, xlinkHref} = playerControl.Pause;

  return(
    <PlayerControl
      onClick={onClick}
      className={className}
      desc={desc}
      height={height}
      width={width}
      xlinkHref={xlinkHref}
    />
  );
}
