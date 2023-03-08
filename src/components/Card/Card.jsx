import style from './Card.module.css';
import {Link} from 'react-router-dom'

export default function Card({name,species,gender,image,onClose,id}) {
   // sexo=(gender)=>{
   //    if(this.gender=='Male'){
   //       return '♂';
   //    }
   //    if(this.gender=='Female'){
   //       return '♀';
   //    }
   //    return '⚧️';
   // }
   // raza=()=>{
   //    switch(this.species){
   //       case 'Human':
   //          return '웃';
   //       break;
   //       case 'Alien':
   //          return '👽';
   //       break;
   //       case 'Robot':
   //          return '🤖';
   //       break;
   //    }
   // }
   return (
      <div className={style.card}>
         <div className={style.at}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         <Link to={`Detalles/${id}`}>
            <div>
               <img  src={image} alt={name} className={style.im}/>
            </div>
         </Link>
         <div className={style.nom}>
            <h2>{name}</h2>
         </div>
         <div className={style.bc}>
            <button onClick={onClose}>x</button>
         </div>
      </div>
   );
}