// Recupera os dados salvos no Local Storage
//var plantas = localStorage.getItem("objDados");
const getData = async () => {
  var cards = JSON.parse(window.localStorage.getItem('db'));
  return cards;
}


const display = async () => {

  const dados = await getData();

  var data1 = "";
  var numero = 1;
  let dataDisplay = dados.plantas.map((object) => {
    
    data1 += `
    <div class = product>
              <div class = "card">
              <h1 class = "planta${numero}">${object.nome}</h1>
              <p class = "nomecientifico"><i> ${object.nomecien} </i></p>
              <p> Exposição a Luz diária: ${object.luz} | Intervalo de rega: ${object.rega} | Tipo de solo ideal: ${object.solo}</p>
              <p class = "descricao"> ${object.descricao} </p>
              </div>
    </div>
    `
    numero++;
  });

  document.getElementById("cards").innerHTML=data1;

}

display ();


/* PESQUISAR */
const search = () => {
  var contagem = 0;
  /* BUSCAR TEXTO INSERIDO E ATRIBUTOS CARDS */
  //document.getElementById("texto-inicial").style.display = "none";
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("cards")
  const product = document.querySelectorAll(".product")
  const pname = document.getElementsByTagName("h1")
  
  
  for (var i = 0; i < pname.length; i++) {
      let match = product[i].getElementsByTagName('h1')[0];
      
      /* VER SE O VALOR PROCURADO É IGUAL AO "BANCO DE DADOS" */
      if (match) {
          let textvalue = match.textContent || match.innerHTML

          /* COLOCAR ELEMENTOS CORRETOS VISÍVEIS */
          if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
              product[i].style.display = "block";
              contagem++;
              //document.getElementById("resultadoNegativo").style.display = "";
              //document.getElementById("texto-resultado").style.display = "block";
          }
          else {
              product[i].style.display = "none";
          }

          if (contagem == 0) {
              //document.getElementById("resultadoNegativo").style.display = "block";
              //document.getElementById("texto-resultado").style.display = "none";
          }
      }
  }

}




