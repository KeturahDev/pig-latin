$(document).ready(function(){
  let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  let letters = vowels.concat(consonants)
  
  $("#user-Form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#user-text").val()
    var userInputArray = userInput.split("")

    //checks if input is number
    userInputArray.forEach(function(userInput){
      if(letters.includes(userInput)){
          console.log("is letters");    
      }
      else{
          $('#output').append("<p>please do not enter a number</p>");    
      }
    });
    
    if ((userInput.length >= 1) && (vowels.includes(userInput[0]))) {
    console.log('first letter is vowel',userInput);
    
      var result = userInput + "way";
      console.log('VOWL what is result noW:', result)

  
    }
    else if((userInput.length >= 1) && (consonants.includes(userInput[0]))){
      // result.concat(userInput)

      for (var i = 0; consonants.includes(userInput.charAt(i)); i ++) {
        var firstLetter= userInput.charAt(0);
        firstLetter.remove();
        userInput = userInput + firstLetter;
      }

      var result = userInput +  +"ay";
      console.log('CONS what is result noW:', result)

    }
    else {
        // console.log("not single vowel");  
    }
    // console.log(result);
    $('#output').text(result);
    console.log('tada!:', result)
      
  })
})