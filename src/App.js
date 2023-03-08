import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NAV from './components/NAV/NAV.jsx';
import About from './components/About/About.jsx'
import Detalles from './components/Detalles/Detalles.jsx'
import { useState } from 'react';
import { Routes, Route, UseLocation } from 'react-router-dom';

function App () {
  const [characters, setCharacters]=useState([]);
  const location =useLocation();
  
  const onSearch=(characte)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.name){
        setCharacters((oldChars)=>[...oldChars,data]);
      }
      else{
        alert('No hay personaje con ese ID');
      }
    })
  }
  const onClose=(id)=>{
    setCharacters(
      characters.filter(character=>character.id !==id)
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname='/'?<Form/>:<NAV on search={onSearch}/>}
      <nav onSearch={onSearch}/>
      <Routes>
        <div>
          <Cards
            characters={characters}
          />
        </div>
        <Route path='/inicio' element={}/>
        <Route path='/acerca' element={<About/>}/>
        <Route path='/detalles/:detailId' element={<Detalles/>}/>
      </Routes>
    </div>
  )
}

export default App
