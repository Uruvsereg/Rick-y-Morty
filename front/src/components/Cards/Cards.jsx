import style from './Cards.module.css';
import Card from '../Card/Card';

export default function Cards({characters,onClose}) {
   return (
      <div>
         <p></p>
         <div className={style.c}>
            {
               characters.map(({id,name,species,gender,image})=>{
                  return <Card
                  id={id}
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={()=>onClose(id)}
                  />
               })
            }
         </div>
      </div>
   )
}

// class pj extends Cards{
//    constructor(props){
//       super(props)
//       this.state={
//          genero=this.state.gender,
//          raza=this.state.species
//       }
//    }
//    sexo=(this.state.gender)=>{
//       if(this.state.gender=='Male'){
//          return '♂';
//       }
//       if(this.state.gender=='Female'){
//          return '♀';
//       }
//       return '⚧️';
//    }
//    const raza=()=>{
//       switch(this.species){
//          case 'Human':
//             return '웃';
//          break;
//          case 'Alien':
//             return '👽';
//          break;
//          case 'Robot':
//             return '🤖';
//          break;
//       }
//    }
// }