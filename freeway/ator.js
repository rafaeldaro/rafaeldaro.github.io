//ator-vaca
let vacaY = 366 ;

let vacaY2 = 366 ;

let vacaX = 100;

let vacaX2 = 180;

let colidiu = false;

let placar =0;
let placar2 =0;




function mostraVencedor(){
   if(placar >= 10){
    fill(255,130,0);
    textAlign(CENTER); 
    fill(252, 186, 3);
    noStroke();
    textSize(30); 
    text("Lado direiro venceu",300,200);  
    }else{
    fill(255,130,0);
    textAlign(CENTER);
    noStroke();
    fill(252, 186, 3);
    textSize(30);
    text("Lado esquerdo venceu ",300,200);
    } 
}



function mostraPlacar(){
  if(vacaY <15){
    placar+=1;
    voltaAPI();
    somPonto.play();
    
      }
  
 textAlign(CENTER);
  textSize(25);
  fill(color (255,240,60));
  text(placar, 160,30);

  
  
}

//plcar oponente
function mostraPlacar2(){
  if(vacaY2 <15){
    placar2+=1;
    voltaAPI2();
    somPonto.play();
  
  }
  
 textAlign(CENTER);
  textSize(25);
  fill(color (255,240,60));
  text(placar2, 100,30);
}



function verificaColisao(){
for(let i=0; i < imagensCarros.length; i++){
   colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura,vacaX, vacaY,  3);
  
  if(colidiu){
    console.log("colidiu")
    voltaAPI();
    
    if(placar >0)
      placar -=1;
   }
 }
}



//colisao 2
function verificaColisao2(){
for(let i=0; i < imagensCarros.length; i++){
   colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura,vacaX2, vacaY2, 3);

  if(colidiu){
    console.log("colidiu")
    voltaAPI2();
    
    if(placar2 >0)
      placar2 -=1;
   }
 }
}


function voltaAPI(){
vacaY = 369;

}


function voltaAPI2(){
vacaY2 = 369;

}


function mostraAutor(){
 image(imagemDoAtor,180, vacaY, 30,30);
}

//ator 2
function mostraAutor2(){
 image(imagemDoAtor2,100, vacaY2, 30,30);
}



function movimentaVaca(){
  
  if(keyIsDown(UP_ARROW)) {
    //se a seta pra cima for pressionada e o vacay for maior q 5 SOBE
    if(vacaY > 5){
       
    
   vacaY -=5
      }
   }
    if(keyIsDown(DOWN_ARROW)) {
      
       if(vacaY < 366){
         
    vacaY +=5
        }
    }
}

//movimenta vacas 2

function movimentaVaca2(){
  
  if(keyIsDown(87)) {
    //se a seta pra cima for pressionada e o vacay for maior q 5 SOBE
    if(vacaY2 > 5){
       
    
   vacaY2 -=5
      }
   }
    if(keyIsDown(83)) {
      
       if(vacaY2 < 366){
         
    vacaY2 +=5
        }
    }
}

