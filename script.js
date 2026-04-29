const converterBtn = document.querySelector("#convertBtn");
const result = document.querySelector("#result");
const digitArea = document.querySelector("#digitArea");
const select_typeToChange = document.querySelector("#typeToChange");
const select_actualType = document.querySelector("#actualType");

function converter() {

    const valor = Number(digitArea.value);

    fetch(`https://v6.exchangerate-api.com/v6/9c197c77781b18459791e2fe/latest/${select_actualType.value}`)
    .then(res => res.json())
    .then(data => {
        if (valor == '' || valor != Number(valor)) {
            return;
        }else{
            const resultsValue = valor * data.conversion_rates[select_typeToChange.value]
            result.innerHTML = valor + select_actualType.value + " = " + resultsValue + select_typeToChange.value;
        }
        
    })
    // digitArea.value;
}