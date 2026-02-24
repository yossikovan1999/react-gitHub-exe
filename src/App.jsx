import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import CardSection from './components/CardsSection/CardsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CardSection/>
    </>
  )
}

export default App
