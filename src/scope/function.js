//Cómo acceder a una variable dentro de una función
function greeting(){
    let userName = 'Ana';
    console.log(userName);
    
    if(userName === 'Ana'){
        console.log(`Hello, ${userName}`);
    }

}

greeting();

//Referenciando una variable en un scope dentro de una función:
console.log(userName); 