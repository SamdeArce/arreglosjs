//Crea una funcion llamada numeroMayor() que tome tres numeros como
//entrada y muestre el numero mayor de ellos,si son iguales devover in String (son iguales)


function numeroMayor(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log('Es menor: ' + num1) 
    }else if(num2 > num3 && num2 > num1){
        console.log('Es mayor: ' + num2)
    }else if(num3 > num1 && num3 > num2){
        console.log('Es mayor: ' + num3)
    }else if(num1 == num2 == num3){
        console.log('Son Iguales')
    }
}

numeroMayor(1, 1, 1)
    


// Es vocal

function isVocal(vocal){
    if(vocal == "a"){
        console.log(true)
    }else if(vocal == "e"){
        console.log(true)
    }else if(vocal == "i"){
        console.log(true)
    }else if(vocal == "o"){
        console.log(true)
    }else if(vocal == "u"){
        console.log(true)
    }else{
        console.log(false)
    }
}

isVocal('m')

//Caracteres

function generarCaracter(n, caracter){
    return caracter.repeat(n);
}

let resultado = generarCaracter(5, 'x');
console.log(resultado);



 

 







