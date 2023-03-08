import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import style from './Detalles.module.css';

const Detalles=()=>{
    const [character, setCharacter]=useState({});
    const {detailId}=useParams();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={style.bg}>
            <div>
                <h1>DETALLES:</h1>
                <div>NOMBRE: {character.name}</div>
                <div>ESPECIE: {character.species}</div>
                <img className={style.img} src={character.image} alt={character.name} />
                <div>SEXO: {character.gender}</div>
                <div>Estatus: {character.status}</div>
                <div>ORIGEN: {character.origin?.name}</div>
            </div>
        </div>
    )
}
export default Detalles;