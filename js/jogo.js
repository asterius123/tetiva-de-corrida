class Jogo {
  constructor(){}

  lerEstado(){
    var estadojogo = database.ref("estadojogo")
    estadojogo.on("value",function(data) {
      estadojogo=data.val()
    });
    
  }
  atualizar(estadojogo){
    database.ref("/").update({
      estadojogo: estadojogo
    });
  }
  start(){
    if (estadojogo === 0) {
      jogador=new Jogador();
      jogador.lerNum();
      form=new Form();
      form.display();
    }
  }
  play(){
    form.esconderForm();
    textSize(30);
    text("comecou o jogo", 120, 100);
    Jogador.lerJogadores();
    if (todosJogadores!== undefined ) {
      var mostrasPos = 130
      for (var jgdr in todosJogadores) {
        mostrasPos += 20
        textSize(15);
        text(todosJogadores[jgdr].nome+": "+todosJogadores[jgdr].distancia, 120, mostrasPos);
      }
      if (keyDown ("UP")&& jogador.indice!== null ) {
        jogador.distancia+= 50
        jogador.atualizar();
      }
    }

  }
}