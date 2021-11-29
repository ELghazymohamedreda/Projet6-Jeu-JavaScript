 // declaration des variables 
 var randomNumber;
 var userInput;
 var message;
 // entrer: saiser 
  randomNumber = Math.floor(Math.random() * 100);
  userInput = prompt("Entrez un numéro");
 // traitement 
 var n = parseInt(userInput);
 if (randomNumber > userInput) {

     message = "il est supérieur à " + " " + userInput;

 }

 else{

     message = "il est plus petit que " + " " + userInput;
 }
 // sortie: Affichage
 alert(message);