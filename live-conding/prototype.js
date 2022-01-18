//declaration des varible
var bouton
var sortie
var nombre
var nombreDeviner
//entré:saisir
bouton = document.getElementById('bouton');
sortie = document.getElementById('sortietext');
nombre = Math.floor(Math.random()*100);
//tratement
 function entre(){
    console.log("test");
 nombreDeviner = document.getElementById('entréDeUtilisateur').value;
    if(nombreDeviner== nombre){
        sortie.innerHTML = 'correct'
    }
    else{
        if(nombreDeviner<nombre){
         sortie.innerHTML = "le nombre que vous avez choisie est plus petit";
        }
         else{
            sortie.innerHTML = "le nombre est plus grand que vous avez choisir"
          }  
    }
      

};