function SearchBar({onSearch}) {
   // onSearch=()=>{
   //    fetch(`https://rickandmortyapi.com/api/character/${character}`)
   //    .then((response) => response.json())
   //    .then((data) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('No hay personajes con ese ID');
   //       }
   //    });
   // }
   return (
      <div>
         <input type='search'/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
} 
export default SearchBar;