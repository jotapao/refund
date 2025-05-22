//seleciona os elementos do formulário
const form = document.querySelector("form")
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

//Adiciona um evento de submit ao formulário e previne o comportamento padrão de recarregar a página
form.onsubmit = (event) => {

    event.preventDefault()

    //Cria um novo objeto de despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        creted_at: new Date(),
} 

//Chama a função que irá adicionar o ítem na lista de despesas
  expenseAdd(newExpense) 

 }

     

 function expenseAdd(newExpense) {
    try {
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas")
        
    }
 }