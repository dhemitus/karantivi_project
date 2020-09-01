import React from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

export default props => {
  let { url } = props
  return (
    <Player>
      <HLSSource
        isVideoChild
        src={url}
      />
    </Player>
  );
};