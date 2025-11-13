import { useState } from 'react'
import './App.css'

function App() {
    function Square({value}) {
        // const [value, setValue] = useState(null);
        //
        function Square({value, onSquareClick}) {
            return <button className="square" onClick={onSquareClick}>{ value }</button>
        }
    }
    function Board() {
        const [squares, setSquares] = useState(Array(9).fill(null));

        function handleClick() {
            const nextSquares = squares.click();
            nextSquares[0] = "X"
            setSquares(nextSquares);
        }
        return (
            <div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={handleClick()} />
                    <Square value={squares[1]} />
                    <Square value={squares[2]} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} />
                    <Square value={squares[4]} />
                    <Square value={squares[5]} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} />
                    <Square value={squares[7]} />
                    <Square value={squares[8]} />
                </div>
            </div>
        )
    }

    return (
        <>
            <Board />
        </>
    )
}

export default App
