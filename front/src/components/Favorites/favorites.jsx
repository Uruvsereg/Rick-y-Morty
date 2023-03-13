import style from '../Favorites/favorites.module.css';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { orderCards,filterCards } from '../../redux/actions';

const Favorites=()=>{
    const {myFavorites}=useSelector(state=>state)
    const dispatch=useDispatch();

    const handlerOrder=(event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }
    
    return(
        <div>
            <p></p>
            <div>
                <select onChange={handlerOrder}>
                    <option value='order' disabled='disabled'>Orden por</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Filtrado por</option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                    <option value="Unknown">Desconocido</option>
                    <option value="Genderless">Sin género</option>
                </select>
            </div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div className={style.card}>
                            <div className={style.at}>
                                <h2>{character.species}</h2>
                                <h2>{character.gender}</h2>
                            </div>
                            <Link to={`/detalles/${character.id}`}>
                                <div>
                                    <img  src={character.image} alt={character.name} className={style.im}/>
                                </div>
                            </Link>
                            <div className={style.nom}>
                                <h2>{character.name}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;