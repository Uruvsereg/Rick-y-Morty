import style from '../Favorites/favorites.module.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Favorites=()=>{

    const {myFavorites}=useSelector(state=>state)
    
    return(
        <div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                            <div className={style}>
                                <h2>{character.raza()}</h2>
                                <h2>{character.sexo()}</h2>
                            </div>
                            <Link to={`Detalles/${character.id}`}>
                                <div>
                                    <img  src={character.image} alt={character.name} className={style}/>
                                </div>
                            </Link>
                            <div className={style}>
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