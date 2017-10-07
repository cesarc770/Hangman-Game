

// create an object game to store words, choose a word  tries

var game = {
	words : ["referee", "ronaldo", "goal", "pichichi"],
	tries : 10,
	chosenWord : function(){ return this.words[Math.floor(Math.random() * this.words.length)];},

}

//get element from html
var spaces = document.getElementById("spaces");
var guessed = document.getElementById("guessed");
var remaining = document.getElementById("remaining");
var result = document.getElementById("result");
var win = document.getElementById("win");

//create function to display word in spaces
var chosenWord = game.chosenWord();
var tries = game.tries;
var wins = 0;

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
function reduceTries(userInput){
	if(!spaces.innerHTML.toLowerCase().includes(userInput)){
		tries--;
	}
	return tries;
}

//function to display letters being input
function inputLetters(userInput){

	if(!guessed.innerHTML.toLowerCase().includes(userInput)){
		return userInput.toUpperCase();
	} else {
		return "";
	}
	
}

//to win game
function winGame(chosenWord){

if(spaces.innerHTML.toLowerCase() == chosenWord){
	result.innerHTML = "<p class=\"animate-result\">you win</p><div style=\"width:50%; height:200px;padding-bottom:15%;position:relative;\" class\"faded\"><iframe src=\"https://giphy.com/embed/3oD3YFjkwL38aAlfwI\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div>";
	wins++;
}
}

function lose(){
	if(tries === 0){
	result.innerHTML = "you lose";
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


//set up screen
function initialSetup(){
spaces.innerHTML = str.join("");
remaining.innerHTML = 10;
win.innerHTML = wins;
}

//reset game
function reset(){
	tries = game.tries;
	chosenWord = game.chosenWord();
	str = displayWord(chosenWord);
	spaces.innerHTML = str.join("");
	guessed.innerHTML = "";
	result.innerHTML = "";
	message.innerHTML = "";
	remaining.innerHTML = tries;
	var userInp = "";
}


//is the Game over, start it up again
function isGameOver(){

	if(!(tries > 0 && !(spaces.innerHTML.toLowerCase() == chosenWord))){
	message.innerHTML = "<br><div> <button class=\"btn btn-danger\" onclick=\"reset();\"> Play Again </button>  "
	                    + "</div>"
	}
}




//obtain input from user and save it in a variable

document.onkeyup = function(event){
	var userInput = event.key;

//everything that will happen when the key comes up goes in here
if(tries > 0 && !(spaces.innerHTML.toLowerCase() == chosenWord)){

	//add letter to guessed letters 

$("#guessed").append(inputLetters(userInput) + " ");
	//compare userInput and the chosenWord and add to space str
	console.log(compare(userInput, str, chosenWord));

	spaces.innerHTML = str.join("");

	//reduce tries if guess is not there
	reduceTries(userInput);
	remaining.innerHTML = tries;

	//win game
	winGame(chosenWord);
	win.innerHTML = wins;
	//lose game
	lose();

	isGameOver();
	}
	
}

// Creating buttons
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

 for(var i = 0; i < letters.length; i++){

      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color btn btn-success");

 
      letterBtn.attr("data-letter", letters[i]);


      letterBtn.text(letters[i]);

      $("#buttons").append(letterBtn);


      }

       $(".letter-button").on("click", function(){
if(tries > 0 && !(spaces.innerHTML.toLowerCase() == chosenWord)){
		var uInput = $(this).attr("data-letter");
		for(var i = 0; i < chosenWord.length; i++){
			if(uInput === chosenWord[i].toUpperCase()){
				str[i] = uInput;
		}
	}	
		$("#spaces").html(str);
		spaces.innerHTML = str.join("");

		reduceTries(uInput);
		remaining.innerHTML = tries;

		winGame(chosenWord);
		win.innerHTML = wins;

		lose();

		isGameOver();
	}
      });

//other special effects

function blinker() {
    $('.animate-result').fadeOut(500);
    $('.animate-result').fadeIn(500);
}

setInterval(blinker, 1000);



