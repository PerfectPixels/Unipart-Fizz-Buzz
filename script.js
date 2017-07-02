"use strict";

let output = document.getElementById('output');

function startGame(fizz = 3, buzz = 5, length = 100) {
	output.innerHTML = '';
	
	for(let i = 1; i <= length ; i++){

		if (i%fizz === 0){
			output.innerHTML += 'Fizz ';
		} 
		
		if (i%buzz === 0){
			output.innerHTML += 'Buzz';
		} 
		
		if (i%fizz !== 0 && i%buzz !== 0) {
			output.innerHTML += i;
		}

		output.innerHTML += '<br>';
	}
}

