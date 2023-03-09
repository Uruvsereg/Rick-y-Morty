import { useState } from "react";
import style from './formulario.module.css';
import validation from "./validation";

const Form=({login})=>{
    const [userData,setUserData]=useState({ 
        username:'',
        password:''
    });

    const handleInputChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);
    }

    const [errors,setErrors]=useState({
        username:'',
        password:''
    });

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.ing}>
                    <div className={style.loginu}>
                        <label htmlFor='username'>Username:  </label>
                        <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={style.lue}></input>
                        {errors.username && <p className={style.logp}>{errors.username}</p>}
                    </div>
                    <div className={style.loginp}>
                        <label htmlFor='password'> Password:  </label>
                        <input type='password' name='password' value={userData.password} onChange={handleInputChange} className={style.lpe}></input>
                        {errors.password && <p className={style.logp}>{errors.password}</p>}
                    </div>
                </div>
                <div className={style.bot}>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
    )
}
export default Form;

// export default function Form (props){
//     const [userData, setUserData] = useState({
//         username: "",
//         password: "",
//     })

//     const [errors, setErrors] = useState({
//         username: "",
//         password: "",
//     })
//     const handleInputChange = (evento) => {
//         const {name, value} = evento.target;
//         setUserData({
//             ...userData,
//             [name]: value
//         })
//         setErrors(
//             validation({
//                 ...userData,
//                 [name]: value,
//             }
//             )
//         )
//     }

//     const handleSubmit = (evento) => {
//         evento.preventDefault();
//         props.login(userData);
//     }

//     return (
//         <div className={style.formulario}>
//         <form onSubmit={handleSubmit}>
//             <label>Username:</label>
//             <br />
//             <input type="text"
//             name="username"
//             value={userData.username}
//             onChange={handleInputChange}
//             placeholder="Correo Electrónico:"/>
//             {errors.username && <p>{errors.username}</p>}
//             <br/>
//             <label>Password:</label>
//             <br />
//             <input type="password"
//             name="password"
//             value={userData.password}
//             onChange={handleInputChange}
//             placeholder="Contraseña:"/>
//             {errors.password && <p>{errors.password}</p>}
//             <div>
//             <button>Sign in</button>
//             </div>
//         </form>
//         </div>
//     )
// }