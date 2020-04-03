import React from 'react';

const Results = ({
  winner,
  player1Label,
  player2Label,
  onClickPlay,
  loading
}) => (
  <div styleName="Result">
    {winner !== null && !loading && (
      <div className="winner">
        <span>
          {winner === 0
            ? "TIE"
            : `${winner === 1 ? player1Label : player2Label} WINS`}
        </span>
      </div>
    )}
    <div className="play">
      <button disabled={loading} onClick={onClickPlay}>
        PLAY {(loading || winner !== null) && "AGAIN"}
      </button>
    </div>
  </div>
);

export default Results