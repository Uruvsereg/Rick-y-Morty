import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NAV from './components/NAV/NAV.jsx';
import About from './components/About/About.jsx'
import Detalles from './components/Detalles/Detalles.jsx'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';

function App () {
  const location =useLocation();
  const Navigate=useNavigate();
  const [characters, setCharacters]=useState([]);
  const [access, setAccess]=useState(false);

  const username='uruvsereg@hotmail.com';
  const password='Ufmar1726';

  const login=(userData)=>{
    if(userData.username===username && userData.password===password){
      setAccess(true)
      Navigate('/inicio');
    }
  }

  useEffect(()=>{
    !access && Navigate('/')
  },[access,Navigate])
  
  const onSearch=(character)=> {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  const onClose=(id)=>{
    setCharacters(
      characters.filter(character=>character.id !==id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname==='/'?<Form login={login}/>:<NAV onSearch={onSearch}/>}
      <nav onSearch={onSearch}/>
      <Routes>
        <Route path='/inicio' element={
          <div>
            <Cards
             characters={characters}
             onClose={onClose}
            />
          </div>}/>
        <Route path='/favoritos' element={<Favorites/>}/>
        <Route path='/acerca' element={<About/>}/>
        <Route path='/detalles/:detailId' element={<Detalles/>}/>
      </Routes>
    </div>
  )
}

export default App;