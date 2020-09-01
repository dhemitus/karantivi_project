import React from 'react';
import { Player, BigPlayButton } from 'video-react';

export default props => {
  const { poster, url } = props
  return (
    <Player
      playsInline
      poster={poster}
      src={url}
    >
      <BigPlayButton position="center" />
    </Player>
  );
};