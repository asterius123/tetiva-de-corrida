class Jogador{
  constructor(){
    this.indice = null;
    this.distancia = 0;
    this.nome = null;
  }
  lerNum(){
    var refNum = database.ref("jogadores");
    refNum.on("value",function(data){
      numJogadores = data.val()
    });
  }
  atualizarNum(num){
    database.ref("/").update({
      jogadores: num
    })
  }
  atualizar(){
    var indiceJogador= "todosJogadores/jogador"+this.indice
    database.ref(indiceJogador).set({
      nome: this.nome,
      distancia: this.distancia
    })
  }
  static lerJogadores(){
    var infoJogadores = database.ref("todosJogadores");
    infoJogadores.on("value",function(data) {
      todosJogadores = data.val();
    });
  }
}