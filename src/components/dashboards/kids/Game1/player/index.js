import React from 'react';
import Player from '../player/Player'

const IndexPlayer = ({ player1, player2 }) => (
  <div styleName="Challenge">
    <Player {...player1} />
    <span className="vs">vs</span>
    <Player {...player2} />
  </div>
);

export default IndexPlayer;