// variables
var randomNumber;
var attempts;
var winMessage;
var showMessage;
var lostMessage;
var attemptsMessage;
var message;

// Saiser : Enter
lostMessage = "Raté !!!";
showMessage = document.getElementById("message");
attemptsMessage = document.getElementById("attemptsMessage");
randomNumber = Math.floor(Math.random() * 100);
attempts =10;
// console.log(randomNumber)
// Cheat Code.
function triggerMe (){
    if(attempts > 1){
        --attempts
        var userInput = document.getElementById("userInput").value;
        // Controle de saiser
        if(isNaN(userInput) || userInput=== undefined){
            alert("Please Enter a Number!")
        } else {
            // Traitment
           //
               if (userInput == randomNumber){
                   if(attempts >= 5){
                       winMessage = 'Bravo!!!'
                   } else {
                       winMessage = "Félicitations! Gagné aprés " + (10 - attempts) + " attempts." ;
                   }
                   showMessage.innerHTML = winMessage
                 // -------------- //
               } else 
                    if (userInput > randomNumber){
                        showMessage.innerHTML = "Essayer plus petit que " + userInput + ", Essayez encore. "
                        attemptsMessage.innerHTML = attempts;
                    }
                    else  {
                        showMessage.innerHTML =  "Essayer plus grand  que " + userInput + ", Essayez encore."
                        attemptsMessage.innerHTML = attempts;
                    }
                    attemptsMessage.innerHTML = attempts;
                }

        userInput.value = ""
    } else {    
        showMessage.innerHTML = lostMessage
        attemptsMessage.innerHTML = 0;
    }
}






