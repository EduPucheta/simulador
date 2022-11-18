// MODAL DE BIENVENIDA EN PRIMERA SESIÓN

var visits = Number(localStorage.getItem('visitCount'));
var current = Boolean(sessionStorage.getItem('session'));
if (!current) {
  visits+=1;
}
localStorage.setItem('visitCount', visits);
sessionStorage.setItem('session', true);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando hacés click en empezar!
document.querySelector(".modal-content__start__button").onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Muestra el modal de bienvenida si es la primera sesión

if(localStorage.getItem('visitCount')==0){
  modal.style.display = "block";
}

// Inflación mensual tomada por defecto.
var rate = 6.2 

// Función para agregar clases a los botones seleccionados
var  buttonArray = document.querySelectorAll('.cuotas');

buttonArray.forEach(function(i) {
  i.addEventListener('click', function(b) {

    buttonArray[0].classList.remove("selected")
    buttonArray[1].classList.remove("selected")
    buttonArray[2].classList.remove("selected")
    buttonArray[3].classList.remove("selected")
    buttonArray[4].classList.remove("selected")
    buttonArray[5].classList.remove("selected")
    document.querySelector('#cantidaddecuotas').classList.remove("selected")

    if (i.value !== "Otra opción"){
      i.classList.add("selected");
    }
    if (i.value == "Otra opción") {
      document.querySelector('#cantidaddecuotas').classList.add("selected")
    } 
    var x = document.getElementById('cantidaddecuotas');
    // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas
    if (i.value !== "Otra opción" && x.style.display === "flex") {
      x.style.display = "none";
      x.value = null
    } 
  })
});

// Función para agregar clases a los botones seleccionados
var  buttonArray2 = document.querySelectorAll('.cuotas2');

buttonArray2.forEach(function(i) {
  i.addEventListener('click', function(b) {

    buttonArray2[0].classList.remove("selected2")
    buttonArray2[1].classList.remove("selected2")
    buttonArray2[2].classList.remove("selected2")
    buttonArray2[3].classList.remove("selected2")
    buttonArray2[4].classList.remove("selected2")
    buttonArray2[5].classList.remove("selected2")
    document.querySelector('#cantidaddecuotas2').classList.remove("selected2")

    if (i.value !== "Otra opción"){
      i.classList.add("selected2");
    }
    if (i.value == "Otra opción") {
      document.querySelector('#cantidaddecuotas2').classList.add("selected2")
    } 
    var x = document.getElementById('cantidaddecuotas2');
    // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas
    if (i.value !== "Otra opción" && x.style.display === "flex") {
      x.style.display = "none";
      x.value = null
    } 
  })
});

//Esta función es para mostrar el mostrar el campo para ingresar más opciones de cuotas. 

function showoptions3() {
  var x = document.getElementById('cantidaddecuotas');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    }
  }

  function showoptions4() {
    var x = document.getElementById('cantidaddecuotas2');
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      }
    }  
//Esta función es para mostrar las opciones avanzadas. Aún no funciona la posibilidad de cambiar el valor de la inflación.
function showoptions2() {
  var x = document.getElementById('impuestosellos');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    }
  }


