import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import CardSection from './components/CardsSection/CardsSection'
import GameProvider from './context/gameProvider';
import BoardHeader from './components/BoardHeader/BoardHeader';
import Board from './components/Board/Board';

function App() {
  
  const [key, setKey] = useState(0);

  function handleRestart(){
    setKey((prev)=>prev+1)
  }

  return (
    <>
      <Header/>
      <GameProvider key={key}>
        <CardSection/>
        <BoardHeader/>
        <Board/>
      </GameProvider>
      <div className='restart-btn-section'>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </>
  )
}

export default App
