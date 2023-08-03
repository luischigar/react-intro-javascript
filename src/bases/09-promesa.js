import heroes from "./data/heroes";
import {getHeroeById} from "./08-import";

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // terea
//         const heroe = getHeroeById(2)
//         // console.log(heroe)
//         // resolve(heroe);
//         reject('No se puedo encontrar el heroe')
//     },2000)
// });
//
// promesa.then((heroe)=>{
//     console.log('then de la promesa',heroe);
// }).catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) =>{
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // terea
            const heroe = getHeroeById(id)
            if(heroe!=undefined){
                resolve(heroe);
            }
            reject('No se puedo encontrar el heroe')
        },2000)
    });
    return promesa;
}

getHeroeByIdAsync(1).then(heroe => console.log('Heroe', heroe)).catch(
    err=>console.warn(err)
)