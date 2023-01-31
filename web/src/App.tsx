import { useState } from 'react'
import './styles/global.css'
import {Habit} from './components/Habit'

const img = 'https://repository-images.githubusercontent.com/589784841/4ca0d44d-589f-4394-9f79-dbfa6c235b03'

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <img src={img}/>
    </div>
  )
}

export default App
