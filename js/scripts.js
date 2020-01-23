$(document).ready(function(){
    let vowels = ["a", "e", "i", "o", "u", "y"]
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
    let letters = vowels.concat(consonants)
    let lettersUpper = letters.toString().toUpperCase().split("")
    $("#user-Form").submit(function(event){
        event.preventDefault();
        var userInputs = $("input#user-text").val().split("")
        console.log(userInputs);
        userInputs.forEach(function(userInput){
            
            if(letters.join(lettersUpper).includes(userInput)){
                console.log(userInput);
                
            }
            else{
                console.log("please do not enter a number");
                
            }
        });
    })
})