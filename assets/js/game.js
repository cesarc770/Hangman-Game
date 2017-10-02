// create an object game to store words, choose a word  tries

var game = {
	words : ["referee", "ronaldinho", "goal"],
	tries : 10,
	chosenWord : function(){ return this.words[Math.floor(Math.random() * this.words.length)];},

}

//create function to display word in spaces
var chosenWord = game.chosenWord();

function displayWord(chosenWord){ 
	var str = [];
	for(var i = 0; i < chosenWord.length; i++){
		str[i] = " _ ";
	}
		return str;
	}


var str  = displayWord(chosenWord);
console.log(chosenWord);
console.log(str);

//Function to compare userInput to word and store it in an array

function compare(userInput, str, chosenWord) {
	for(var i = 0; i < chosenWord.length; i++){

		if(userInput === chosenWord[i]){

			str[i] = userInput;
		}
	} return str;


}

var a = compare("a", [" _ ", " _ ", " _ "], "dad");

console.log(a);


//obtain input from user and save it in a variable

document.onkeyup = function(event){
	var userInput = event.key;

//everything that will happen when the key comes up goes in here




}
