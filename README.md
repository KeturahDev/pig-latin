Specs:
The program does nothing to non-alphabetical characters, since they do not contain constants or vowels.
* input: 3
* output: 3

The program will recognize vowels and consonants regardless of capitolization.
* input: ApplE
* output: ApplE

The program adds "ay" to single-letter words beginning with a vowel.
* input: i
* output: iay

The program adds "ay" to single letter words beginning with consonants.
* input: x
* output: xay

The program adds "way" to multiple character words beginning with a vowel.
* input: apple
* output: appleway

For words beginning with "y", the program will treat "y" as a consant.
* input: yelp
* output: elpyay

For words beginning with one or more constants, the program will move all the first consecutive consonants to the end of the word and add "ay".
* input: thread
* output: eadthray

If the consonants include "qu", the program will move the "u" along with the "q".
* input: quake
* output: akequay


