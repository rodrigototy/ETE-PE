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
  todos.push(new Personagem("Jedi", "Obi-Wan")); //todos [®];
  todos.push(new Personagem("Jedi", "Yoda")); //todos [1];
  todos.push(new Personagem("Sith", "Darth Vader")); //todos[2];
  todos.push(new Personagem("Sith", "Darth Sidious")); //todos[3];

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
  $("#lutar").click(Lutar);

  //função Lutar
  function Lutar() {
    //estado inicial da animação
    $("#pV").html("").css({ "font-size": "16px" });

    var j = todos[$("#selectJ :selected").attr("value")];
    var s = todos[$("#selectS :selected").attr("value")];

    j.Forca = DefinirForca();
    s.Forca = DefinirForca();

    if (j.Forca > s.Forca) {
      $("#pV")
        .html(j.Nome + ", " + j.Tipo)
        .animate({ fontSize: "60px" });
    } else if (s.Forca > j.Forca) {
      $("#pV")
        .html(s.Nome + ", " + s.Tipo)
        .animate({ fontSize: "60px" });
    } else {
      $("#pV").html("Não houve vencedor");
    }
    $("#pJ").html(j.Nome + ", Teste de força: " + j.Forca);
    $("#pS").html(s.Nome + ", Teste de força: " + s.Forca);
  }
  //ação do botão
  $("#lutar").click(Lutar);
});
