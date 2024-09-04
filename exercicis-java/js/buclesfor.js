//for son estructuras de repeticion de elances, asociando numeros para que posamos saber cuando empieza y cuando termina y en que intervalo de tiempo.
/**For 
 * for(limiti de variavel) siempre a un valor i=0 o sea i desde 0
 * for (expresion1; expresion 2; expresion 3) 
 * 1 es donde inicializa el control
 * 2 cuando vamos dar el break 
 *  3 cuando vamos dar el incremento de control de la variavel
 */
for(i =0; i < 5; i += 1){
    console.log(i);
} // va mostrar 0, 1, 2, 3, 4 y se termina en 4 por sinco ser 5 a 5
//for de 0 a 5
for(i =0; i <= 5; i += 1){
    console.log(i);
    } // va mostrar 0, 1, 2, 3, 4 y 5 por tener el menor igual
/**
 * Ademas permite la declaracion de variables adentro de el
 * Son subtamente mas usados en esta manera, solo existe esta variable adentro de su escopo o sea adentro del ()
 */
for(let i = 0; i < 5; i+=2){
    console.log(i);
}


// El bueno de for es que podemos omitir paramentros también
for(let i = 0; i<5;){ //sin el 3 parametro
    console.log(i); // si dejamos asi sera repitido infinito
    i++; // si no le ponemos el incremento, se repite infinito 
}
console.clear();
//podemos también hacerlo asi
for (;;){
    console.log("Hola");
    break; // si no ponemos break se repite infinito
} // como también podemos adicionar condicion if, else if, else adentro y con un break al fin para que finalize.

//ejemplos: 
//Pedimos que lea 5 numeros y imprime en la consola el mayor de ellos.
//let max = 0;
//let numeroInformado = 0;

/*for(let i = 1; i < 5; i++){
    numeroInformado = parseInt(prompt("Informe um numero"));
    if(numeroInformado > max){
        max = numeroInformado;
    }
}*/
//console.log(`Los numero informados son ${i} y su mayor numero es ${max}`);

console.clear();


//Vamos percorrer Arrys con for

const numerales = [45, 36, 90, 75, 32, 7];
for(let i = 0; i < numerales.length; i++){
    console.log(numerales); // uno mostrara la secuancia completa 5x
    console.log(numerales[i]); // otro mostra por separado 5x un por un
    console.log(i, numerales[i]) // va mostrar la secuacia repetida 5 veces
}

/**
 * For of
 * Sirve para arrays y objetos literales
 * perimitindo que percorra los elementos de un objeto - array type of
 * sy sintaxe:
 * for (const elemento of numeros){
 *       console.log(elemento);
 * }
 * no depende de como llamas la variavel, siempre hay que se atentar a sus elementos de cada objeto.
 *
 */

/**For in
 * percorre los indices de objetos
 * su sintaxis 
 * for (const indice in variavel declarada){
 *      console.log(indice)
 * }
 * su diferencia de of es que no ponemos el elemento y si su indice
 * 
 * para acesarlo usamos indice, typeof, indice
 * num[indice]
 * 
 */