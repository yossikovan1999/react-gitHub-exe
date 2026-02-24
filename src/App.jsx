import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import CardSection from './components/CardsSection/CardsSection'
import GameProvider from './context/gameProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <GameProvider>
        <CardSection/>
      </GameProvider>
    </>
  )
}

export default App
