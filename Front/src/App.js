import './App.css'
import Cards from './components/Cards/Cards';
import NAV from './components/NAV/NAVbar'
import { useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if(characters){
            if(characters.some(character => character.id === data.id)){
              window.alert('El personaje ya está en pantalla');
              return
            }
          }
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <nav>
        <NAV onSearch={onSearch}/>
      </nav>
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App