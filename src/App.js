import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NAV from './components/NAV/NAV.jsx';
import { useState } from 'react';

function App () {
  const [characters, setCaracters]=useState([]);
  const onSearch=()=>{

  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <nav onSearch={onSearch}/>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
