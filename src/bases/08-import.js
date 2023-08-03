// import {heroes} from "./data/heroes"
// import {heroes} from "./data/heroes";
// exportacion por defecto
// import heroes,{owner} from "../data/heroes";
import heroes from "../data/heroes";
// console.log(owner)
export const getHeroeById = (id)=>{
    return heroes.find((heroe) => heroe.id ===id);
}
// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) =>heroes.filter(heroe=>heroe.owner === owner);
// console.log(getHeroesByOwner('DC'))
