let boton = document.querySelector(".boton");

boton.addEventListener("click", function () {
    let n1 = document.querySelector("#nombre1");
    let e1 = document.querySelector("#edad1");
    let n2 = document.querySelector("#nombre2");
    let e2 = document.querySelector("#edad2");
    let n3 = document.querySelector("#nombre3");
    let e3 = document.querySelector("#edad3");
    let mE = document.querySelector(".mensajeError"); //html
    let mC = document.querySelector(".mensaje");      //html


    let msnError = "";
    let error = false;
    if (n1.value == "" || n2.value == "" || n3.value == "") {
        msnError = "El campo nombre es obligatorio";
        error = true;
    }
    if (e1.value < 0 || e1.value == "" || e2.value < 0 || e2.value == "" || e3.value < 0 || e3.value == "") {
        msnError += "<br>El campo edad es obligatorio";
        error = true;
    }
    if (error) { //si la variable error = true
        mC.innerHTML = "";
        mE.innerHTML = msnError;
    } else {
        mE.innerHTML = "";
        if (+e1.value > +e2.value && +e2.value > +e3.value) {
            mC.innerHTML = `${n1.value} es mayor que ${n2.value} y ${n3.value} es menor `;
        } else if (+e1.value > +e3.value && +e3.value > +e2.value) {
            mC.innerHTML = `${n1.value} es mayor que ${n3.value} y ${n2.value} es  menor `;
        } else if (+e3.value > +e2.value && +e2.value > +e1.value) {
            mC.innerHTML = `${n3.value} es mayor que ${n2.value} y ${n1.value} es el menor `;
        } else if (+e2.value > +e1.value && +e1.value > +e3.value) {
            mC.innerHTML = `${n2.value} es mayor que ${n1.value} y ${n3.value} es el menor `;
        } else if (+e2.value > +e3.value && +e3.value > +e1.value) {
            mC.innerHTML = `${n2.value} es mayor que ${n3.value} y ${n1.value} es el menor `;
        } else if (+e3.value > +e1.value && +e1.value > +e2.value) {
            mC.innerHTML = `${n3.value} es mayor que ${n1.value} y ${n2.value} es el menor `;
        } else if (+e1.value == +e2.value && +e1.value > +e3.value) {
            mC.innerHTML = `${n1.value} tiene la misma edad que ${n2.value} y ${n3.value} es el menor `;
        } else
            if (+e2.value == +e3.value && +e2.value > +e1.value) {
                mC.innerHTML = `${n2.value} tiene la misma edad que ${n3.value} y ${n1.value} es el menor `;
            } else if (+e3.value == +e1.value && +e3.value > +e2.value) {
                mC.innerHTML = `${n3.value} tiene la misma edad que ${n1.value} y ${n2.value} es el menor `;
            }
            else if (+e1.value == +e2.value && +e1.value < +e3.value) {
                mC.innerHTML = `${n3.value} es mayor y ${n1.value} tiene la misma edad que ${n2.value} `;
            } else
                if (+e2.value == +e3.value && +e2.value < +e1.value) {
                    mC.innerHTML = ` ${n1.value} es  mayor y ${n2.value} tiene la misma edad que ${n3.value} `;
                } else if (+e3.value == +e1.value && +e3.value < +e2.value) {
                    mC.innerHTML = `${n2.value} es  mayor y ${n3.value} tiene la misma edad que ${n1.value} `;
                } else if (+e3.value == +e1.value && +e3.value == +e2.value) {
                    mC.innerHTML = `${n1.value} , ${n2.value} y ${n3.value} tienen la misma edad`;
                }

    }


})