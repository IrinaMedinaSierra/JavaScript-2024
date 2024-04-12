// let pases=0;
// //bucle while, evalua la condició  y si es true entra en el bucle,sino, finaliza y va a la siguiente linea
// while(pases<10){//booelano(true o false)
//     console.log("Número de pase->" + pases);
//     pases++;
// }

// /* Mostrar la tabla de multiplicar*/
// console.log("***Bucle While***");
// let x=1;
// let y=1;
// while(x<10){
//     while(y<10){
//         console.log(x+"x"+y+"="+(x*y));
//         y++;
//     }
//     x++;//se incrementa x 
//     y=1;//se inicializa y para que en la proxima vuelta comience en 1
// }
// /********************************************** */
// /*BUCLE FOR */
// console.log("***Bucle FOR***");
//     for(let x=1;x<10;x++){//1
//         for(let y=1;y<10;y++){//1-2-3-4-----9
//             console.log(x+"x"+y+"="+(x*y));
//         }   
//     }


/*************************************************/
// //Random o aleatorio!  
// //Array o cadenas
// let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//abecedario guarda todas letras..que van con indice desde el 0=A hasta la 26=Z
// let numeroAleatorio=parseInt(Math.random()*26);//numero aleatorio, parseInt convierte el numero a entero
// console.log(abecedario[numeroAleatorio]);
// let letra="";
// while(letra!=abecedario[numeroAleatorio]){
//     letra=prompt("Indica una letra").toUpperCase();
//     }
//     alert("Adivinaste..es la letra->"  + abecedario[numeroAleatorio]);
/*******************************/

let contador=0;
let numero=1;
while(contador<10){
    if (numero%2==0){
        console.log("Es par!");
        console.log(contador);
        contador++;
    }
    numero++;
}

/*************************************/
/*ACTIVIDAD 2.12 */
//Multiplos de 7 desde el 1 al 100

for (let i=0;i<=100;i+=7){
    console.log("Multiplo de 7->" + i);
}

/*DIAS MES Y AÑOS */
//DIAS
let dias=document.querySelector("#dias");
let meses=document.querySelector("#meses");
let anios=document.querySelector("#anios");

for(let dia=1;dia<=31;dia++){
    //<option value="1"> 1 </opcion>
    /*Crear un elemento en el html.--DOM */
    opcion=document.createElement("option");//diseñando el elmento
    opcion.textContent=dia; //lo que se muestra el valor en el documento
    opcion.value=dia; //valor 
    dias.appendChild(opcion);
}
for (let mes=1;mes<=12;mes++){
    opcion=document.createElement("option");//diseñando el elmento
    opcion.textContent=mes; //lo que se muestra el valor en el documento
    opcion.value=mes; //valor 
    opcion.classList.add("desplegable","lista");// agregar clase css
 
    //opcion.classList.remove-> quitar una clase
    opcion.setAttribute("id",mes);//agregar atributos
    meses.appendChild(opcion);//crear el elemento hijo 
    
}
for (let anio=2024;anio>=2014;anio--){
    opcion=document.createElement("option");//diseñando el elmento
    opcion.textContent=anio; //lo que se muestra el valor en el documento
    opcion.value=anio; //valor 
    
    anios.appendChild(opcion);
}

//Saltos e interrupción en bucles
//break
//muestra la tabla de multiplicar del 9 hasta que llega a 5
const TABLA=9;
for (let index = 0; index <=10 ; index++) {
    console.log(`${TABLA} x ${index} = ${TABLA*index}` );
    if (index==5){
        break; //interrumpe o rompe el bucle
    }   
}

//salto
//muestra los 10 primeros impares que no sean múltiplos de 3
let contadorS=0;
let numeroS=1;
while(contadorS<10){
    if (numeroS%3==0){
        numeroS++;
        continue;//no ejecuta las siguientes lineas sino que vuelve al while
    }
    if(numeroS%2!=0){
        console.log("Es Impar" + numeroS);
        contadorS++;
    }
      numeroS++; //se incrementa si no hace el salto (par o impar)
}







