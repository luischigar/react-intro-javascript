const personajes = ['Goku', 'Vegeta', 'Trunks'];
// const [,,p1]= personajes;
// console.log(p1)

const retornaArreglo = ()=>{
    return['ABC',55];
};
const [a,b] = retornaArreglo();
console.log(a,b)

// tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const use_State = (valor) =>{
    return[valor, ()=>{
        console.log('Hola Mundo');
    }];
};
const [nombre, setNombre] = use_State('goku');
console.log(nombre)
setNombre()