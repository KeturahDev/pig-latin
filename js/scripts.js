$(document).ready(function(){
    let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    let letters = vowels.concat(consonants)
    let lettersUpper = letters.toString().toUpperCase().split("")
    $("#user-Form").submit(function(event){
        event.preventDefault();
        var userInputs = $("input#user-text").val().split("")
        console.log(userInputs);
        userInputs.forEach(function(userInput){
            
            if(letters.join(lettersUpper).includes(userInput)){
                console.log(userInput);
                
                if  ((userInputs.length === 1) && (vowels.includes(userInputs[0]))) {

                    console.log("is single vowel");
                    
                }
                else {
                    console.log("not single vowel");
                    
                }












            }
            else{
                console.log("please do not enter a number");
                
            }
        });
    })
})