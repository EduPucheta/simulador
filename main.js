var rate = 6.2 // Esta variable es el valor de la inflación mensual//

//Funcion cntructora de tabla de cuotas.

class cuotas{
  constructor(a,b){
    this.cuota=a,
    this.cuota=b
  }
}

const prueba = new cuotas("Cuota 1","$200")

console.log(prueba)


//Esta formula calcula la suma de todas las cuotas y lo muestra cuando hacés click en el boton calcular//
function myFunction(e) {
    const cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    document.getElementById('mensajederesultado').textContent =  "La suma de las cuotas es: "
    document.getElementById('spanResult').textContent = formatter.format(parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)) ;
    event.preventDefault();
    PV();
  }


  function PV() {
    cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    cantidaddecuotas.replace('$', '');
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    rate2 = parseFloat(rate) / 100.0;
    const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
    var valoractualresult2 = 0;
    const valoractualDeCadaCuota=[]
    const numeroDeCadaCuota = []
    // Acá se calcula el valor actual de la suma de las cuotas//
    for(var i = 0; i < cantidaddecuotas; i+=1){
      valoractualresult = valordelacuota4 / Math.pow(1+rate2,i+1);
      valoractualresult2 = valoractualresult2 + valoractualresult ;
      valoractualDeCadaCuota.push(valoractualresult)
      numeroDeCadaCuota.push("Cuota Nº " + (i+1))
    }
    const arr1 = numeroDeCadaCuota;
    const arr2 = valoractualDeCadaCuota;

    const obj = {};

    arr1.forEach((element, index) => {
    obj[element] = arr2[index];
});

    // 👉️ {name: 'Tom', age: 30, country: 'Chile'}
    console.log(obj);
    console.log(valoractualDeCadaCuota)
    console.log(numeroDeCadaCuota )
    document.getElementById('mensajederesultado2').textContent =  "El valor actual de las cuotas es: "
    document.getElementById('spanResult2').textContent = formatter.format(valoractualresult2) ;
    const precioencontado3 = document.getElementById('precioencontado').value;
    const precioencontado2 = precioencontado3.replace('$', '');
    const precioencontado = precioencontado2.replace(',', '');
    if(precioencontado>valoractualresult2){
      let ahorro = precioencontado - valoractualresult2;
      document.getElementById('mensajederesultado3').textContent =  "Te conviene pagar en cuotas. Te estás ahorrando " + formatter.format(ahorro) + " producto de la inflación."
    }
    if(precioencontado<valoractualresult2){
      document.getElementById('mensajederesultado4').textContent =  "Te conviene en contado."
    }
    let myString = JSON.stringify(obj);
    // document.getElementById("mensajederesultado5").innerHTML = myString;
    document.getElementById('resultado__detalle').textContent =  "El cálculo asume que los ingresos mensuales aumentan a la par que la inflación. " + "La inflación estimada mensual para este cálculo es " + rate +"%.";
    document.getElementById('title_grafica').textContent =  "Valor actual de cada cuota"

    // Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
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

//Esta función es para mostrar el mostrar el campo para ingresar más opciones de cuotas. 

function showoptions3() {
  var x = document.getElementById('cantidaddecuotas');
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


var rate3 = document.getElementById("inflacion__number"); // Esta variable es para obtener el valor de la inflación (Aún no se está usando)//

//Esta variable es para extraer el valor de la inflación anual del campo de funciones avanzadas y dividirla por doce (Aún no se está usando)//
function formula(){
  return rate = rate3.value/12;
}




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




