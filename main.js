let listaItens = [];

let form = document.getElementById("form-itens");
const itensInput = document.querySelector("#receber-item");
const ulItens = document.querySelector("#lista-de-itens");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  salvarItem();
  mostrarItem();
});

function salvarItem() {
  const comprasItem = itensInput.value;
  const checarDuplicado = listaItens.some(
    (elemento) => elemento.item.toUpperCase() === comprasItem.toUpperCase()
  );

  if (checarDuplicado) {
    alert("Você já adicionou esse item");
  } else {
    listaItens.push({
      item: comprasItem,
    });

    console.log(listaItens);
  }
}

function mostrarItem() {
  ulItens.innerHTML = "";
  listaItens.forEach((elemento, index) => {
    ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${elemento.item}"></input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
        `;
  });
}
