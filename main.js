//1
function multiplicar(num){
    if (typeof num == "number") {
        for (let index = 0; index <= 10; index++) {
            console.log(num +  " * " + index + " = " + (num * index));
            
        }
    }
}

multiplicar(parseInt(prompt("ingrese un numero para mostrar la multiplicacion: ")))

//2
function acumulador(){
    let num = parseInt(prompt("ingrese un numeero para empezar a acumular (si desea finalizar ingrese 0)"))
    let total =+ num
    while (num > 0) {
        num = parseInt(prompt("ingrese un numeero para empezar a acumular (si desea finalizar ingrese 0)"))
        total += num
    }
    console.log("la suma total es de ", total);
}
acumulador()

//3

function numeroIncognito(){
    let numIncognito =   Math.round(Math.random(1, 100)*100);
    let numeroElegido = parseInt(prompt("ingrese un numero para adivinar el numero secreto: "))
    let count = 1
    let band = false
    while(band == false){
        if (numIncognito == numeroElegido) {
            band = true
        }else if (numIncognito < numeroElegido) {
            numeroElegido = parseInt(prompt("casi..... el numero secreto es menor de " + numeroElegido + " ingrese otro numero: "))
            count++
        } else {
            numeroElegido = parseInt(prompt("casi..... el numero secreto es mayor a " + numeroElegido + " ingrese otro numero: "))            
            count++
        }
    }
    console.log("adivinar el numero le llevo " + count + " intentos");
}
numeroIncognito()

//4

function numPrimos() {
    let num = parseInt(prompt("ingrese el numero que desa averiguar si es primo"))
    let ban = true
    if (num > 1) {
        for (let index = 2; index < num; index++) {
            if(num % index == 0){
                ban = false
                break
            }
        }
        console.log("el numero " + num + " es primo? " + ban);
    }else{
        console.log("vuelva a ingresar el numero");
    }
}
numPrimos()

//5

function divisores() {
    let num = parseInt(prompt("ingrese el numero para ver sus divisores: "))
    console.log("los numeros divisores de " + num + " son: ");
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
        
    }
}
divisores()

