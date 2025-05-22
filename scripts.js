//seleciona os elementos do formulário
const amount = document.getElementById("amount")


//obtém o valor atual do input e remove os caracteres não numéricos
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")

    //transforma o valor em centavos
    value = Number(value) / 100
    
    //atualiza o valor do input 
    amount.value = formatCurrencyBRL(value)

}

function formatCurrencyBRL(value) {
    //Formata o valor para o padrão brasileiro
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    
})
//Retorna o valor formatado
    return value
}
