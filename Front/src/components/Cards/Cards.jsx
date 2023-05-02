import style from './Cards.module.css'
import Card from '../Card/Card';

const Cards = ({characters, onClose}) =>{
   return (
      <div className={style.cont}>
         {
            characters.map(({id,name,species,gender,image}) =>{
               return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
               />
            })
         }
      </div>
   )
}

export default Cards