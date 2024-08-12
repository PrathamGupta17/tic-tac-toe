import { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0; i<win.length; i++) {
      const [a, b, c] = win[i];
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  }
  const handleClick = (index: number)=> {
    const stateCopy = [...state];
    if(stateCopy[index] !== null || checkWinner(stateCopy)) {
      return;
    }

    stateCopy[index] = currentPlayer;
    setState(stateCopy);

    const win = checkWinner(stateCopy);
    if(win){
      alert(`${currentPlayer} won the game`);
      return;
    }
    const draw = stateCopy.every((ele) => ele !== null);
    if(draw) {
      alert('Match Draw');
      handleReset();
      return;
    }
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const handleReset = () => {
    setState(Array(9).fill(null));
  }

  return (
    <div className="board">
        <div className="row">
          <Block onclick={ () => handleClick(0)} value={state[0]} />
          <Block onclick={ () => handleClick(1)} value={state[1]} />
          <Block onclick={ () => handleClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onclick={ () => handleClick(3)} value={state[3]} />
          <Block onclick={ () => handleClick(4)} value={state[4]} />
          <Block onclick={ () => handleClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onclick={ () => handleClick(6)} value={state[6]} />
          <Block onclick={ () => handleClick(7)} value={state[7]} />
          <Block onclick={ () => handleClick(8)} value={state[8]} />
        </div>
        <button className='Reset-Btn' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
