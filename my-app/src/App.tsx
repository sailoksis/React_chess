import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';

function App() {
  const [board, setBoard] = useState(new Board())
     
useEffect(effect:() => {
  restart()
}, deps:[])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    setBoard(newBoard)
  }
  return (
    <div className='app'>
     <BoardComponent></BoardComponent>
    </div>
  );
}

export default App;
