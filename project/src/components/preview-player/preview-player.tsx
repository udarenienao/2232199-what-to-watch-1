import {useEffect, useRef} from 'react';

const TIME_TO_TIMEOUT = 1000;

type PreviewPlayerProps = {
  image: string,
  previewVideo: string,
};

function PreviewPlayer ({image, previewVideo}: PreviewPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      TIME_TO_TIMEOUT);

    return () => clearTimeout(delay);
  });

  return (
    <video
      ref={videoRef}
      poster={image}
      width="280"
      height="175"
      loop muted
    >
      <source src={previewVideo} type="video/mp4" />
    </video>
  );
}

export default PreviewPlayer;
