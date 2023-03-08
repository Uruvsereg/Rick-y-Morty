import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import style from '../NAV/NAV.module.css';

const NAV=({onSearch})=>{
    return(
        <nav>
            <div className={style.n}>
                <button><Link to='/inicio'>Inicio</Link></button>
                <button><Link to='/acerca'>Acerca de</Link></button>
                <SearchBar onSearch={onSearch}/>
                <button><Link to='/'>Salir</Link></button>
            </div>
        </nav>
    )
}
export default NAV;