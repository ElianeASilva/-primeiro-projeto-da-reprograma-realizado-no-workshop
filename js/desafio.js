var inputvalorH = document.querySelector('#valor-hora');
var inputhorasP = document.querySelector('#horas-projeto');

var resposta = document.querySelector('span');

function calcular () {
    var v_Horas = inputvalorH.valueAsNumber;
    var h_Projeto = inputhorasP.valueAsNumber;

    var valorProjeto = v_Horas * h_Projeto;
    
    var v_duascasas = valorProjeto.toFixed(2);
    
    resposta.textContent = "O valor do projeto é R$ "   + v_duascasas;
}
