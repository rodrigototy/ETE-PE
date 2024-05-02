$(document).ready(function () {
  let todos = new Array();

  //função construtora do objeto personagem
  function Personagem(Tipo, Nome, Forca) {
    this.Tipo = Tipo;
    this.Nome = Nome;
    this.Forca = new Number(Forca);
  }

  function DefinirForca() {
    let minhaForca = 0;
    for (let i = 0; i < 3; i++) {
      minhaForca += Math.floor(Math.random() * 6 + 1);
    }
    return minhaForca;
  }
  //inserindo personagens no array
  todos.push(new Personagem("Jedi", "Obi-Wan", DefinirForca())); //todos [®];
  todos.push(new Personagem("Jedi", "Yoda", DefinirForca())); //todos [1];
  todos.push(new Personagem("Sith", "Darth Vader", DefinirForca())); //todos[2];
  todos.push(new Personagem("Sith", "Darth Sidious", DefinirForca())); //todos[3];

  //inserindo nomes nas listas de opções
  $("<option>" + todos[0].Nome + "</option>")
    .appendTo("#selectJ")
    .attr("value", 0); //atributo value com mesmo valor do índice.
  $("<option>" + todos[1].Nome + "</option>")
    .appendTo("#selectJ")
    .attr("value", 1);
  $("<option>" + todos[2].Nome + "</option>")
    .appendTo("#selectS")
    .attr("value", 2);
  $("<option>" + todos[3].Nome + "</option>")
    .appendTo("#selectS")
    .attr("value", 3);

  //ação do botão
  $("#selecionar").click(Selecionar);

  //função Selecionar
  function Selecionar() {
    let j = todos[$("#selectJ :selected").attr("value")]; // O atributo value irá retornar o índice.
    let s = todos[$("#selectS :selected").attr("value")];

    $("#pJ").html(j.Tipo + ", " + j.Nome + ", " + j.Forca);
    $("#pS").html(s.Tipo + ", " + s.Nome + ", " + s.Forca);
  }
});
