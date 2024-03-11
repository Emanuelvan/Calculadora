function calculate() {
  var Tm = parseFloat(document.getElementById("Tm").value); //Se convierte a newtons
  var r = parseFloat(document.getElementById("r").value);
  var miu = parseFloat(document.getElementById("miu").value);
  var m = parseFloat(document.getElementById("m").value);
  var resultRadio2;
  var resultAceleracion;
  var g;
  const I = 0.5 * m * Math.pow(r, 2); //Momento de inercia de la rueda
  g = 9.81;
  if (
    isNaN(Tm) ||
    isNaN(r) ||
    isNaN(miu) ||
    isNaN(m) ||
    Tm < 0 ||
    r <= 0 ||
    miu < 0 ||
    m <= 0
  ) {
    alert(
      "Por favor, ingrese valores numéricos positivos para torque del motor, radio, coeficiente de fricción y masa del carro."
    );
    return;
  }
  resultAceleracion = (Tm * r) / (I * miu * g);
  console.log("Inercia: ", I);
  resultRadio2 = Math.sqrt((Tm * I) / (resultAceleracion * miu * g));
  document.getElementById("resultadorRadio").innerText =
    "Resultado Radio: " + resultRadio2.toFixed(2);
  document.getElementById("resultadorAceleracion").innerText =
    "Resultado Aceleracion: " + resultAceleracion.toFixed(2);
}

/* const I = 0.5 * m * Math.pow(r,2); //Momento de inercia de la rueda
  
  // Handle invalid input (non-numeric values, negative values, etc.)
  if (isNaN(tm) || isNaN(r) || isNaN(miu) || isNaN(m) || tm < 0 || r <= 0 || miu < 0 || m <= 0) {
    alert("Por favor, ingrese valores numéricos positivos para torque del motor, radio, coeficiente de fricción y masa del carro.");
    return;
  }

  const a = (tm * r) / (I * miu * g);
  console.log("Resultado aceleracion: ", a);
  const r2 = Math.sqrt((tm * I) / (a * miu * g)) 
   console.log("Resultado: ", r2); */
