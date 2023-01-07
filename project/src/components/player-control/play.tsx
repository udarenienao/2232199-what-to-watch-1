import { playerControl } from '../../const';
import PlayerControl from '../player-control/player-control';

type PlayProps = {
  onClick?: () => void;
}

export default function Play({onClick}: PlayProps):JSX.Element {
  const {className, desc, height, width, xlinkHref} = playerControl.Play;

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
