let listaItens = [];

let form = document.getElementById('form-itens');
const itensInput = document.querySelector('#receber-item')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    salvarItem();
})

function salvarItem() {
    const comprasItem = itensInput.value;

    listaItens.push({
        valor: comprasItem
    })

    console.log(listaItens);
}