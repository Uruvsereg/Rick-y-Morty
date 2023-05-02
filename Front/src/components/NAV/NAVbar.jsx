import style from './NAVbar.module.css';
import SearchBar from "./Searchbar/SearchBar"

function NAV(){
    return(
        <div className={style.navb}>
            <div className={style.per}>
                <button>Inicio</button>
                <button>Favoritos</button>
            </div>
            <div>
                <SearchBar
                onSearch={(characterID) => alert(characterID)}
                />
            </div>
            <div className={style.ap}>
                <button>Acerca de</button>
                <button>Salir</button>
            </div>
        </div>
    )
}
 export default NAV