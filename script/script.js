/**
Tipos de Variables

JavaScript no obliga a definir que tipo de variable estas trabajando
*/

nombre="Maria Rojas"; //tipo de variable String, puedes utilizar "" o ''
var edad=25; //tipo Number, no necesita comillas
espaniol=true; // tipo Boolean, solo dos estados (true o false);
sexo=null;

//¿Como puedes ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores ->console.log( lo que quieres mostrar)

console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);
//operador de concatenación + une dos o mas expresiones de salida
console.log("nombre->"+typeof(nombre) + " !");
console.log("edad->"+typeof(edad));
console.log("espaniol->"+typeof(espaniol));
console.log("sexo->" + typeof(sexo));

direccion="Calle Campo 81";
//Simplificar las cadenas con Backticks con ${} 
console.log(`Datos Personales->Nombre: ${nombre} , Dirección: ${direccion}`);
console.log("Datos Personales ->Nombre: "+ nombre + ", Dirección " + direccion);

//Si la variable es numérica, podemos realizar operaciones matematicas
console.log("El año que viene cumpliras " + (edad+1) + " años");
console.log(`El año que viene cumpliras ${edad+1} años`);

console.log('Esta es una frase de Cervantes \'En un lugar de la Mancha \'');
console.log("Esta es una frase de Cervantes \"En un lugar de la Mancha \"");
console.log("Esta es una frase de Cervantes 'En un lugar de la Mancha' ");
console.log("Esta es una frase de Cervantes \n'En un lugar de la Mancha' ");
console.log("Esta es una frase de Cervantes \n\t'En un lugar de la Mancha' ");
console.log("El signo de la eternidad Armenia es \u{058D}");
console.log("El signo de Bitcoin es \u20BF");

//Actividad Propuesta 2.4 //

console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", algo considerado \"lento\" en la actualidad.");

/*Tipos de datos Numericos (number) */

altura=1.80; //tipo de dato numerico es decimal
diametro=2e-9;
console.log(`Altura->${altura}`);
console.log(`Diámetro->${diametro}`);
resultado=altura/0; //-> Infinito
otroResultado=resultado+10;
console.log(otroResultado);

//Si tienes otros tipo de datos y quieres hacer una operación matemática-> NaN-> Not a Numbrer

resultado=nombre*25; 
console.log(resultado); // * / % ** pero con el + siempre concatena
resultado=nombre+" "+edad;
resultado=`${nombre} ${edad}`;
console.log(resultado);

//Tipo de datos Booleanos (true o false)
//true ->1 false ->0
valorVerdadero=true;
valorFalso=false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3- 1: ${Boolean(1)}`);
console.log(`4- 0: ${Boolean(0)}`);

//si existe datos....siempre va ser true!
texto="Un texto ejemplo";
console.log(`5- texto: ${Boolean(texto)}`);
textoVacio="";
console.log(`5- textoVacio: ${Boolean(textoVacio)}`);


//Conversion de tipos //

masAnios="10"; //tipo de dato es string o cadena...

console.log(edad + masAnios); //2510
console.log(edad + Number(masAnios));//35 -> casting 
console.log(String(edad) + masAnios); //2510

console.log(true*7);
console.log(9-true);
console.log(edad*masAnios); //conversion es automatica
console.log(edad/masAnios);
console.log(edad-masAnios);
console.log(edad**masAnios); //exponencial

console.log(undefined/edad); //NaN
console.log(null*edad); //0


/*--------------------------------------------------------------------*/

parrafo=document.getElementById("parrafo");
parrafo.innerHTML="Es una prueba de javascrip en el DOM";
//lectura del documento...resultaria vacio
parrafo.innerHTML="";

cuadrado=document.querySelector(".cuadrado");
//parrafo=document.querySelector("#parrafo");
titulo=document.querySelector("h1");

titulo.innerHTML="Práctica de JavaScript";
cuadrado.innerHTML="A";

document.write("Es una prueba de document.write");
//variables -
var edad="cincuenta y ocho";

let email="j@gmail.com";
document.write("<p>"+email+"</p>");
document.write("<p>"+edad+"</p>"); //cuidado con el var!

/* Ambito de bloque*/
var mensaje="Mensaje 1"; //declaramos mensaje 
function mostrarMensaje(){ //funcion-> actua como un bloque
    mensaje="<br>Mensaje dentro del Bloque";
    document.write(mensaje);
}
mostrarMensaje();
document.write("<br>mensaje fuera->" + mensaje);

/* let*/
/* Ambito de bloque*/
document.write("<br>**************************");
let mensaje1="Mensaje 1"; //declaramos mensaje 
function mostrarMensaje2(){ //funcion-> actua como un bloque
   let  mensaje1="<br>Mensaje dentro del Bloque";
    document.write(mensaje1);
}
mostrarMensaje2();
document.write("<br>mensaje fuera->" + mensaje1);

//********Constantes *******/
const IVA=21;
let precio=50*((IVA/100)+1);
document.write("<br>El precio final es " + precio);

precio=100*((IVA/100)+1);
document.write("<br>El precio final es " + precio);

//salidas por consola
console.error("aqui hay un error");
console.info("Es una informacion");
console.warn("Es una notificación importante");
console.log('%c Fin del Programa', 'font-weight: bold;color:blue;text-decoration:underline');


// //salidas de mensajes

// //alert("Es una alerta");
// document.write("prueba...prueba..prueba!!!")

// //mensajes de confirmación (si /no...true/false)

// let confirmacion=confirm("Quieres salir del programa")
// document.write(`<br>El usuario quiere salir?->${confirmacion}`);
// if (confirmacion){ //instruccion de condicion 
//     window.location.replace("https://google.es")
// }else{
//     alert("te quedas aqui!")
// }

// //mensaje de entra de datos

// nombre=prompt("Escribe tu nombre");
// document.write(`<br>El nuevo nombre es->${nombre}`);



/* Actividad propuesta 2.5 */


