//Esta formula calcula la suma de todas las cuotas y lo muestra cuando hacés click en el boton calcular//
function myFunction(e) {
  g = document.createElement('div');
  g.setAttribute("id", "resultados");
  document.querySelector("body").appendChild(g)
  document.querySelector('#resultados').style.display = "flex"; 

  // OPCIÓN 1
  if( document.querySelector('.selected').hasAttribute("data-test") && document.querySelector('.selected').getAttribute("data-test") == 0 ){
    // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
    cantidaddecuotas = 1;
  } else if( document.querySelector('.selected').hasAttribute("data-test")){
    cantidaddecuotas = parseFloat(document.querySelector('.selected').getAttribute("data-test")); 
  }
  else {
    cantidaddecuotas = parseFloat(document.querySelector('.selected').value); 
  } 
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    // Crea card de resultado de suma de cuotas en contado.
    paymentsSumResults=document.createElement('span')
    paymentsSumResults.setAttribute("id", "paymentsSumResults");
    document.querySelector("#resultados").appendChild(paymentsSumResults)


    paymentsSumOp1=document.createElement('span')
    paymentsSumOp1.setAttribute("id", "mensajederesultado3");
    paymentsSumResults.appendChild(paymentsSumOp1)
    paymentsSumResults.appendChild(document.createElement('br'))
    paymentsSumOp1.textContent =  "La suma de las cuotas de la primera opción es: "
    paymentsSum$Op1=document.createElement('span')
    paymentsSumOp1.appendChild(paymentsSum$Op1)
    paymentsSum$Op1.textContent = formatter.format(parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)) +".";


  // OPCIÓN 2
    if( document.querySelector('.selected2').hasAttribute("data-test2") && document.querySelector('.selected2').getAttribute("data-test2") == 0 ){
      // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
      cantidaddecuotasOp2 = 1;
    } else if( document.querySelector('.selected2').hasAttribute("data-test2")){
      cantidaddecuotasOp2 = parseFloat(document.querySelector('.selected2').getAttribute("data-test2")); 
    }
    else {
      cantidaddecuotasOp2 = parseFloat(document.querySelector('.selected2').value); 
    } 
      const valordelacuotaOp2 = document.getElementById('valordelacuota2').value;
      const valordelacuota2Op2 = valordelacuotaOp2.replace('$', '');
      const valordelacuota4Op2 = valordelacuota2Op2.replace(',', '');

      paymentsSumOp2=document.createElement('span')
      paymentsSumOp2.setAttribute("id", "mensajederesultado2Opt2");
      paymentsSumResults.appendChild(paymentsSumOp2)
      paymentsSumOp2.textContent =  "La suma de las cuotas de la segunda opción es: "
      paymentsSum$Op2=document.createElement('span')
      paymentsSumOp2.appendChild(paymentsSum$Op2)
      paymentsSum$Op2.textContent = formatter.format(parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2))  +"." ;
    PV();
  }


  function PV() {
    // OPCION 1    
    //Aquí se elije el valor de la cantidad de cuotas seleccionadas. si tiene el atributo data elige los botones si no el valor custom
    if( document.querySelector('.selected').hasAttribute("data-test")){
      cantidaddecuotas = parseFloat(document.querySelector('.selected').getAttribute("data-test")); 
    } else {
      cantidaddecuotas = parseFloat(document.querySelector('.selected').value); 
    }
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    anualInflation = document.querySelector('#inflacion__number').value
    // Cálculo de la tasa efectiva mensual a partir de la anual
    rate = (Math.pow((1+anualInflation/100),1/12)-1)*100 
    rate2 = parseFloat(rate) / 100.0;
    //const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
    var valoractualresult2 = 0;
    const valoractualDeCadaCuota=[]
    const numeroDeCadaCuota = []
    // Acá se calcula el valor actual de la suma de las cuotas//
    if(cantidaddecuotas!=0){
    for(var i = 0; i < cantidaddecuotas; i+=1){
      valoractualresult = valordelacuota4 / Math.pow(1+rate2,i+1);
      valoractualresult2 += valoractualresult ;
      valoractualDeCadaCuota.push(valoractualresult)
      numeroDeCadaCuota.push("Cuota Nº " + (i+1))
    }} else{
      valoractualresult = valordelacuota4
      valoractualresult2 = valordelacuota4
      valoractualDeCadaCuota.push(valoractualresult)
      numeroDeCadaCuota.push("Cuota Nº 0")
    }
    const arr1 = numeroDeCadaCuota;
    const arr2 = valoractualDeCadaCuota;

    const obj = {};

    arr1.forEach((element, index) => {
    obj[element] = arr2[index];
});


// Crea card de descripción de valores actuales.
actualValuesResults=document.createElement('span')
actualValuesResults.setAttribute("id", "actualValuesResults");
document.querySelector("#resultados").appendChild(actualValuesResults)


actualValueResult=document.createElement('span')
actualValueResult.setAttribute("id", "actualValueResult");
actualValuesResults.appendChild(actualValueResult)
actualValueResult.textContent =  "El valor actual de la opción 1 es: "
actualValue$Result = document.createElement('span')
actualValueResult.appendChild(actualValue$Result)
actualValue$Result.textContent = formatter.format(valoractualresult2) + ". " 
actualValuesResults.appendChild(document.createElement('br'));


    // OPCION 2
    if( document.querySelector('.selected2').hasAttribute("data-test2")){
      cantidaddecuotasOp2 = parseFloat(document.querySelector('.selected2').getAttribute("data-test2")); 
    } else {
      cantidaddecuotasOp2 = parseFloat(document.querySelector('.selected2').value); 
    }
    const valordelacuotaOp2 = document.getElementById('valordelacuota2').value;
    const valordelacuota2Op2 = valordelacuota.replace('$', '');
    const valordelacuota4Op2 = valordelacuota2.replace(',', '');

    // Acá se calcula el valor actual de la suma de las cuotas//
    var valoractualresult2op2 = 0;
    const valoractualDeCadaCuotaop2=[]
    const numeroDeCadaCuotaop2 = []


    if(cantidaddecuotasOp2!=0){
      for(var i = 0; i < cantidaddecuotasOp2; i+=1){
        valoractualresultop2 = valordelacuota4Op2 / Math.pow(1+rate2,i+1);
        valoractualresult2op2 += valoractualresultop2 ;
        valoractualDeCadaCuotaop2.push(valoractualresult2op2)
        numeroDeCadaCuotaop2.push("Cuota Nº " + (i+1))
      }} else{
        valoractualresultop2 = valordelacuota4Op2
        valoractualresult2op2 = valordelacuota4Op2
        valoractualDeCadaCuotaop2.push(valoractualresult2op2)
        numeroDeCadaCuotaop2.push("Cuota Nº 0")
      }
    const arr1Op2 = numeroDeCadaCuotaop2;
    const arr2Op2 = valoractualDeCadaCuotaop2;

    const objOp2 = {};

    arr1Op2.forEach((element, index) => {
    objOp2[element] = arr1Op2[index];
});



actualValueResultOp2=document.createElement('span')
actualValueResultOp2.setAttribute("id", "actualValueResultOp2");
actualValuesResults.appendChild(actualValueResultOp2)
actualValueResultOp2.textContent =  "El valor actual de la opción 2 es: "
actualValue$ResultOp2 = document.createElement('span')
actualValueResultOp2.appendChild(actualValue$ResultOp2)
actualValue$ResultOp2.textContent = formatter.format(valoractualresult2op2) +'.';


    firstResultMessage = document.createElement('span');
    firstResultMessage.setAttribute("id", "mensajederesultado3");
    document.getElementById('resultados').appendChild(firstResultMessage)
    //document.getElementById('resultado').insertBefore(paymentsSumResults)


    // CONDICIONALES
    if(valoractualresult2op2>valoractualresult2){
      firstResultMessage.textContent =  "Te conviene la primera opción de financiación: pagar tu compra en " + cantidaddecuotas + " cuotas de " + valordelacuota + " cada una."
    }
    if(valoractualresult2op2<valoractualresult2){
      firstResultMessage.textContent =  "Te conviene la segunda opción de financiación: pagar tu compra en " + cantidaddecuotasOp2 + " cuotas de " + valordelacuotaOp2 + " cada una."
    }
    let myString = JSON.stringify(obj);
    document.getElementById('resultado__detalle').textContent =  "El cálculo asume que los ingresos mensuales aumentan a la par que la inflación. " + "La inflación estimada mensual para este cálculo es " + Math.round(parseFloat( rate) *100)/100 +"%.";

    // Obtener una referencia al elemento canvas del DOM

chartCard=document.createElement('span')
chartCard.setAttribute('id','chartCard')
document.querySelector('#resultados').appendChild(chartCard) 

titleChart=document.createElement('span')
titleChart.setAttribute("id","title_grafica")
document.querySelector("#chartCard").appendChild(titleChart)
titleChart.textContent="Valor actual de cada cuota de la primera opción (Es el valor de cada cuota como si la pagaras hoy)"

chart=document.createElement('canvas')
chart.setAttribute("id", "grafica");
document.querySelector("#chartCard").appendChild(chart)


const $grafica = chart;
// Las etiquetas son las que van en el eje X. 
const etiquetas = arr1
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Valor actual",
    data: arr2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
  
  }


cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
cantidaddecuotas.replace('$', '');





//Estas funciones las obtuve de Stackoverflow y sirven para aplicar el formato de $$ en los inputs del form

// Jquery Dependency
$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
// format number 1000000 to 1,234,567
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
var input_val = input.val();

// don't validate empty input
if (input_val === "") { return; }

// original length
var original_len = input_val.length;

// initial caret position 
var caret_pos = input.prop("selectionStart");
  
// check for decimal
if (input_val.indexOf(".") >= 0) {

  // get position of first decimal
  // this prevents multiple decimals from
  // being entered
  var decimal_pos = input_val.indexOf(".");

  // split number by decimal point
  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

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
var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}

//

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});




