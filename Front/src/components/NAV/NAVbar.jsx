import SearchBar from "./Searchbar/SearchBar"

function NAV(){
    return(
        <div>
            <div>
                <button></button>
                <button></button>
            </div>
            <div>
                <SearchBar
                onSearch={(characterID) => alert(characterID)}
                />
            </div>
            <div>
                <button>Acerca de</button>
                <button>Salir</button>
            </div>
        </div>
    )
}
 export default NAV