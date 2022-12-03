// FETCH 
function leerApi() {
  console.log('Llamando a la API del BCRA, espere un cachito');

  $.ajax({
      url: 'https://api.estadisticasbcra.com',
      type: 'GET',
      // con la propiedad beforeSend le paso el tipo de autorizacion, en este caso será 'Bearer'  y luego el token que registré en el BCRA
      beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA2OTczNDAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlZHVncHVjaGV0YUBnbWFpbC5jb20ifQ.GNFMIUdrWFZAwBIQ4YNDjjEehOlyVn-AiGWtUr-5mXBiuhb_jqMmMyed6qu8Ksi3mUZHA336pL1Ljb5U6OlTtg');
      },

      // si la conexion es exitosa, ejecutará la función "respuesta", definida allí mismo.
      success: function (respuesta) {

          // imprimo el valor de respuesta en la consola, para debug.
          console.log(respuesta);

          // creo una variable "listaAPI y le asigno el DIV que definí arriba, con el "id:lista-api".
          var listaAPI = $("#lista-api");

          $.each(respuesta, function (index, miembro) {
              listaAPI.append(
                  '<div>' +
                  '<p>' + 'Fecha Cotizacion: ' + miembro.d + '<br>' +
                  'Importe: $ ' + miembro.v + '<br>' +
                  '<br>' + '______________________________________' +
                  '</div>'
              );
          });
      }, //fin function respuesta

      error: function () {
          console.log("Error al leer la API");
      }

  });
}

leerApi() 
  
let rate = 6.2;








// MODAL DE BIENVENIDA EN PRIMERA SESIÓN

let visits = Number(localStorage.getItem("visitCount"));
let current = Boolean(sessionStorage.getItem("session"));

if (!current) {
  visits += 1;
}

document.addEventListener(
  "DOMContentLoaded",
  localStorage.setItem("visitCount", visits)
);
document.addEventListener(
  "DOMContentLoaded",
  sessionStorage.setItem("session", true)
);

let modal = document.getElementById("myModal");
let btnModal = document.getElementById("myBtn");
let cross = document.getElementsByClassName("close")[0];

btnModal.onclick = function () {
  modal.style.display = "block";
};

cross.onclick = function () {
  modal.style.display = "none";
};

document.querySelector(".modal-content__start__button").onclick = function () {
  modal.style.display = "none";
};

// Cerrar cuando se hace click fuera del modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Muestra el modal de bienvenida si es la primera sesión
if (localStorage.getItem("visitCount") == 0) {
  modal.style.display = "block";
}

// AGREGAR CLASES SOLO A LAS OPCIONES DE CUOTAS SELECCIONADAS

document.querySelectorAll(".cuotas").forEach(function (i) {
  i.addEventListener("click", function (b) {
    document.querySelectorAll(".cuotas")[0].classList.remove("selected");
    document.querySelectorAll(".cuotas")[1].classList.remove("selected");
    document.querySelectorAll(".cuotas")[2].classList.remove("selected");
    document.querySelectorAll(".cuotas")[3].classList.remove("selected");
    document.querySelectorAll(".cuotas")[4].classList.remove("selected");
    document.querySelectorAll(".cuotas")[5].classList.remove("selected");
    document.querySelector("#cantidaddecuotas").classList.remove("selected");
    if (i.value !== "Otra opción") {
      i.classList.add("selected");
    }
    if (i.value == "Otra opción") {
      document.querySelector("#cantidaddecuotas").classList.add("selected");
    }

    // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas
    if (
      i.value !== "Otra opción" &&
      document.getElementById("cantidaddecuotas").style.display === "flex"
    ) {
      document.getElementById("cantidaddecuotas").style.display = "none";
      document.getElementById("cantidaddecuotas").value = null;
    }
  });
});

document.querySelectorAll(".cuotas2").forEach(function (i) {
  i.addEventListener("click", function (b) {
    document.querySelectorAll(".cuotas2")[0].classList.remove("selected2");
    document.querySelectorAll(".cuotas2")[1].classList.remove("selected2");
    document.querySelectorAll(".cuotas2")[2].classList.remove("selected2");
    document.querySelectorAll(".cuotas2")[3].classList.remove("selected2");
    document.querySelectorAll(".cuotas2")[4].classList.remove("selected2");
    document.querySelectorAll(".cuotas2")[5].classList.remove("selected2");
    document.querySelector("#cantidaddecuotas2").classList.remove("selected2");
    if (i.value !== "Otra opción") {
      i.classList.add("selected2");
    }
    if (i.value == "Otra opción") {
      document.querySelector("#cantidaddecuotas2").classList.add("selected2");
    }
    // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas

    if (
      i.value !== "Otra opción" &&
      document.getElementById("cantidaddecuotas2").style.display === "flex"
    ) {
      document.getElementById("cantidaddecuotas2").style.display = "none";
      document.getElementById("cantidaddecuotas2").value = null;
    }
  });
});

