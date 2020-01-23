$(document).ready(function(){
  let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  let letters = vowels.concat(consonants)
  
  $("#user-Form").submit(function(event){
    let result = []
    event.preventDefault();
    var userEntry = $("input#user-text").val()
    var userInputs = userEntry.split("")
      userInputs.forEach(function(userInput){
          
        if(letters.includes(userInput)){
            
            console.log("is letter");    
        }
        else{
            result.push("please do not enter a number");    
        }
      });
        if  ((userInputs.length >= 1) && (vowels.includes(userInputs[0]))) {
        console.log(userInputs);
        
        result.push(userEntry)
        console.log(result);
        result.join(" ");

        
        result.push("ay")
        console.log("test1");
        }
        else if((userInputs.length === 1) && (consonants.includes(userInputs[0]))){
            result.concat(userInputs)
            result.push("ay")
        }
        else {
            console.log("not single vowel");  
        }
        console.log(result);
      
  })
})