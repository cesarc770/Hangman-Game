// an object to store words, choose a word

var game = {
	words : ["referee", "ronaldinho", "goal"],
	chosenWord : function(){ return this.words[Math.floor(Math.random() * this.words.length)];},

}

var chosenWord = game.chosenWord();
//display word using array of spaces
function displayWord(chosenWord){ 
	var str = [];
	for(var i = 0; i < chosenWord.length; i++){
		str[i] = " _ ";
	}
		return str;
	}
console.log(chosenWord);
console.log(str);