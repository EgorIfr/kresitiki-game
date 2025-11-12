import { useState } from 'react'
import './App.css'

function App() {
    function Square({ value }) {
        const [value, setValue] = useState(null);

        function handleClick() {
            console.log('Клик!')
        }

        return <button className="square" onClick={handleClick}>{ value }</button>
    }
    function Board() {
        return (
            <div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
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
