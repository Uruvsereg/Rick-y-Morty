import { ADD_FAVORITE,DELETE_FAVORITE } from "./action-types";

export const agregar=(character)=>{
    return {type:ADD_FAVORITE, payload: character}
}
export const eleminar=(id)=>{
    return{type:DELETE_FAVORITE, payload: id}
}