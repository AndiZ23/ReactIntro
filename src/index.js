import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component { // Square informs the Board when it's clicked, and receive the value from Board.
//
//     render() {
//         return (        // when a square is clicked, Board's onclick function is called.
//             <button className="square"
//                     onClick={()=> this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// Turn Square Component to a function --> function component
//   don't have to worry about `this` in function components
function Square(props) { // Square informs the Board when it's clicked, and receive the value from Board.
    return( // when a square is clicked, Board's onclick function is called.
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component { // Board keeps all the state and will determine the winner
    constructor(props) {
        super(props); // need to always call `super` when defining the constructor of a subclass.
                        // therefore, ALWAYS start with a `super(props)` call in React component classes' constructor.
        this.state = {  // React component has `state`. Initialize it in the constructor.
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();  // immutability: allows it jump back to previous states.
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}/>
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
