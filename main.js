let listaItens = [];

let form = document.getElementById("form-itens");
const itensInput = document.querySelector("#receber-item");
const ulItens = document.querySelector("#lista-de-itens");
const ulItensComprados = document.querySelector("#itens-comprados");

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
      checar: false,
    });

    console.log(listaItens);
  }
}

function mostrarItem() {
  ulItens.innerHTML = "";
  ulItensComprados.innerHTML = "";

  listaItens.forEach((elemento, index) => {
    if (elemento.checar) {
      ulItensComprados.innerHTML += `
          <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" checked class="is-clickable" />
                <span class="itens-comprados is-size-5">${elemento.item}</span>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
      `;
    } else {
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
    }
  });

  const inputCheck = document.querySelectorAll('input[type="checkbox"]');

  inputCheck.forEach((i) => {
    i.addEventListener("click", (event) => {
      const valorDoElemento =
        event.target.parentElement.parentElement.getAttribute("data-value");
      listaItens[valorDoElemento].checar = event.target.checked;
      mostrarItem();
    });
  });
}