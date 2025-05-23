//seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//Seleciona o elemento da lista de despesas
const expenseList = document.querySelector("ul")
const expsensesQuantity = document.querySelector("aside header p span")


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
 
 //Adiciona um ítem na lista de despesas
 function expenseAdd(newExpense) {
    try {
        //Cria o elemento de (li) para adicionar o ítem na lista de despesas.
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        //Cria o ícone da categoria
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        //Cria a informação da despesa
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        //Cria o nome da despesa
        const expenseName = document.createElement("strong")
         expenseName.textContent = newExpense.expense

        //Cria a categoria da despesa
        const expenseCategory = document.createElement ("span")
        expenseCategory.textContent = newExpense.category_name

        //Adciona nome e categoria da despesa
        expenseInfo.append(expenseName, expenseCategory)

        //cria o valor da despesa
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase()
        .replace("R$", "") }`

        //Cria o ícone de remover a despesa
        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "Remover")

        //adiciona as informações no ítem
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

        //Adiciona o ítem na lista
        expenseList.append(expenseItem) 

        //Atualiza os totais
        updateTotals()
    }

     catch (error) {
        alert ("Não foi possível atualizar a lista de despesas.")
        console.log(error)
        
    }
 }

 //Atualiza os totais
 function updateTotals() {
    try {
        //Recupera todos os itens da lista de despesas
        const items = expenseList.children
        console.log(items)

        //Atualiza a quantidade de despesas
        expsensesQuantity.textContent = `${items.length} ${
        items.length > 1 ? "despesas" : "despesa"
    }`
        
    } catch (error) {
       
        alert("Não foi possível atualizar os totais.")
        
    }
}