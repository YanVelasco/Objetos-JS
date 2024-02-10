let listaItens = [];

let form = document.getElementById('form-itens');
const itensInput = document.querySelector('#receber-item')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    salvarItem();
})

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (checarDuplicado) {
        alert("Você ja adicionol esse item")
    }

    listaItens.push({
        valor: comprasItem
    })

    console.log(listaItens);
}