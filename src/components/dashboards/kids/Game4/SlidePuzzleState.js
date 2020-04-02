// Catherine's state management and react custom hook for the react app
// Implementation of our GameState class. Will use it in our custom react hook to power the react app for the game.
// Will find a better code for slide puzzle
// import React, { useEffect } from "react";

// const NUM_ROWS = 4;
// const NUM_COLS = 4;
// const NUM_TILES = NUM_ROWS * NUM_COLS;
// const EMPTY_INDEX = NUM_TILES - 1; // index of the empty tile
// const SHUFFLE_MOVES_RANGE = [60, 80]; // this constant defines the min and max number of random moves we want to execute in order to scramble the puzzle board
// const MOVE_DIRECTIONS = ['up', 'down', 'left', 'right'];

// rand function generates a random integer between min and max. 
// function rand (min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }
// When all the tiles are in the correct order, the bottom-right square, i.e. the 16th square (array index 15) will be the empty one

// This state class should be a singleton because at any point of time there should be only one game running inside the app
// function GameState() {
  // To make the class singleton (single instance), we will define a static property called instance which will hold the reference to the current instance of the class and a static method getInstance which will return the current instance if that exists, otherwise it will create a new instance and return that to us
  //? The most important piece of info, that we are storing, is the state of the puzzle board. Let's model it first.
//   startNewGame.instance = null;

//   startNewGame.getInstance({
//     if (!startNewGame.instance) startNewGame.instance = new startNewGame();
//     return startNewGame.instance;
//   })
// }

