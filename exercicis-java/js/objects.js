// Objetos o Oject Literal
/** Son estructuras de datos que nos permiten almacenar datos, y poder acceder a ellos.
 * Muy usados en Typescript
 * Por lo tanto es un tipo de dato compuesto. Cual son valores que es llamada y reconocida como PROPIEDADES.
 * Adentro de ellos vamos tener metodos y los metodos son funciones que se ejecutan dentro de un objeto.
 * Los objetos se crean con llaves {} diferencia de arrays que se crean con corchetes [].
 */
//Ejemplo
/**Tenemos un Auto, el auto es un objeto... 
 * adentro del auto tendremos las propiedades que son las caracteristicas del auto.
 * Por ejemplo:
 *  - color
 *  - marca
 *  - modelo
 *  - peso
 * todo que estas arriba son propiedades. Ya adentro de las propiedades tendremos los valores que son los datos que almacenamos.
 * Por ejemplo:
 *  - color: 'rojo'
 *  - marca: 'Ford'
 *  - modelo: 'Mustang'
 *  - peso: '1200kg'
 * Esto sera un objeto literal. Pasamos a codigo.
 */
const auto = {
  color: 'rojo',
  marca: 'Ford',
  modelo: 'Mustang',
  peso: '1200kg'
};
console.log(auto);
//console.clear();
// en terminos simples, todos los datos ingresado seria con let color = 'rojo', let marca = 'Ford', let modelo = 'Mustang', let peso = '1200kg', seria todo este brume de codigo, la diferencia que demos un objeto el alto y le decimos cual son las propiedades y sus codigos adentro. 
// Para acceder a los datos debemos hacerlo de la siguiente manera:
// console.log(auto.color);
// SEPAS QUE ES MUY COMUN USAR CONST PARA LOS OBJETOS.

// Pero el auto hace una funcion? Si adentro podemos tener funciones como auto.partida(), auto.arrancar(), auto.acelerar(), etc. 
// Ejemplo:
const auto2 = {
  color: 'rojo',
  marca: 'Ford',
  modelo: 'Mustang',
  peso: '1200kg',
  locales: ['Madrid', 'Barcelona', 'Sevilla'],
  partida: function() {
    console.log('El auto esta en marcha');
  },
  arrancar: function() {
    console.log('El auto esta en marcha');
  }
}
auto2.partida();
auto2.arrancar();
console.log(auto2.locales);
// recurdas de las funciones anonimas? bueno ahi la tenemos. 
// Y asi es aclarado que creamo METODOS.
/**Pero que son metodos? 
 * Son funciones que estan en las propiedades de un objeto literal o no literal.
 * Entonces como tenemos al ejemplo superior, tenemos una funcion que es partida, arrancar, acelerar, etc. Dentro de una propiedade de un objeto literal.
 * Por lo tanto cuando validemos el objeto literal, podemos ver que tenemos una funcion.
 * Ya que tenemos una funcion dentro de la propiedad partida, podemos ejecutarla.
 * Y tambien podemos usar arrow function.
 */

/**Como adicionamos propiedades 
 * auto.velocidad = '120km/h';
 * y cuando lo validas va mostrar la nueva propiedades.
 * para borrarla
 * delete auto.velocidad; no va mas tener la propiedade.
 */

/**Como adicionamos un Array? 
 * De la simples manera como se adiciona una funcion
 * al reves de poner function los arrays son en []
 * poderiamos poner: locales = ['Madrid', 'Barcelona', 'Sevilla'];
 * y cuando validamos el array, va a mostrar el array.
 * para validarlo console.log(auto.locales);
 */

/**Como simplificarlo para adicion */

const years = 2018;
const potencia = '230cv';

const auto3 = {
  years, potencia //no necesitamos declarar el valor por ya haber declarado arriba
};

console.log(auto3);