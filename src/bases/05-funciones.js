
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

// console.log(saludar('Goku'))

// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }
// console.log(saludar('goku'))

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) =>`Hola, ${nombre}`;
const saludar4 = ()=>'Hola Mundo';
console.log(saludar2('vegeta'))
console.log(saludar3('goku'))
console.log(saludar4())

const  getUser = ()=>(
    {
        uid:5665,
        nombre:'Luis'
    }
);
const user = getUser();
console.log(user)

// tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito
// 3. pruebas
const getUsuario = (nombre)=>(
    {
        uid:'a456',
        username:nombre,
    })
const usuarioActivo = getUsuario('Luis');
console.log(usuarioActivo)