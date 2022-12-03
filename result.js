const url = window.location.href; // Gets current URL

const searchParams = new URL(url).searchParams; 
// Extracts parameters from URL

const urlSearchParams = new URLSearchParams(searchParams);

const res = Array.from(urlSearchParams.entries());
console.log(res);


cantidaddecuotas=urlSearchParams.get('cuotasOp1'); 
valordelacuota4=urlSearchParams.get('valOp1'); 
cantidaddecuotasOp2=urlSearchParams.get('cuotasOp2'); 
valordelacuota4Op2=urlSearchParams.get('valOp2'); 
anualInflation=urlSearchParams.get('inf'); 

console.log(
    //cantidaddecuotas, valordelacuota, cantidaddecuotasOp2,valordelacuotaOp2
)


function myFunction2(e) {
    g = document.createElement("div");
    g.setAttribute("id", "resultados");
    document.querySelector(".results__page").prepend(g);
    //document.querySelector("body").appendChild(g);
    document.querySelector("#resultados").style.display = "flex";
  
    // OPCIÓN 1

    // Crea card de resultado de suma de cuotas en contado.
    paymentsSumResults = document.createElement("span");
    paymentsSumResults.setAttribute("id", "paymentsSumResults");
    document.querySelector("#resultados").appendChild(paymentsSumResults);
  
    paymentsSumOp1 = document.createElement("span");
    paymentsSumOp1.setAttribute("id", "mensajederesultado3");
    paymentsSumResults.appendChild(paymentsSumOp1);
    paymentsSumResults.appendChild(document.createElement("br"));
    paymentsSumOp1.textContent =
      "La suma de las cuotas de la primera opción es: ";
    paymentsSum$Op1 = document.createElement("span");
    paymentsSumOp1.appendChild(paymentsSum$Op1);
    paymentsSum$Op1.textContent =
      formatter.format(
        parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)
      ) + ".";
      paymentsSum$Op1txt=
      formatter.format(
        parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)
      ) ;
  
  
    paymentsSumOp2 = document.createElement("span");
    paymentsSumOp2.setAttribute("id", "mensajederesultado2Opt2");
    paymentsSumResults.appendChild(paymentsSumOp2);
    paymentsSumOp2.textContent =
      "La suma de las cuotas de la segunda opción es: ";
    paymentsSum$Op2 = document.createElement("span");
    paymentsSumOp2.appendChild(paymentsSum$Op2);
    paymentsSum$Op2.textContent =
      formatter.format(
        parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2)
      ) + ".";
      paymentsSum$Op2txt= formatter.format(
        parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2)
      );
    PV2();
  }
  
  // VALOR ACTUAL DE LAS CUOTAS
  
  function PV2() {
    // OPCION 1
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
    // Aca creo un objeto pero no se esta usando en ningun lado aun.
    arr1.forEach((element, index) => {
      obj[element] = arr2[index];
    });
  
    // Crea card de descripción de valores actuales.
    actualValuesResults = document.createElement("span");
    actualValuesResults.setAttribute("id", "actualValuesResults");
    document.querySelector("#resultados").appendChild(actualValuesResults);
  
    actualValueResult = document.createElement("span");
    actualValueResult.setAttribute("id", "actualValueResult");
    actualValuesResults.appendChild(actualValueResult);
    actualValueResult.textContent = "El valor actual de la opción 1 es: ";
    actualValue$Result = document.createElement("span");
    actualValueResult.appendChild(actualValue$Result);
    actualValue$Result.textContent = formatter.format(valoractualresult2) + ". ";
    actualValue$Resulttxt = formatter.format(valoractualresult2) + ". ";
    actualValuesResults.appendChild(document.createElement("br"));
  
    // OPCION 2

  
    // Acá se calcula el valor actual de la suma de las cuotas//
    let valoractualresult2op2 = 0;
    const valoractualDeCadaCuotaop2 = [];
    const numeroDeCadaCuotaop2 = [];
  
    if (cantidaddecuotasOp2 != 0) {
      for (let i = 0; i < cantidaddecuotasOp2; i += 1) {
        valoractualresultop2 = valordelacuota4Op2 / Math.pow(1 + rate2, i + 1);
        valoractualresult2op2 += valoractualresultop2;
        valoractualDeCadaCuotaop2.push(valoractualresult2op2);
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
  
    actualValueResultOp2 = document.createElement("span");
    actualValueResultOp2.setAttribute("id", "actualValueResultOp2");
    actualValuesResults.appendChild(actualValueResultOp2);
    actualValueResultOp2.textContent = "El valor actual de la opción 2 es: ";
    actualValue$ResultOp2 = document.createElement("span");
    actualValueResultOp2.appendChild(actualValue$ResultOp2);
    actualValue$ResultOp2.textContent =
      formatter.format(valoractualresult2op2) + ".";
  
      actualValue$ResultOp2txt =
      formatter.format(valoractualresult2op2)
  
    firstResultMessage = document.createElement("span");
    firstResultMessage.setAttribute("id", "mensajederesultado3");
    document.getElementById("resultados").appendChild(firstResultMessage);
  
    // CONDICIONALES
    if (valoractualresult2op2 > valoractualresult2) {
      firstResultMessage.textContent =
        "Te conviene la primera opción de financiación: pagar tu compra en " +
        cantidaddecuotas +
        " cuotas de " +
        formatter.format(valordelacuota4) +
        " cada una.";
    }
    if (valoractualresult2op2 < valoractualresult2) {
      firstResultMessage.textContent =
        "Te conviene la segunda opción de financiación: pagar tu compra en " +
        cantidaddecuotasOp2 +
        " cuotas de " +
        formatter.format(valordelacuota4Op2) +
        " cada una.";
    }
    let myString = JSON.stringify(obj);
  
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

    // Tabla

    myTable = document.createElement("span");
    myTable.setAttribute("id", "table");
    document.querySelector("#resultados").appendChild(myTable);
    
    
    let employees = [
        {cant: 'Cantidad de cuotas', Cantidaddecuotas: cantidaddecuotas, Cantidaddecuot: cantidaddecuotasOp2 },
        {val: "Valor actual de las cuotas", val1: actualValue$Resulttxt, val2: actualValue$ResultOp2txt },
        {val: "Suma total de las cuotas", sum1: paymentsSum$Op1txt, sum2: paymentsSum$Op2txt}
    ]
    
    let headers = ['','Opción 1', 'Opción 2'];
    
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
} 
  




myFunction2();

