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


//// EXTRACCION DE PARAMETROS DESDE LA URL

const url = window.location.href; // Gets current URL

const searchParams = new URL(url).searchParams;
// Extracts parameters from URL

const urlSearchParams = new URLSearchParams(searchParams);

const res = Array.from(urlSearchParams.entries());

cantidaddecuotas = urlSearchParams.get('cuotasOp1');
valordelacuota4 = urlSearchParams.get('valOp1');
cantidaddecuotasOp2 = urlSearchParams.get('cuotasOp2');
valordelacuota4Op2 = urlSearchParams.get('valOp2');
anualInflation = urlSearchParams.get('inf');

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

//BOTON COPIAR
$('.share').on('click', function() {
  navigator.clipboard.writeText(window.location.href);
})


//// FUNCION PARA RESULTADOS

function myFunction2(e) {
  g = document.createElement("div");
  g.setAttribute("id", "resultados");
  document.querySelector(".results__page").prepend(g);
  document.querySelector("#resultados").style.display = "flex";
  paymentsSum$Op1txt =
    formatter.format(
      parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)
    );
  paymentsSum$Op2txt = formatter.format(
    parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2)
  );
  // Cálculo de la tasa efectiva mensual a partir de la anual
  rate = (Math.pow(1 + anualInflation / 100, 1 / 12) - 1) * 100;
  rate2 = parseFloat(rate) / 100.0;
  //const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
  let valoractualresult2 = 0;
  const valoractualDeCadaCuota = [];
  const numeroDeCadaCuota = [];
  // Acá se calcula el valor actual de la suma de las cuotas//
  if (cantidaddecuotas != 0) {
    for (let i = 0; i < cantidaddecuotas; i += 1) {
      valoractualresult = valordelacuota4 / Math.pow(1 + rate2, i + 1);
      valoractualresult2 += valoractualresult;
      valoractualDeCadaCuota.push(valoractualresult);
      numeroDeCadaCuota.push("Cuota Nº " + (i + 1));
    }
  } else {
    valoractualresult = valordelacuota4;
    valoractualresult2 = valordelacuota4;
    valoractualDeCadaCuota.push(valoractualresult);
    numeroDeCadaCuota.push("Cuota Nº 0");
  }
  const arr1 = numeroDeCadaCuota;
  const arr2 = valoractualDeCadaCuota;

  const obj = {};
  arr1.forEach((element, index) => {
    obj[element] = arr2[index];
  });

  actualValue$Resulttxt = formatter.format(valoractualresult2);

  // OPCION 2
  let valoractualresult2op2 = 0;
  const valoractualDeCadaCuotaop2 = [];
  const numeroDeCadaCuotaop2 = [];

  if (cantidaddecuotasOp2 != 0) {
    for (let i = 0; i < cantidaddecuotasOp2; i += 1) {
      valoractualresultop2 = valordelacuota4Op2 / Math.pow(1 + rate2, i + 1);
      valoractualresult2op2 += valoractualresultop2;
      valoractualDeCadaCuotaop2.push(valoractualresultop2);
      numeroDeCadaCuotaop2.push("Cuota Nº " + (i + 1));
    }
  } else {
    valoractualresultop2 = valordelacuota4Op2;
    valoractualresult2op2 = valordelacuota4Op2;
    valoractualDeCadaCuotaop2.push(valoractualresult2op2);
    numeroDeCadaCuotaop2.push("Cuota Nº 0");
  }
  const arr1Op2 = numeroDeCadaCuotaop2;
  const arr2Op2 = valoractualDeCadaCuotaop2;

  const objOp2 = {};

  arr1Op2.forEach((element, index) => {
    objOp2[element] = arr1Op2[index];
  });

  console.log(arr2)
  console.log(valoractualDeCadaCuotaop2)

  actualValue$ResultOp2txt =
    formatter.format(valoractualresult2op2)

  firstResultMessage = document.createElement("span");
  firstResultMessage.setAttribute("id", "mensajederesultado3");
  document.getElementById("resultados").appendChild(firstResultMessage);

  // CONDICIONALES
  if (valoractualresult2op2 > valoractualresult2) {
    firstResultMessage.innerHTML =
      "Te conviene la <span class = 'firstoption'>primera opción</span> de financiación: pagar tu compra en " +
      cantidaddecuotas +
      " cuotas de " +
      formatter.format(valordelacuota4) +
      " cada una.";
  }
  if (valoractualresult2op2 < valoractualresult2) {
    firstResultMessage.innerHTML =
      "Te conviene la <span class = 'secondoption'>segunda opción</span> de financiación: pagar tu compra en " +
      cantidaddecuotas +
      " cuotas de " +
      formatter.format(valordelacuota4) +
      " cada una.";
  }

  // CHART 1

  chartCard = document.createElement("span");
  chartCard.setAttribute("id", "chartCard");
  document.querySelector("#resultados").appendChild(chartCard);

  titleChart = document.createElement("span");
  titleChart.setAttribute("id", "title_grafica");
  document.querySelector("#chartCard").appendChild(titleChart);
  titleChart.textContent =
    "Cuotas ajustadas al valor de hoy de la primera opción de financiación";

  chart = document.createElement("canvas");
  chart.setAttribute("id", "grafica");
  document.querySelector("#chartCard").appendChild(chart);



  const $grafica = chart;
  // Las etiquetas son las que van en el eje X.

  const etiquetas = arr1;
  const datosVentas2020 = {
    label: "Cuota al valor de hoy",
    data: arr2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: "rgba(0, 156, 189, 1)", // Color de fondo
    borderColor: "rgba(0, 156, 189, 1)", // Color del borde
    borderWidth: 0, // Ancho del borde
  };
  new Chart($grafica, {
    type: "bar", // Tipo de gráfica
    data: {
      labels: etiquetas,
      datasets: [
        datosVentas2020,
        // Aquí más datos...
      ],
    },
    options: {

      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // CHART 2

  chartCard2 = document.createElement("span");
  chartCard2.setAttribute("id", "chartCard2");
  document.querySelector("#resultados").appendChild(chartCard2);

  titleChart2 = document.createElement("span");
  titleChart2.setAttribute("id", "title_grafica2");
  document.querySelector("#chartCard2").appendChild(titleChart2);
  titleChart2.textContent =
    "Cuotas ajustadas al valor de hoy de la segunda opción de financiación";


  chart2 = document.createElement("canvas");
  chart2.setAttribute("id", "grafica2");
  document.querySelector("#chartCard2").appendChild(chart2);



  const $grafica2 = chart2;
  // Las etiquetas son las que van en el eje X.

  const etiquetas2 = arr1Op2;

  console.log(etiquetas2)
  const datosVentas20202 = {
    label: "Cuota al valor de hoy",
    data: arr2Op2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: "rgba(237, 139, 0, 1)", // Color de fondo
    borderColor: "rgba(0, 156, 189, 1)", // Color del borde
    borderWidth: 0, // Ancho del borde
  };
  new Chart($grafica2, {
    type: "bar", // Tipo de gráfica
    data: {
      labels: etiquetas2,
      datasets: [
        datosVentas20202,
        // Aquí más datos...
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // TABLA

  myTable = document.createElement("span");
  myTable.setAttribute("id", "table");
  document.querySelector("#resultados").appendChild(myTable);


  let employees = [
    { cant: 'Cantidad de cuotas', Cantidaddecuotas: cantidaddecuotas, Cantidaddecuot: cantidaddecuotasOp2 },
    { cant: 'Valor de cada cuota', Val1: valordelacuota4, val1: valordelacuota4Op2 },
    { val: "Suma total de las cuotas", sum1: paymentsSum$Op1txt, sum2: paymentsSum$Op2txt },
    { val: "Suma ajustado por inflación", val1: actualValue$Resulttxt, val2: actualValue$ResultOp2txt },
  ]

  let headers = ['', 'Opción 1', 'Opción 2'];

  let table = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  employees.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    })

    table.appendChild(row);
  });

  myTable.appendChild(table);
  ;
  if (valoractualresult2op2 > valoractualresult2) {
    document.querySelector("#table > table > tr:nth-child(5) > td:nth-child(2)").prepend("👌")
    document.querySelector("#table > table > tr:nth-child(5) > td:nth-child(2)").style.color="green"
  }
  if (valoractualresult2op2 < valoractualresult2) {
    document.querySelector("#table > table > tr:nth-child(5) > td:nth-child(3)").prepend("👌")
    document.querySelector("#table > table > tr:nth-child(5) > td:nth-child(3)").style.color="green" 
  }
}



myFunction2();




