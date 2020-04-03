import React from 'react'
import usePuzzleState from '../../components/games/PuzzleState'


function Puzzle() {
    const [board, moves, solved, newGame, undo, move] = usePuzzleState();

    
function Tile({ index, pos, onClick }) {
  const top = pos[0] * 100 + 5;
  const left = pos[1] * 100 + 5;
  const bgLeft = (index % 4) * 100 + 5;
  const bgTop = Math.floor(index / 4) * 100 + 5;

  return (
    <div
      className="tile"
      onClick={onClick}
      style={{ top, left, backgroundPosition: `-${bgLeft}px -${bgTop}px` }}
    />
  );
}


    return (
        <div className='game-container'>
            <div className='game-header'>
                <div className='moves'>
                    {moves}
                </div>
                <button className='big-button' onClick={undo}> UNDO </button>
            </div>
            <div className='board'>
                {
                    board.slice(0, -1).map((pos, index) => (
                        <Tile index={index} pos={pos} onClick={move(index)} />
                    ))
                }
                {solved &&
                    <div className='overlay'>
                        <button className='big-button' onClick={newGame}>
                            PLAY AGAIN
            </button>
                    </div>
                }
            </div>
        </div>
    );
}
export default Puzzle;
