let pases=0;
//bucle while, evalua la condició  y si es true entra en el bucle,sino, finaliza y va a la siguiente linea
while(pases<10){//booelano(true o false)
    console.log("Número de pase->" + pases);
    pases++;
}

/* Mostrar la tabla de multiplicar*/
let x=1;
let y=1;
while(x<10){
    while(y<10){
        console.log(x+"x"+y+"="+(x*y));
        y++;
    }
    x++;//se incrementa x 
    y=1;//se inicializa y para que en la proxima vuelta comience en 1
}

//Random o aleatorio!  
//Array o cadenas
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//abecedario guarda todas letras..que van con indice desde el 0=A hasta la 26=Z
let numeroAleatorio=parseInt(Math.random()*26);//numero aleatorio, parseInt convierte el numero a entero
console.log(abecedario[numeroAleatorio]);
let letra="";
while(letra!=abecedario[numeroAleatorio]){
    letra=prompt("Indica una letra").toUpperCase();
    }
    alert("Adivinaste..es la letra->"  + abecedario[numeroAleatorio]);
