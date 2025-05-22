//seleciona os elementos do formulário
const amount = document.getElementById("amount")


//formatano o input para aceitar apenas números
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")
    amount.value = value

}