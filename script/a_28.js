let boton = document.querySelector(".boton");
//necesitamos que cuando pulse clic en el boton, haga una codicion
//y analice la edad para enviar un mensaje de vuelta....
//javascript los eventos

boton.addEventListener("click", function () {
    let nombre = document.querySelector("#nombre").value;
    console.log(nombre);
    let edad = document.querySelector("#edad").value;
    console.log(edad);
    //nos trae el valor que se ha escrito en el formulario
    let mensaje;
    if (edad <= 12) {
        mensaje = "niñ@";
    } else if (edad >= 13 && edad <= 17) {
        mensaje = "adolescente";
    } else if (edad >= 18 && edad <= 64) {
        mensaje = "trabajador/a"
    } else {
        mensaje = "jubilado"
    }
    let msnError = "";
    let error = false;
    //validacion de datos de entrada
    if (edad < 0 || edad == "") {
        msnError = "La edad no es correcta, ingrese una edad correcta";
        document.querySelector("#edad").value="";
        error = true;
    }
    if (nombre == "") {
        msnError += "<br>Ingrese un nombre "
        error = true;
    }
    if (error) {
        document.querySelector(".mensaje").innerHTML = ""; //borra el contenido de mensaje
        document.querySelector(".mensajeError").innerHTML = `${msnError}`;
    }
    else {
        document.querySelector(".mensajeError").innerHTML = "";//borra el contenido de mensajeError
        document.querySelector(".mensaje").innerHTML = `${nombre} tiene ${edad} años y es ${mensaje}`;
    }
})




