const body = document.querySelector("body");

body.addEventListener("keypress", function(e) {
 if(e.key == "Enter") {
   adicionarCarro();
 }
});

//funçao adicionar carro
function adicionarCarro() {
  const inputVeiculo = document.querySelector(".input-veiculo").value;
  const inputPlaca = document.querySelector(".input-placa").value;
  const inputDono = document.querySelector(".input-dono").value;
  const ul = document.querySelector("ul");
   
  //verificando se há campo vazio
  if (!inputVeiculo || !inputDono || !inputPlaca) return ;
  

  //criando elemento li
  const li = document.createElement("li");

  //adicionando dados do carro e botao para liberar o veiculo
  li.innerHTML=`<h3>Veículo: ${inputVeiculo} | Placa: ${inputPlaca} | Dono: ${inputDono} </h3> 
  <a onclick="removerCarro(event)" class="liberar">Liberar</a>`;
  ul.appendChild(li);
}

  //funçao para remover o veiculo
  function removerCarro(event) {
   const li = event.target.parentElement;
   li.remove()
  }
