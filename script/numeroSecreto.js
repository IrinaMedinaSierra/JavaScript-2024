let numeroUser;//guardara el numero que escriba el usuario
let numeroSecreto=parseInt(Math.random()*100+1);//sera el numero secreto que generel la maquina
let acertado=false; //cambiar a true cuando el usuario acierte
console.log(numeroSecreto);
while(!acertado){
    numeroUser=Number(prompt("Indica el número"));
    if (numeroSecreto<numeroUser){
        alert("El número debe ser menor");
    }else if (numeroSecreto>numeroUser){
        alert("El número debe ser mayor")
    }else if (numeroSecreto==numeroUser){
        alert("Has acertado! .....");
        acertado=true;
    }else{
        alert("No has escrito un número...Intentalo de nuevo")
    }
    
}

