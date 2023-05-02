import './App.css'
import Cards from './components/Cards.jsx'
import NAV from './components/NAV/NAVbar'
import { useState } from 'react'

function App () {
  const [characters, setCharacters]= useState([
    {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    }
  ]);
  const onSearch = (character) =>{
    setCharacters([
      ...character
    ])
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <NAV onSearch={onSearch}/>
      </div>
      <div>
        <Cards characters={characters}/>
      </div>
    </div>
  )
}

export default App
