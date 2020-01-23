$(document).ready(function(){
    let vowels = ["a", "e", "i", "o", "u", "y"]
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
    let alph = vowels.concat(consonants)
    $("#user-Form").submit(function(event){
        event.preventDefault();
        var userInputs = $("input#user-text").val().split("")
        console.log(userInputs);
        userInputs.forEach(function(userInput){
            
            if(alph.includes(userInput)){
                console.log(userInput);
                
            }
            else{
                console.log("please enter a number");
                
            }
        });
    })
})