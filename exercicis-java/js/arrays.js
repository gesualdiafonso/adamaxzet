/**Arrays o matrices 
 * usado spara armazenar datos, variaveis, valores en un solo lugar.
 * No tiene propiedad, sus itens son en contate.
 * Se crean con [], y se separan por comas. Además se valida por posicion de 0 a cuantos datos ingrese.
 * Ejemplo:
 * Voy a supermercado y tengo una lista de cosas a comprar:
 *  - Leche
 *  - Pan
 *  - Huevos
 *  - Arroz
 *  - Agua
 *  - Jugo
 *  - Café
 *  - Azucar
 * practicamente es una lista de cosas que van desde su punto 0 - leche hacia el punto 7 que es azucar.
 * Pasando a codigo:
 */
const listaDeCompras = [
  "leche",
  "pan",
  "huevos",
  "arroz",
  "agua",
  "jugo",
  "café",
  "azucar",
]; //esta es la validación de nuestro arrays.
console.log(listaDeCompras);
console.log(listaDeCompras[0]); //imprime el primer elemento de la lista
console.log(listaDeCompras.length); //imprime la cantidad de elementos que tiene el array.
console.log(listaDeCompras[listaDeCompras.length - 1]); //imprime el ultimo elemento de la lista
// Caso queremos cambiar el valor ejemplo cambiar jugo por coca
listaDeCompras[5] = "coca";
console.log(listaDeCompras[5]); // va imprimir coca ya que cambiamos el jugo por coca
//Y se quiseramos adicionar dado
listaDeCompras.push("papel"); //adiciona un elemento al final del array
console.log(listaDeCompras); //va nos dar 9 iteins a mas. (leche, pan, huevos, arroz, agua, coca, azucar, papel)
//Y se ahora queremos validar si la matriz es o no una matriz
console.log(Array.isArray(listaDeCompras)); //nos retornará true porque es una matriz.
//Y se ahora queremos validar si la matriz es o no una matriz
console.log(listaDeCompras instanceof Array); //nos retornará true porque es una matriz.
//ambos los metodos se valida la matriz.

console.clear();

/**Passamos a los metodos de Arrays 
 *Los metodos son la funcion de una array que dentro de ella se encuentra la funcion que se va a ejecutar.
 * Es como decirnos a array que queremos hacer.
 * Ejemplo: passamos datos a una secuencia incorrecta de numeros: 30, 75, 10, 1, 5, 100, 25, 45, 95 y 105.
 * 
 */
const num = [ 30, 75, 10, 1, 5, 100, 25, 45, 95, 105];
console.log(num);

//Adicion------------------------------------
//Queremos hacer una adicion de mas 2 numeros al final de la lista.
num.push(2, 3); //adiciona 2 elementos al final de la lista
console.log(num); //Nos retorna los 2 numeros a la lista siendo 12 itens pero con 11 posiciones.
//Hagamos mas 3 adiciones.
num.push(5, 80, 95); //adiciona 3 elementos al final de la lista teniendo 15 itens pero con 14 posiciones.
//Ahora queremos adicionar otro elemento a lista pero en comiezo de la lista.
num.unshift(35); //adiciona 1 elemento al inicio de la lista.

//Delet-----------------------------------
// Pero esta lista esta enorme 15 itens y no queremos que sean 15 itens.
// Para eso usamos el metodo pop.
num.pop(); //elimina el ultimo elemento de la lista.
//Supiera que no era solo el ultimo que queria sacarlo pero tambien el primero
num.shift(); //elimina el primer elemento de la lista.

//Ahora queremos buscar un elemento especifico en la lista
//consultamos si el 20 existe
console.log(num.includes(20)); //nos va tomar como false que no existe
console.log(num.includes(80)); //nos va dar true que si existe
//Con el metodo includes podemos decir si existe el numero 20 nos mostra si no no, como en un bucle.

//Buscamos el indice de un elemento en la lista
console.log(num.indexOf(80)); //va mostrar el 13 porque es lo ultimo elemento de la lista.
//Y si queremos saber en que posicion esta el elemento.

//Ahora vamos a los metods de cortar los elementos.
//Vamos a cortar desde el indice 2 hasta el indice 4.
console.log(num.slice(2, 5)); //nos va mostrar el 10, 1, 5
console.log(num.slice(2, 13)); //nos va mostrar el 10, 1, 5, 100, 25, 45, 95, 105, 2, 3, 5

