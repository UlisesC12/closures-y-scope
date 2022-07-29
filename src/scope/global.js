// Variables

var a; //Declaración de la variabe nobrada "a"

//Normalmente declaramos y asignamos al mismo tiempo
var b = 'b';

//También podemo reasignar una variable existente y re-declarar variables
//Trabajando con las variable previamente declaradas:
b = 'bb'; //re-asignación
var a = 'aa'; //re-declaración

//Global Scope
//Cualquier variable en el documento pasará a ser variable global.

//Esto nos dice que las variables deben de estar declaradas dentro del
//documento pero no dentro de un bloque para que estén dentro
//del Global Scope y puedan ser utilizadas dentro de otros bloques
//Ejemplo:
var fruit = 'Apple'; //Variable asiganada en global scope

//Leyendo el valor directamente desde un console.log
console.log(fruit);

//Leyendo la variable desde dentro de una función
function bestfruit(){
    console.log(fruit);
}

bestfruit(); //Mandando a llamar nuestra funcion

//Tener cuidado al momento de declarar
function countries(){
    country = 'Colombia'; // No se define el scope y se toma como Global
    console.log(country);
}
//Por lo tanto se imprime dos veces la palabra 'Colombia'
countries();
console.log(country);

