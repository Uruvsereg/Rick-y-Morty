import style from './Searchbar.module.css';
import { useState } from 'react';

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   
   const handleKeyPress = (event) => {
      if(event.key === "Enter"){
        onSearch(character)
        setCharacter("")
      }
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} onKeyDown={handleKeyPress} className={style.bar}/>
         <button onClick={() => onSearch (character)} className={style.bott}>Agregar</button>
      </div>
   );
} 
export default SearchBar;