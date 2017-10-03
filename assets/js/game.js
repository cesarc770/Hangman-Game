

// create an object game to store words, choose a word  tries

var game = {
	words : ["referee", "ronaldinho", "goal"],
	tries : 10,
	chosenWord : function(){ return this.words[Math.floor(Math.random() * this.words.length)];},

}

//get element from html
var spaces = document.getElementById("spaces");
var guessed = document.getElementById("guessed")

//create function to display word in spaces
var chosenWord = game.chosenWord();
var tries = game.tries;

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

//function to reduce tries --- not working yet / not being used
function reduceTries(){
	tries = tries - 1;
	return tries;
}

//function to display letters being input
function inputLetters(userInput){

	if(guessed.innerHTML.indexOf(userInput) === -1){
		guessed.innerHTML += userInput.toUpperCase()+ " ";
		
	}
	
}

//Function to compare userInput to word and store it in an array

function compare(userInput, str, chosenWord) {
	for(var i = 0; i < chosenWord.length; i++){
		if(userInput === chosenWord[i]){
			str[i] = userInput.toUpperCase();
		}

	} return str;

}

spaces.innerHTML = str.join("");


//obtain input from user and save it in a variable

document.onkeyup = function(event){
	var userInput = event.key;

//everything that will happen when the key comes up goes in here

//

//add letter to guessed letters 
inputLetters(userInput);

//compare userInput and the chosenWord and add to space str
console.log(compare(userInput, str, chosenWord));

spaces.innerHTML = str.join("");

}


