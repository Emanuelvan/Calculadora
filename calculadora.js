function calculate() {
    var Tm = parseFloat(document.getElementById('Tm').value)*9.81;//Se convierte a newtons
    var r = parseFloat(document.getElementById('r').value);
    var miu = parseFloat(document.getElementById('miu').value);
    var m = parseFloat(document.getElementById('m').value);
    var resultRadio2;
    var resultAceleracion;
    var g
    g = 9.81
    resultRadio2 = Tm / ((miu*m*g)*r)
    resultAceleracion = Math.pow(resultRadio2,2)*miu/2
    document.getElementById('resultadorRadio').innerText = "Resultado Radio: " + resultRadio2.toFixed(2);
    document.getElementById('resultadorAceleracion').innerText = "Resultado Aceleracion: " + resultAceleracion.toFixed(2);
    
}