/*
 [
  [0, 0], // 1st tile is at 1st row, 1st column
  [0, 1], // 2nd tile is at 1st row, 2nd column
  [0, 2],
  [0, 3], // 4th tile is at 1st row, 4th column
  [1, 0], // 5th tile is at 2nd row, 1st column
  [1, 1],
  ...
  [3, 2],
  [3, 3], // 16th tile is at 4th row, 4th column (this is the empty tile)
]

 function GameState() {
  static getNewBoard () {
    return Array(NUM_TILES).fill(0).map((x, index) => [
      Math.floor(index / NUM_ROWS), 
      index % NUM_COLS
    ]);
  }

  static solvedBoard = GameState.getNewBoard();
}

// a game starts
function GameState {
  const [startNewGame, setStartNewGame] = useState({
    moves: 0,
    board: GameState.getNewBoard(),
    stack: [],
    shuffle() // we are still to define this method, 
                    // let's put a stub in its place for now
  })

  function shuffle() {
    // set a flag that we are to shuffle the board
    shuffling = true;

    // Do some shuffling here ...

    // unset the flag after we are done
    shuffling = false;
  }
}

  function canMoveTile(index) {
    // if the tile index is invalid, we can't move it
    if (index < 0 || index >= NUM_TILES) return false;

    // get the current position of the tile and the empty tile
    const tilePos = board[index];
    const emptyPos = oard[EMPTY_INDEX];

    // if they are in the same row, then difference in their
    // column indices must be 1
    if (tilePos[0] === emptyPos[0])
      return Math.abs(tilePos[1] - emptyPos[1]) === 1;
    // if they are in the same column, then difference in their
    // row indices must be 1
    else if (tilePos[1] === emptyPos[1])
      return Math.abs(tilePos[0] - emptyPos[0]) === 1;
    // otherwise they are not adjacent
    else return false;
  }

  function moveTile(index) {
    // if we are not shuffling, and the board is already solved,
    // then we don't need to move anything
    // Note that, the isSolved method is not defined yet
    // let's stub that to return flase always, for now
    if (!shuffling && isSolved()) return false;

    // if the tile can't be moved in the first place
    if (!canMoveTile(index)) return false;

    // Get the positions of the tile and the empty tile
    const emptyPosition = [...board[EMPTY_INDEX]];
    const tilePosition = [...board[index]];

    // copy the current board and swap the positions
    let boardAfterMove = [...board];
    boardAfterMove[EMPTY_INDEX] = tilePosition;
    boardAfterMove[index] = emptyPosition;

    // update the board, moves counter and the stack
    if (!shuffling) stack.push(board);
      board = boardAfterMove;
    if (!shuffling) moves += 1;

    return true;
  }

  // Tile moving logic
  // Method that will deduce which tiel to move, from the given direction of movement, and move it
  function moveInDirection(dir) {
    // get the position of the empty square
    const epos = board[EMPTY_INDEX];

    // deduce the position of the tile, from the direction
    // if the direction is 'up', we want to move the tile
    // immediately below empty, if direction is 'down', then
    // the tile immediately above empty and so on
    const postToMove =
      dir === "up"
        ? [epos[0] + 1, epos[1]]
        : dir === "down"
        ? [epos[0] - 1, epos[1]]
        : dir === "left"
        ? [epos[0], epos[1] + 1]
        : dir === "right"
        ? [epos[0], epos[1] - 1]
        : epos;

    // find the index of the title currently in postToMove
    let tileToMove = EMPTY_INDEX;
    for (let i = 0; i < NUM_TILES; i++) {
      if (
        board[i][0] === postToMove[0] &&
        board[i][1] === postToMove[1]
      ) {
        tileToMove = i;
        break;
      }
    }

    // move the tile
    moveTile(tileToMove);
  }

  // Method to undo the previous move. Pop the previous state from the stack and restore it. Also, decrement the moves counter
  function undo() {
    if (stack.length === 0) return false;
    board = stack.pop();
    moves -= 1;
  }

  function getState() {
    // inside the object literal, setStartNewGame` will refer to
    // the object we are making, not to the current GameState instance.
    // So, we will store the context of setStartNewGame` in a constant called `self` and use it
    // Another way to do it is to use GameState.instance instead of self
    // that will work, because GameState is a singleton class
    const self = setStartNewGame ({
        board: self.board,
        moves: self.moves,
        solved: self.isSolved()
    })
  }

//? useGameState custom hook - the primary purpose of this Hook is to wrap the GameState instance as a React state, that the React components can use and update like newGame, undo, and move
// Wrap the GameState functionalities in a custom React Hook, so that we can use it in our React app
// In this hook, we want to register event handlers for keypress so that the users can play the puzzle using directional keys of their keyboards generate click handler functions so that users can click tiles to move them
// Also create helper functions to undo  amove and start a new game
// Attach the keyup event handlers to the document obj. Only done once when the app is mounted and the eventhandlers need to be removed when the app is unmounted
// We will expose functions like newGame, undo, and move to the components so that they can trigger state updates when the user wants to start a new game or undo a move or move a specific tile. Absolutedly needed
// Keyboard events will be handled by the listeners attached to the document obj. The components need not have access to those event handlers.
function usePuzzleState() {
  // get the current GameState instance
  const gameState = GameState.getInstance();

  // create a react state from the GameState instance
  const [state, setState] = useState(gameState.getState());

  // start a new game and update the react state
  function newGame() {
    gameState.startNewGame();
    setState(gameState.getState());
  }

  // undo the latest move and update the react state
  function undo() {
    gameState.undo();
    setState(gameState.getState());
  }

  // return a function that will move the i-th tile
  // and update the react state
  function move(i) {
    return function() {
      gameState.moveTile(i);
      setState(gameState.getState());
  } 
 }

 useEffect(() => {
   // attach the keyboard event listeners to document
   document.addEventListener('keyup', function listeners(event) {

     if (event.keyCode === 37) gameState.moveInDirection('left');
     else if (event.keyCode === 38) gameState.moveInDirection('up');
     else if (event.keyCode === 39) gameState.moveInDirection('right');
     else if (event.keyCode === 40) gameState.moveInDirection('down');

     setState(gameState.getState());
   });

   // remove the event listeners when the app unmounts
   return (() => window.removeEventListener())
 }, [gameState]);
 // this effect hook will run only when the GameState instance changes
 // That is, only when the app is mounted and the GameState instance is created

 // expose the state and the update functions for the components
 return [state.board, state.moves, state.solved, newGame, undo, move];
}

export default usePuzzleState;
*/