//Tenemos el metodo Join que va cambiar la lista o su espacio cuando la imprimimos en html y sera una cadena de texto. 
// se escribe num.jois (', ')
console.log(num.join(' - '));

//Splice----------------
//Es un mtodo de adicion multiples valores
//gregamos mas 4 numeros
num.splice(105, 200, 300, 150);
console.log(num);
console.log(num.join(" - "));

console.clear();
//Pasamos a una contatenacion de varios valores
const persona = [
  "Carlos",
  "Garcia",
  30,
  1.80,
  "Soltero",
  "Ingeniero",
  "Programador",
  true
]; //Tenemos nuestro array 1
const cursos = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "PHP",
  "Ruby"
] // tenemos nuestro array 2
const datos = [...persona, ...cursos]; //con el operador de propagacion podemos ir agregando valores 
console.log(datos);
//Podemos también usar concact
const datos2 = persona.concat(cursos);
console.log(datos2);

//Sepas que todo las concatenación de arrays debe tener una nueva variable para armazenar la variable anterior.

//Ordenemos el curso por ordenes alfabetica.
const alfabetico = cursos.sort();
console.log(alfabetico); //Asi ponemos en orden alfabetica los elementos de curso.
//Si queremos ordenar de manera inversa
const inverso = cursos.sort().reverse();
console.log(inverso); 

//Si queremos ordenar de manera numerica pegamos nuestra variavel num para que sepas
const ordenNumerico = num.sort((a, b) => a - b); //aca tenemos una funcion corta o la que es explicada de arrow function
/**
 * practicamente quedaria 
 * const ordeNumerico = num.sort(function(a, b){
 *    return a - b
 * });
 */
console.log(ordenNumerico);
//Si queremos ordenar de manera inversa los numeros
const ordenInversaNum = num.sort((a,b) => b - a);
console.log(ordenInversaNum); // cambiamos el a por el b y seguimos con el arrow fuction
//Para numeros maximos y minimos
//Maximos
const maximo = Math.max(...num);
console.log(maximo);
// O podemos hacer así también:
const maximo2 = Math.max.apply(null, num);
console.log(maximo2);
//O usando function
function maxNum (array){
  return Math.max.apply(null, array);
};
console.log(maxNum(num)); //Asi aplica el 300 como el maximo
//Minimos
const minimo = Math.min(...num);
console.log(minimo);
//O podemos hacer así también:
const minimo2 = Math.min.apply(null, num);
console.log(minimo2);
//O usando function
function minNum (array){
  return Math.min.apply(null, array);
  };
  console.log(minNum(num)); //Asi aplica el 1 como el minimo

  //Filtrage --------
  //Si queremos saber cuantos elementos de la variable cursos tienen la letra "a"
  const cursosA = cursos.filter(curso => curso.includes("a"));
  console.log(cursosA);
  //Si queremos saber cuantos elementos de la variable cursos no tienen la letra "c"
  const cursosNoC = cursos.filter(curso => !curso.includes("c"));
  console.log(cursosNoC);
// de modelo en funcion
function cursosFiltrados (array, letra){
  return array.filter(curso => curso.includes(letra));
  };
  console.log(cursosFiltrados(cursos, "a"));
  console.log(cursosFiltrados(cursos, "c"));
  //en funcion de los que no tiene la letra "a"
  function cursosFiltradosNo (array, letra){
    return array.filter(curso => !curso.includes(letra));
    };
    console.log(cursosFiltradosNo(cursos, "a"));

// Map
//Si queremos saber el nombre de cada curso
const nombresCursos = cursos.map(curso => curso);
console.log(nombresCursos);
//Si queremos saber el nombre de cada curso con la letra "a"
const nombresCursosA = cursos.map(curso => curso.includes("a"));
console.log(nombresCursosA); //va retonar true e false
//Si queremos saber el nombre de cada curso con la letra "a" y que sea mayor 
const nombresCursosAMayor = cursos.map(curso => curso.includes("a") && curso.length > 5);
console.log(nombresCursosAMayor); //va retonar false para todos menos a javascript por que tiene mas de 5 caracteres.
//Si queremos saber el nombre de cada curso con la letra "a" y que sea menor
const nombresCursosAMenor = cursos.map(curso => curso.includes("a") && curso.length < 4);
console.log(nombresCursosAMenor); //va retonar false para todos
//Si queremos saber el nombre de cada curso con la letra "a" y que sea igual
const nombresCursosAEs = cursos.map(curso => curso.includes("a") && curso.length === 5);
console.log(nombresCursosAEs); //va retonar false para todos

