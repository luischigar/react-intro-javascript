// desestructuracion
// asignacion desestructurante
const persona = {
    nombre:'Luis',
    edad:28,
    clave:'Ironman',
}
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

const {nombre,clave,edad,} = persona
// console.log(nombre)
// console.log(clave)
// console.log(edad)

const use_Context = ({nombre,clave,edad})=>{
    // console.log(nombre,edad,clave)
    return {
        nombreClave:clave,
        anio:edad,
        latlng:{
            lat:15165,
            lng:46416,
        },
    }
}
const avenger = use_Context(persona);
// console.log((avenger))

const {nombreClave, anio,latlng:{lat,lng}}= use_Context(persona);
console.log(nombreClave, anio)
console.log(nombreClave,anio,lat, lng)

