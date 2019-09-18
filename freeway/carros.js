//carro
let xCarros = [600, 600, 600, 600, 600, 600, 520, 520];
let yCarros = [40, 98, 150, 210, 260, 315, 320, 150, ];
let velocidadesCarros = [2,4,3, 3.8, 3.5, 2.8, 4, 3, 4];
let comprimentoCarros = [50, 50, 50, 50, 50, 50, 50, 50];
let altura = 40;


function mostraCarro(){
  //prrint("quantidade de carros: +imagensCarros.length);
  for(let i=0; i< imagensCarros.length;i++){
 image(imagensCarros[i],xCarros[i],yCarros[i],comprimentoCarros[i],altura);
  

 //image(imagensCarros[1],xCarros[1],yCarros[1],comprimentoCarros[1],altura);
// image(imagensCarros[2],xCarros[2],yCarros[2],comprimentoCarros[2],altura);
// image(imagensCarros[3],xCarros[3],yCarros[3],comprimentoCarros[3],altura);
// image(imagensCarros[4],xCarros[4],yCarros[4],comprimentoCarros[4],altura);
}
  
}


function movimentaCarro(){
    for(let i=0; i< imagensCarros.length;i++){
       xCarros [i] -= velocidadesCarros[i];
    
  
  //xCarros [i] -= velocidadesCarros[i];
  //xCarros [1] -= velocidadesCarros[1];
  //xCarros [2] -= velocidadesCarros[2];
  //xCarros [3] -= velocidadesCarros[3];
  //xCarros [4] -= velocidadesCarros[4];

    
  
  
 if(xCarros[i]<-100){
    xCarros[i]=700
   }
  }
 }

 //if(xCarros[1]<-100){
    //xCarros[1]=700
   
//}
// if(xCarros[2]<-100){
    //xCarros[2]=700
 //}
   
 //if(xCarros[3]<-100){
    //xCarros[3]=700
// }
   
 //if(xCarros[4]<-100){
    //xCarros[4]=700
   
//}



