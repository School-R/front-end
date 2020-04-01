import React from 'react'

const NUM_ROWS = 4;
const NUM_COLS = 4;
const NUM_TILES = NUM_ROWS * NUM_COLS;
const EMPTY_INDEX = NUM_TILES - 1;
const SHUFFLE_MOVES_RANGE = [60, 80];
const MOVE_DIRECTIONS = ['up', 'down', 'left', 'right'];

function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

class GameState {
    static getNewBoard() {
        return Array(NUM_TILES).fill(0).map((x, index) => [
            Math.floor(index / NUM_ROWS),
            index % NUM_COLS
        ]);
    }

    static solvedBoard = GameState.getNewBoard();
    static instance = null;

    static getInstance() {
        if (!GameState.instance) GameState.instance = new GameState();
        return GameState.instance;
    }

    constructor() {
        this.startNewGame();
    }

    isSolved() {
        for (let i = 0; i < NUM_TILES; i++) {
            if (this.board[i][0] !== GameState.solvedBoard[i][0]
                || this.board[i][1] !== GameState.solvedBoard[i][1])
                return false;
        }
        return true;
    }

    startNewGame() {
        this.moves = 0;
        this.board = GameState.getNewBoard();
        this.stack = [];
        this.shuffle();
    }

    shuffle() {
        this.shuffling = true;
        let shuffleMoves = rand(...SHUFFLE_MOVES_RANGE);
        while (shuffleMoves-- > 0) {
            this.moveInDirection(MOVE_DIRECTIONS[rand(0, 3)]);
        }
        this.shuffling = false;
    }

    canMoveTile(index) {
        if (index < 0 || index >= NUM_TILES) return false;

        const tilePos = this.board[index];
        const emptyPos = this.board[EMPTY_INDEX];
        if (tilePos[0] === emptyPos[0])
            return Math.abs(tilePos[1] - emptyPos[1]) === 1;
        else if (tilePos[1] === emptyPos[1])
            return Math.abs(tilePos[0] - emptyPos[0]) === 1;
        else return false;
    }

    moveTile(index) {
        if (!this.shuffling && this.isSolved()) return false;
        if (!this.canMoveTile(index)) return false;

        const emptyPosition = [...this.board[EMPTY_INDEX]];
        const tilePosition = [...this.board[index]];

        let boardAfterMove = [...this.board];
        boardAfterMove[EMPTY_INDEX] = tilePosition;
        boardAfterMove[index] = emptyPosition;

        if (!this.shuffling) this.stack.push(this.board);
        this.board = boardAfterMove;
        if (!this.shuffling) this.moves += 1;

        return true;
    }

    undo() {
        if (this.stack.length === 0) return false;
        this.board = this.stack.pop();
        this.moves -= 1;
    }

    moveInDirection(dir) {
        const epos = this.board[EMPTY_INDEX];
        const posToMove = dir === 'up' ? [epos[0] + 1, epos[1]]
            : dir === 'down' ? [epos[0] - 1, epos[1]]
                : dir === 'left' ? [epos[0], epos[1] + 1]
                    : dir === 'right' ? [epos[0], epos[1] - 1]
                        : epos;
        let tileToMove = EMPTY_INDEX;
        for (let i = 0; i < NUM_TILES; i++) {
            if (this.board[i][0] === posToMove[0] && this.board[i][1] === posToMove[1]) {
                tileToMove = i;
                break;
            }
        }
        this.moveTile(tileToMove);
    }

    getState() {
        const self = this;
        return {
            board: self.board,
            moves: self.moves,
            solved: self.isSolved(),
        };
    }
}



function usePuzzleState() {
    // get the current GameState instance
    const gameState = GameState.getInstance();

    // create a react state from the GameState instance
    const [state, setState] = React.useState(gameState.getState());

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
        return function () {
            gameState.moveTile(i);
            setState(gameState.getState());
        }
    }

    React.useEffect(() => {
        // attach the keyboard event listeners to document
        document.addEventListener('keyup', function listeners(event) {

            if (event.keyCode === 37) gameState.moveInDirection('left');
            else if (event.keyCode === 38) gameState.moveInDirection('up');
            else if (event.keyCode === 39) gameState.moveInDirection('right');
            else if (event.keyCode === 40) gameState.moveInDirection('down');

            setState(gameState.getState());
        });

        // remove the evant listeners when the app unmounts
        return (() => window.removeEventListener(listeners));
    }, [gameState]);
    // this effect hook will run only when the GameState instance changes.
    // That is, only when the app is mounted and the GameState instance
    // is created

    // expose the state and the update functions for the components 
    return [state.board, state.moves, state.solved, newGame, undo, move];
}

export default usePuzzleState;