import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import CardSection from './components/CardsSection/CardsSection'
import GameProvider from './context/gameProvider';
import BoardHeader from './components/BoardHeader/BoardHeader';
import Board from './components/Board/Board';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <GameProvider>
        <CardSection/>
        <BoardHeader/>
        <Board/>
      </GameProvider>
    </>
  )
}

export default App
