/* Entrada a un pub-> mayor de 18 años */
//****let edad=Number(prompt("Edad"));//conversion manual de tipo de dato, porque en principio es string
//verificar que edad sea tipo de dato numerico
// console.log(typeof (edad)); //si es string tengo que pasarlo a numérico
// //si tiene mas 18 años, entonces entrar =true
// let entrada = false; //se inicializa a falso para que nadie entre si no cumple la condición de ser mayor de 18 años
// if (edad >= 18) {
//     entrada = true;
// }
// console.log("Puede entrar al Pub?->" + entrada);

/*********************/

/* Ejemplo de if anidados, donde se declara un animal, y luego se va entrando en difentes if, hasta llegar al último else...y veremos que pasa */

// let mascota = "gato";
// if (mascota == "perro") {
//     console.log("La mascota es perro");
// } else if (mascota == "tortuga") {
//     console.log("La mascota es tortuga");
// } else if (mascota == "canario") {
//     console.log("La mascoes es un canario");
// } else {
//     console.log(mascota);
// }
// /*Nota: en el ejemplo anterior no se cumple ninguna de las condiciones, y va directo al else final. */

// /* Si Ana tiene dinero y el articulo esta en venta, podra irse de compras sino, se que queda en casa*/
// let dinero = prompt("¿Tienes dinero"); //todo lo que escribas lo pase a mayuscula -> string.toUpperCase()
// let enVenta =prompt("¿Esta en venta?");
// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI") {
//     console.log("Ana se puede ir de compras");
// } else {
//     console.log("Ana se queda en casa!");
// }

/* Estructura Swith Case */
console.log("Menu Iniciado");
let letra=prompt("Indica tu opcion: [c]opiar  [a]brir  [p]egar");
switch(letra){
    case "a": case"A":
            console.log("Se abre archivo");
            break;
            
    case "c": case"C": console.log("Se copia el archivo");
            break
                
              
    case "p": case"P":console.log("Se pega el archivo");
            break;
            
    default: console.log("Opión no válida");
    

}





