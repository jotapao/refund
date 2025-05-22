//seleciona os elementos do formulário
cosnt form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")


//obtém o valor atual do input e remove os caracteres não numéricos
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")

    //transforma o valor em centavos
    value = Number(value) / 100
    
    //atualiza o valor do input 
    amount.value = formatCurrencyBRL(value)

}

//Formata o valor para o padrão brasileiro
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    
})
//Retorna o valor formatado
    return value
}

form.onsubmit = (event) => {
    event.preventDefault()
}