// MOSTRAR O ESCONDER DIFERENTES FUNCIONALIDADES

function showoptions3() {
  let x = document.getElementById("cantidaddecuotas");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function showoptions4() {
  let x = document.getElementById("cantidaddecuotas2");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function showoptions2() {
  let x = document.getElementById("advanced__options");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// VALOR TOTAL EN CONTADO

function myFunction(e) {

  // OPCIÓN 1
  if (
    document.querySelector(".selected").hasAttribute("data-test") &&
    document.querySelector(".selected").getAttribute("data-test") == 0
  ) {
    // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
    cantidaddecuotas = 1;
  } else if (document.querySelector(".selected").hasAttribute("data-test")) {
    cantidaddecuotas = parseFloat(
      document.querySelector(".selected").getAttribute("data-test")
    );
  } else {
    cantidaddecuotas = parseFloat(document.querySelector(".selected").value);
  }
  const valordelacuota = document.getElementById("valordelacuota").value;
  const valordelacuota2 = valordelacuota.replace("$", "");
  const valordelacuota4 = valordelacuota2.replace(",", "");
  

  // OPCIÓN 2
  if (
    document.querySelector(".selected2").hasAttribute("data-test2") &&
    document.querySelector(".selected2").getAttribute("data-test2") == 0
  ) {
    // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
    cantidaddecuotasOp2 = 1;
  } else if (document.querySelector(".selected2").hasAttribute("data-test2")) {
    cantidaddecuotasOp2 = parseFloat(
      document.querySelector(".selected2").getAttribute("data-test2")
    );
  } else {
    cantidaddecuotasOp2 = parseFloat(
      document.querySelector(".selected2").value
    );
  }
  const valordelacuotaOp2 = document.getElementById("valordelacuota2").value;
  const valordelacuota2Op2 = valordelacuotaOp2.replace("$", "");
  const valordelacuota4Op2 = valordelacuota2Op2.replace(",", "");

  PV();
}

// VALOR ACTUAL DE LAS CUOTAS

function PV() {
  // OPCION 1
  //Aquí se elije el valor de la cantidad de cuotas seleccionadas. si tiene el atributo data elige los botones si no el valor custom
  if (document.querySelector(".selected").hasAttribute("data-test")) {
    cantidaddecuotas = parseFloat(
      document.querySelector(".selected").getAttribute("data-test")
    );
  } else {
    cantidaddecuotas = parseFloat(document.querySelector(".selected").value);
  }
  const valordelacuota = document.getElementById("valordelacuota").value;
  const valordelacuota2 = valordelacuota.replace("$", "");
  const valordelacuota4 = valordelacuota2.replace(",", "");
  anualInflation = document.querySelector("#inflacion__number").value;
  // Cálculo de la tasa efectiva mensual a partir de la anual

  // OPCION 2
  if (document.querySelector(".selected2").hasAttribute("data-test2")) {
    cantidaddecuotasOp2 = parseFloat(
      document.querySelector(".selected2").getAttribute("data-test2")
    );
  } else {
    cantidaddecuotasOp2 = parseFloat(
      document.querySelector(".selected2").value
    );
  }
  const valordelacuotaOp2 = document.getElementById("valordelacuota2").value;
  const valordelacuota2Op2 = valordelacuotaOp2.replace("$", "");
  const valordelacuota4Op2 = valordelacuota2Op2.replace(",", "");

  // Acá se calcula el valor actual de la suma de las cuotas//

// QUERY STRING
const query = new URLSearchParams({
  cuotasOp1: cantidaddecuotas, 
  valOp1: valordelacuota4,
  cuotasOp2: cantidaddecuotasOp2,
  valOp2: valordelacuota4Op2,
  inf: anualInflation,
}); 

const queryString = query.toString(); 

console.log(queryString);

const url = window.location.href + '/resultado.html?' + queryString

window.location.href = url;

}







//Estas funciones las obtuve de Stackoverflow y sirven para aplicar el formato de $$ en los inputs del form

// Jquery Dependency
$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), "blur");
  },
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  let input_val = input.val();

  // don't validate empty input
  if (input_val === "") {
    return;
  }

  // original length
  let original_len = input_val.length;

  // initial caret position
  let caret_pos = input.prop("selectionStart");

  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    let decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    let left_side = input_val.substring(0, decimal_pos);
    let right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  let updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

//

// Create our number formatter.
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