//6
function recorrerArray (array){
    for (let i in array) {
        console.log(array[i]);
    }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
recorrerArray(array)


//7
function mostrarDoble(array){
    for (const num of array) {
        console.log("el doble de " + num + " es: " + (num * 2));
    }
}
mostrarDoble(array)

//8

function recorrerArrayObj(array) {
    for (const obj of array) {
        console.log("hola mi nombre es: " + obj.nombre + " tengo " + obj.edad + " años soy " + obj.relacion + " y mi ocupacion es " +obj.ocupacion);
    }
}

const persona1 = {
    nombre: 'Juan Pérez',
    edad: 45,
    relacion: 'Padre',
    ocupacion: 'Ingeniero'
};

const persona2 = {
    nombre: 'María Gómez',
    edad: 42,
    relacion: 'Madre',
    ocupacion: 'Doctora'
};

const persona3 = {
    nombre: 'Carlos Pérez',
    edad: 18,
    relacion: 'Hijo',
    ocupacion: 'Estudiante'
};

const persona4 = {
    nombre: 'Ana Pérez',
    edad: 16,
    relacion: 'Hija',
    ocupacion: 'Estudiante'
};

const persona5 = {
    nombre: 'Pedro Pérez',
    edad: 70,
    relacion: 'Abuelo',
    ocupacion: 'Jubilado'
};
const familia = [persona1, persona2, persona3, persona4, persona5]
recorrerArrayObj(familia)

//9
function numerosImpares(array) {
    for (const num of array) {
        if(num % 2 != 0){
            console.log("el numero " + num + " es impar");
        }
    }
}
numerosImpares(array)

//10
function sumaImparesPares() {
    let num = parseInt(prompt("ingrese el numero que desa sumar o 0 para finalizar"))
    let sumaPares = 0
    let sumaInpares = 0
    while (num != 0) {
        if (num % 2 == 0) {
            sumaPares += num
        }else{
            sumaInpares += num
        }
        num = parseInt(prompt("ingrese el numero que desa sumar o 0 para finalizar"))
    }
    console.log("la suma de los nueros pares es de: " + sumaPares)
    console.log("la sumas de los numeros impares es de: ", sumaInpares);
}
sumaImparesPares()

//11
function encontrarMayor(array) {
    let mayor = 0
    for (const num of array) {
        if (num > mayor) {
            mayor = num
        }
    }    
    console.log("el numero mayor del array es: ", mayor);
}
encontrarMayor(array)

//12
function encontrarMenor(array) {
    let menor = undefined 
    for (const num of array) {
        if (menor == undefined || num < menor ) {
            menor = num
        }
    }    
    console.log("el numero menor del array es: ", menor);
}
encontrarMenor(array)



//13
function piedraPapelTijera() {
    const nombreJug1 = prompt("ingrese el nombre del jugador 1: ")
    const nombreJug2 = prompt("ingrese el nombre del jugador 2: ")
    let seleccionJug1 = prompt(nombreJug1 + " ingrse piedra papel o tijera ")
    let seleccionJug2 = prompt(nombreJug2 + " ingrse piedra papel o tijera ")
    let ganador = false
    while (!ganador){
        if (seleccionJug1.toLowerCase() == "piedra" && seleccionJug2.toLowerCase() == "tijera") {
            ganador = true
            console.log("el jugador " + nombreJug1 + " gano");
        }else if(seleccionJug1.toLowerCase() == "papel" && seleccionJug2.toLowerCase() == "piedra"){
            ganador = true
            console.log("el jugador " + nombreJug1 + " gano");
        }else if (seleccionJug2.toLowerCase() == "piedra" && seleccionJug1.toLowerCase() == "tijera") {
            ganador = true
            console.log("el jugador " + nombreJug2 + " gano");
        }else if(seleccionJug2.toLowerCase() == "papel" && seleccionJug1.toLowerCase() == "piedra"){
            ganador = true
            console.log("el jugador " + nombreJug2 + " gano");
        }else{
            console.log("empate");
            seleccionJug1 = prompt(nombreJug1 + " ingrse piedra papel o tijera ")
            seleccionJug2 = prompt(nombreJug2 + " ingrse piedra papel o tijera ")
        }
    }
}

piedraPapelTijera()


//14
function trianguloLado() {
    
    for (let i = 0; i < 5; i++) {
        console.log("*".repeat(1 + i));
        
    }

    //triangulo perfecto
    let asterisco = ["*", "* *", "* * *", "* * * *", "* * * * *"]
    for (let i = 0; i < 5; i++) {
        console.log(" ".repeat(5-i) + asterisco[i]);
    }
}

trianguloLado()


//15
function trianguloLadoInvertido() {
    for (let i = 0; i < 5; i++) {
        console.log("*".repeat(5 - i));
        
    }
}
trianguloLadoInvertido()

//16

function acomodarArray(array){
    for(let first = 0; first < (array.length - 1); first++){
        
        for(let i = first; i < (array.length); i++ ){
            if (array[first] > array[i]) {
                const temp = array[first]
                array[first] = array[i]
                array[i] = temp
                }
            }
    }
    console.log(array);
}
let peorCasoArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.time('Tiempo de ejecución');
acomodarArray(peorCasoArray)
console.timeEnd('Tiempo de ejecución');


//intento de marge short modificado
function acomodarArray2(array){
let derecha = array.slice(0, Math.round(array.length / 2))
let izquierda = array.slice(Math.round(array.length / 2), array.length)

for(let cont = 0; cont < (izquierda.length - 1); cont++){
    for(let contBur = cont; contBur < derecha.length; contBur++){
        if(contBur < izquierda.length){
            
            if(izquierda[cont] > izquierda[contBur]){
                const prob = izquierda[cont]
                izquierda[cont] = izquierda[contBur]
                izquierda[contBur] = prob
            }
            if(derecha[cont] > derecha[contBur]){
                const prob = derecha[cont]
                derecha[cont] = derecha[contBur]
                derecha[contBur] = prob
            }
        }
    }
}

if(izquierda[izquierda.length-1] < derecha[0]){
    array = izquierda.concat(derecha)
    console.log(array)
}

}

console.time('Tiempo de ejecución');
acomodarArray2(peorCasoArray)
console.timeEnd('Tiempo de ejecución');

//probando recursividad
function acomodarArrayRecurcivo(array1, array2, pos, sigPos){
    

    if (array1.length > sigPos || array2.length > sigPos) {
        if ((array1.length > sigPos && array1.length > pos) && array1[pos] > array1[sigPos]) {
            const prov = array1[pos]
            array1[pos] = array1[sigPos]
            array1[sigPos] = prov
        }
        if ((array2.length > sigPos && array2.length > pos) &&array2[pos] > array2[sigPos]) {
            const prov = array2[pos]
            array2[pos] = array2[sigPos]
            array2[sigPos] = prov
        }
        return acomodarArrayRecurcivo(array1, array2, pos, sigPos + 1)
    } 
    return {array1, array2}
    
}

function acomodarMain(array) {
    let array1 = array.slice(0, Math.round(array.length / 2))
    let array2 = array.slice(Math.round(array.length / 2), array.length)
    for (let i = 0; i < array2.length; i++) {
        let prov = acomodarArrayRecurcivo(array1, array2, i, i+1)
        array1 = prov.array1
        array2 = prov.array2
    }
    if(array2[array2.length-1] < array1[0]){
        array = array2.concat(array1)
        console.log(array)
    }
}



console.time('Tiempo de ejecución mitad');
acomodarMain(peorCasoArray)
console.timeEnd('Tiempo de ejecución mitad');