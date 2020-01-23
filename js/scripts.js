$(document).ready(function(){
    let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    let letters = vowels.concat(consonants)
    
    $("#user-Form").submit(function(event){
        let result = []
        event.preventDefault();
        var userInputs = $("input#user-text").val().split("")
        console.log(userInputs);
        userInputs.forEach(function(userInput){
            
            if(letters.includes(userInput)){
                console.log(userInput);
                
                if  ((userInputs.length === 1) && (vowels.includes(userInputs[0]))) {
                    result.push(userInputs + "ay")

                    
                
                }
                else if((userInputs.length === 1) && (consonants.includes(userInputs[0]))){
                    result.push(userInputs + "ay")




                }
                else {
                    console.log("not single vowel");
                    
                }












            }
            else{
                result.push("please do not enter a number");
                
            }
        });
        console.log(result);
        
    })
})