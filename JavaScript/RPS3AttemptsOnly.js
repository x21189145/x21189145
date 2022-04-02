function LetsPlay(){

	//Play 3 times
	for(i=0;i<3;i++){
		var input, userGuess, myGuess, result;
		result="";
		//user guess inpute
		input=prompt("Enter your guess:");
		userGuess=input.toLowerCase();
		
		//computer guess - new guess each game
		var RandomNum= Math.floor((Math.random() * 3) + 1);
		if (RandomNum==1){
			myGuess="rock";
		}
		else if(RandomNum==2){
				myGuess="paper";
		}
		else{
			myGuess="scissors";
		}
		
		//determine the winner
		if (userGuess==myGuess){
			alert("Same guess. It's a draw.");
		}
		else if(userGuess=="rock" && myGuess=="scissors"){
			alert("Rock breaks scissors. You win!");
			result = "Game Over!!"+"<br />"+"You Win";
			document.getElementById("result").innerHTML = result;
			//Exit if player wins
			break;
		}
		else if(userGuess=="scissors" && myGuess=="rock"){
			alert("Rock breaks scissors. I win!");
			result = "Game Over!!"+"<br />"+"You lost";
			document.getElementById("result").innerHTML = result;
		}
		else if(userGuess=="rock" && myGuess=="paper"){
			alert("Paper wraps rock. I win!");
			result = "Game Over!!"+"<br />"+"You lost";
			document.getElementById("result").innerHTML = result;
		}
		else if(userGuess=="paper" && myGuess=="rock"){
			alert("Paper wraps rock. You win!");
			result = "Game Over!!"+"<br />"+"You Win";
			document.getElementById("result").innerHTML = result;
			//Exit if player wins
			break;
		}
		else if(userGuess=="paper" && myGuess=="scissors"){
			alert("Scissors cuts paper. I win!");
			result = "Game Over!!"+"<br />"+"You lost";
			document.getElementById("result").innerHTML = result;
		}
		else if(userGuess=="scissors" && myGuess=="paper"){
			alert("Scissors cuts paper. You win!");
			result = "Game Over!!"+"<br />"+"You Win";
			document.getElementById("result").innerHTML = result;
			//Exit if player wins
			break;
		}
		else{
			alert("Invalid entry. I win by default. Cheater.");
			result = "Game Over!!"+"<br />"+"You lost";
			document.getElementById("result").innerHTML = result;
		}
	}
}