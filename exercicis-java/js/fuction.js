/**Function 
 * Son como blocos  de codigo projetada para la ejecución de tareas especificas
 * Como una fabrica cual te da una tarea a ejecutar y luego de ser pedida || en este caso llamada, va devolver un resultado.
 * Conocido en programacion como mini programa proyectados para realizar tareas que van ser construidas.
 * Sepas que solo seran ejecutadas cuando ALGO le pidas || en este caso llamada, es decir, cuando se le pida a la funcion que se ejecute.
 * function nombre_de_la_funcion(parametros1, parametros2, parametros3)
 */
//Deficinicion
function saudacio() {
  console.log('Olá sea bienvenido');
};

//llamada de la funcion
saudacio();

//Pasando parametros

console.clear(); //limpa el console
// podemos tener inumeros parametros dentro de la funcion
function nomeDeEstudiante(nombre, curso) {
  //var nombre = prompt('Digite su nombre');
  //var curso = prompt( 'Digite su curso')
  console.log('Hola ' + nombre);
};
nomeDeEstudiante();
//al declarar el parametro en la funcion vemos que primero va pedir el dato con prompt y luego lo imprime en la consola 
// no quiero que el usuario ingrese el valor.

console.clear();

function nomeDelEstudiante(nombre, carrera) {
  console.log(`Hola ${nombre}`);
  console.log(`Bienvenida a la ${carrera}`);
}

//Los datos a ser ingresado en nombre y carrera serán colocado a la hora de llamar la función
nomeDelEstudiante('Juan', 'Ing. Software');
console.clear();

//Practicamos un poco: pide al usuario que ingrese, nombre, 2 numeros distintos y la fecha de partida. Calcule los dos numeros y luego calcule el año del usuario con el año 2024 para decir cuanto es su edad.

// function usuario(nombre, numero1, numero2, fecha) {
//   var nombre = prompt('Digite su nombre');
//   var numero1 = parseInt(prompt('Digite un numero'));
//   var numero2 = parseInt(prompt('Digite otro numero'));
//   var fecha = parseInt(prompt('Digite su fecha de nacimiento'));
//   var total = numero1 + numero2;
//   var edad = 2024 - fecha;
//   alert(`Hola, ${nombre}, ingresastes ${numero1} y ${numero2} y la suma de estos es ${total}, y tu edad es ${edad}`);
// };
// usuario(); //llamando va nos generar que nos mostre los datos

// console.log(usuario()) no piensas que hacer así ejecutra las informaciones solicita. Esto conducirá un loop que solo finalizará cuando el valor sea undefined.

//Funciones con retorno
/*Ahora que sabemos como funciona el BASICO de las funciones, aplicamos para casos que dan retornos. */
//No se imprime funciones y ni siempre vamos ver funciones con parametros.
//agarramos la función anterio del nombre del estudiante
function nombreDelAlumno(nombre, apellido) {
  return `Hola ${nombre} ${apellido}, sea bienvenido`;
  //va retornar el valor que ingresamos en la funcion, o sea toda la mensaje o codigo que deseamos que se ejecute.
}
// como hacemos para guardarla todo valor? Pedindo que sea arquivado dentro de una nueva variable:
const mensaje = nombreDelAlumno('Juan', 'Perez');

//Validamos. Correcto.
console.log(mensaje);

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;

}

const resultado = somar(2, 3);
console.log(resultado)
console.log(resultado + 10)

console.clear();
//Podemos salvarlo en PDF, Txt, cualquer contenido.

//Parametros patrones:
// function nombreDelAlumno (nombre, apellido ="Perez") caso no demos valores agregado a nuestro parametros, ejemplo nombreDelAlumno(Juan) va altomaticamente agregar el patron ingresado que es Perez. Y si ponemos (Juan, Perin), va agregar el Perin dejando el Perez de lado, por que agregamos nuevo patron.


// --------------------------------------------------------

//Funciones anonimas:
//Las funciones anonimas son funciones que no tienen nombre, no se les puede asignar. 
// para llamarla tendramos que dar una variable
//La fuction esta atribuida a la variable
//Ejemplo:
const dobroDoNumer = function(numero) {
  return numero * 2;
}

const dobro = dobroDoNumer(2);
console.log(dobro);
/**Diferencia 
 * En algunos caso no atribuimos la función a una variable, dado que ya estara dentro de otra funcion conocida como de alta ordene
 * el paso aca es que solamente atribuimos a una var
 * esto pasa que el js imprime el first class function -- tratandolas como se fuera una variable.
 * Por lo tanto podemos tratar una variable como se fuera una funcion
 */
// ---------------------------------------
/**Funciones Arrow 
 * funciones de flechas dado a su estructura de sintaxis.
 * es un nuevo patron de programacion muy usado y principalmente a los componentes de react, angular, node.
 * son funciones que van retornar HTML
 * se escriben con =>
 * se pueden pasar parametros y retornar valores
 * NO TENEMOS FUNCTION PERO SI () Y ENTRE LOS () VAMOS A PONER => {} QUEDANDO ASI () => {}
 * PERO SI DESEAMOS USALAR EN OTROS LUGARES USAMOS ELLA COMO UNA VARIABLE.
 */
const resta = (numero1, numero2) => {
  return numero1 - numero2;
}
console.log(resta(2, 3));

// Sepas que las arrow function no necesita usar return, por que por patrone ya viene el return adentro de la funcion sin declararla. WTF!!!! si.

// const multiplicar = (numero1, numero2) => numero1 * numero2; // sin las {} el programa ya va saber que lo que vas despues de las => es lo que va a retornar.

// console.log(multiplicar(2, 3));

// pero sepas una cosa!!! Si realizamos otras acciones... Cuya realiza logica, va tener que usar {} para que sea retornado, pero si es algo SIMPLES y de SIMPLES valor, si podemos usar la versión corta.

// const multiplicar = (numero1, numero2) => {
//   if (numero1 < 0){
//     console.log('El numero1 es negativo'')
//   }
// }
// console.log(multiplicar(2, 3));
// ---------------------------------------

//Funciones omitindo los parentesis
//Cuando solo tenemos una linea de codigo, podemos omitir los parentesis y los {}
//Ejemplo:
// pero con buenas practicas los editores tiene ya como base el efecto de ponerlos 
const tripleNumero = numero => numero * 3;