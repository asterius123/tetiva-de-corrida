var database;
var jogo , form, jogador;
var estadojogo = 0;
var numJogadores ;
var todosJogadores;

function setup() {
  database = firebase.database();
  createCanvas(400, 400);
  jogo= new Jogo();
  jogo.lerEstado();
  jogo.start();
}

function draw() {
  background(255);
  drawSprites();
  if (numJogadores >= 4 ) {
    jogo.atualizar(1);
  }
  if (estadojogo === 1) {
    clear();
    jogo.play();
  }
}