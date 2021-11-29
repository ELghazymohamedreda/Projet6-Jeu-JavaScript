// declaration des variables 
var btn;
var output;
var number;
var nombreDeviner;


 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('outputtext');
 number = Math.floor(Math.random() * 100);
 
 // traitement 

btn.addEventListener('click', function(){
  
  nombreDeviner = document.getElementById('userInput').value;
  if (nombreDeviner == number){
    output.innerHTML = 'Correct'
  } else{
    if (nombreDeviner < number){
        output.innerHTML = "Essay un Nombre plus Petit."
    }
    else {
      output.innerHTML = "Essay un Nombre plus Grand."
    }

  } 

});






           