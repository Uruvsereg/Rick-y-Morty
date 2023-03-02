import style from './Cards.module.css';
import Card from '../Card/Card';

export default function Cards({characters}) {
   // sexo=({this.charcters.gender})=>{
   //    if(this.gender=='Male'){
   //       return '♂';
   //    }
   //    if(this.gender=='Female'){
   //       return '♀';
   //    }
   //    return '⚧️';
   // }
   return (
      <div className={style.c}>
         {
            characters.map(({id,name,species,gender,image})=>{
               return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={()=>window.alert('Emulamos que se cierra la card')}
               />
            })
         }
      </div>
   )
}
