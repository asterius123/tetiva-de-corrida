class Form {
  constructor(){
    this.entrada = createInput("nome");
    this.botao = createButton("jogar");
    this.mensagem = createElement("h3");
  }
  display(){
    var titulo;
    titulo = createElement("h2");
    titulo.html("Corrrida Dos Bixo");
    titulo.position(130,0);
    this.entrada.position(130,160);
    this.botao.position(190,190);
    this.botao.mousePressed(()=>{
      jogador.nome = this.entrada.value();
      this.entrada.hide();
      this.botao.hide();
      this.mensagem.html("ola "+ jogador.nome);
      this.mensagem.position(130,190);
      numJogadores++
      jogador.indice = numJogadores;
      jogador.atualizar();
      jogador.atualizarNum(numJogadores);
    })
    
  }
  esconderForm(){
    this.entrada.hide();
    this.botao.hide();
    this.mensagem.hide();
  }
}