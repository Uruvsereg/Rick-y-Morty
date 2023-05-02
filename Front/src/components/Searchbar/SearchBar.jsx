import style from './Searchbar.module.css';

function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search'/>
         <button onClick={onSearch} className={style.bott}>Agregar</button>
      </div>
   );
} 
export default SearchBar;