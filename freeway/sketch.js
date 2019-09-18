function setup() {
  createCanvas(500, 400);
   trilhaSonora.loop();
}



function draw() {  //desemha jogo
  
  
  
  background(imagemDaEstrada);
 if(!(placar >= 10 || placar2 >=10)){
   
    jogo();
 
 }else{
    mostraVencedor();
    }
}



function jogo(){
 mostraAutor(); 
  mostraAutor2(); 
  movimentaVaca();
  movimentaVaca2();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  verificaColisao2();
  mostraPlacar();
  mostraPlacar2();

 // voltaAPI();
  
  
}



   
