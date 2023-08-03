
const persona = {
    nombre:'Luis',
    apellido: 'Chichanda',
    edad:28,
    direccion:{
        ciudad:'quito',
        zip:64654,
        lat:545,
        lag:65465,
    },
};
// console.table(persona)

// modifica el objeto principal
// const persona2 = persona;
// persona2.nombre = 'Peter';
// console.log(persona)
// console.log(persona2)

// crear un nuevo objeto
const persona2 = {...persona};
persona2.nombre = 'peter';
console.log(persona)
console.log(persona2)