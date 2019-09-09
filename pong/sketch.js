//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [93,36,173];
let velocidadeX = 6; 
let velocidadeY= 6;

//variaveis raquete
let alturaRaquete= 100;
let larguraRaquete = 20;

//variaveis minha raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [245, 5, 172];

//variaveis  raquete oponente
let xRaquete2 = 0;
let yRaquete2 = 150;
let corRaquete2 = [120, 14, 88];

//variaveis de pontuaçao
let meusPontos = 0;
let pontosOponente=0;

//variaveis sons
let raquetada;
let ponto;

function preload(){
 raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');

}




//config inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("largura: "+largura + " altura: "+ altura);
}

//desenha - looping infinito while(1)
function draw() {
  background(245, 169, 222);
  //se meus pontos nao forem maoires que 10 ou iguais a 10
  //ou os do oponentes ,entao joga!!!!
   if(!(meusPontos >=10 || pontosOponente >=10))
  jogo();
  else
  mostraVencedor();
  
 
}//draw

function mostraVencedor(){
      if(meusPontos >=10){
  fill(255, 0, 178);
  rect(300,0,300,400);
  textAlign(CENTER);
  fill(0);
  textSize(32);
  text("Lado Direto é Campeão!!" ,300,200);      
}else{
    fill(255, 0, 178);
  rect(0,0,300,400);
  textAlign(CENTER);
  fill(0);
  textSize(32);
  text("Lado Esquerdo é Campeão!!" ,300,200); 
  

}
 }

  function jogo(){
 
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaquete2();
  verificaColisaoRaquete2();
  mostraRaquete2();
  pontosDaPartida();
  mostrarPontos();

}

function pontosDaPartida(){
  if (xBolinha < 10) {
   meusPontos +=1; //meuspontos = meusspontos +1
    ponto.play();
  }
  
 if(xBolinha > 589){
  pontosOponente +=1; //pontosponente = pontosoponente +1
   ponto.play();//aaaaaaaaaaaaaaaanannanan
 
 }
  
}


function mostrarPontos(){
  textSize(32);
  strokeWeight(2);
  stroke(93,36,173);
  
  fill(227, 111, 192);//cor retangulo
  rect(425,12,60,35,10);//meus pontos 
  rect(125,12,60,35,10);// oponente pontos
  
  fill(255, 0, 178);
  textAlign(CENTER);
  text(pontosOponente, 145, 40);
  text(meusPontos, 445, 40);



}


function verificaColisaoRaquete(){
  if(xBolinha + raio > xMinhaRaquete && 
     yBolinha - raio < yMinhaRaquete + alturaRaquete &&
     yBolinha + raio > yMinhaRaquete){
    
    if(!(xBolinha <300 && velocidadeX > 0 || xBolinha> 300 && velocidadeX < 0)){
  
    velocidadeX *= -1;
      raquetada.play();
    }
  }
}
  
  function verificaColisaoRaquete2(){
  if(xBolinha - raio < xRaquete2 + larguraRaquete &&
     yBolinha + raio < yRaquete2 + alturaRaquete &&
     yBolinha - raio > yRaquete2){
    
    if(!(xBolinha < 300 && velocidadeX > 0 || xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
      raquetada.play();
       }
  }
  
}



function movimentaMinhaRaquete() {
  
  //teto e chao raquetes
  
  
  if(keyIsDown(UP_ARROW)){ //seta pra cima - 87 W
    if(yMinhaRaquete <0){
       yMinhaRaquete = 0;//corrigindo
       }else
     yMinhaRaquete -=7;   //velocidade da raquete    
     
}
  
  if(keyIsDown(DOWN_ARROW)){//seta pra baixo - 83 S
    if(yMinhaRaquete > 300){
      yMinhaRaquete = 300 ; //corrigindo
    }else

     yMinhaRaquete += 7;    //velocidade da raquete
     }
  
}

function movimentaRaquete2() {
  
  if(keyIsDown(87)){ //seta pra cima - 87 W
     if(yRaquete2 <0){
       yRaquete2 = 0;//corrigindo
       }else
     yRaquete2 -=7;   //velocidade da raquete    
     }
  
  if(keyIsDown(83)){//seta pra baixo - 83 S
     if(yRaquete2 >300){
       y2Raquete2 = -300;//corrigindo
       }else
     yRaquete2 += 7;    //velocidade da raquete
     }
  
}




function mostraRaquete(){
  fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  

}

function mostraRaquete2(){
  fill(corRaquete2);
  rect(xRaquete2, yRaquete2, larguraRaquete, alturaRaquete);
  

}

  
function verificaColisao(){
 //colisao horizontal com bordas laterais
      if(xBolinha + raio > largura || xBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeX *= -1; 
      }
  
      if(yBolinha + raio > altura || yBolinha - raio < 0){
            //velocidadeX = velocidadeX * -1
       velocidadeY *= -1; 
      }
}

function movimentaBolinha(){
  if(frameCount > 300){
    
  
  //velocidade horizontal
  xBolinha += velocidadeX;
        //velocidade vertical
  yBolinha = yBolinha + velocidadeY;
  }
}

function mostraBolinha(){
  noStroke();
  fill(corBolinha)
  circle(xBolinha,yBolinha,diametro);
}
  