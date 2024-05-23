
    let horario="";//salida en html para limpiarlo ...
    let botones=document.querySelectorAll(".boton"); //toma todos los elementos que tienen la clase boton y crea un array!
      // array.forEach(arrayItem=>{ .................})
    botones.forEach(elemento=>{ //En JS forEach es una función que se le aplica a un array para recorrerlo
        elemento.addEventListener("click",function (){ //escucha si hacen click en un boton, y lee su valor
          switch (elemento.value){
              case "l":{
                  horario="Lunes: De 9:00 a 14:00 | 16:00 a 19:00";
                  break
              } case "m":{
                  horario="Martes: De 9:00 a 14:00 | 16:00 a 19:00";
                  break;
              } case "x":{
                  horario="Miércoles: De 9:00 a 14:00 | 16:00 a 19:00";
                  break;
              } case "j":{
                  horario="Jueves: De 9:00 a 14:00 | 16:00 a 19:00";
                  break;
              } case "v":{
                  horario="Viernes: De 8:00 a  16:00";
                  break;
              } case "s":{
                  horario="Sábado: De 9:00 a 14:00";
                  break;
              } case "d":{
                  horario="Domingo: Cerrado";
                  break;
              }
          }
            document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;
        })
    })
  
  
  