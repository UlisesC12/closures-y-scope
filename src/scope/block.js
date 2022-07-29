//Block scope introducito en ES6+
//Significa que las variables definidas dentro de un bloque 
//solo pueden ser utilizadas dentro de ese bloque

function fruits(){
    if(true){
        var fruit = 'Apple'; //Function Scope
        let fruit2 = 'Kiwi'; //Block Scope
        const fruit3 = 'Banana'; //Block Scope
        console.log(fruit);
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit2);
}

fruits();

