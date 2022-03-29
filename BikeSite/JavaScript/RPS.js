function letsplay(){
	//user guess
	var input, userGuess, myGuess, result;
	input=prompt("Enter your guess:");
	userGuess=input.toLowerCase();
	
	//computer guess
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
	
	document.getElementById("yourGuess").innerHTML = "You picked: "+userGuess;
	document.getElementById("myGuess").innerHTML = "I picked: "+myGuess;
	
	if (userGuess==myGuess){
		document.getElementById("result").innerHTML = "Same guess. It's a draw.";
	}
	else if(userGuess=="rock" && myGuess=="scissors"){
		document.getElementById("result").innerHTML = "Rock breaks scissors. You win!";
	}
	else if(userGuess=="scissors" && myGuess=="rock"){
		document.getElementById("result").innerHTML = "Rock breaks scissors. I win!";
	}
	else if(userGuess=="rock" && myGuess=="paper"){
		document.getElementById("result").innerHTML = "Paper wraps rock. I win!";
	}
	else if(userGuess=="paper" && myGuess=="rock"){
		document.getElementById("result").innerHTML = "Paper wraps rock. You win!";
	}
	else if(userGuess=="paper" && myGuess=="scissors"){
		document.getElementById("result").innerHTML = "Scissors cuts paper. I win!";
	}
	else if(userGuess=="scissors" && myGuess=="paper"){
		document.getElementById("result").innerHTML = "Scissors cuts paper. You win!";
	}
	else{
		document.getElementById("result").innerHTML = "Invalid entry. I win by default. Cheater.";
	}
}
