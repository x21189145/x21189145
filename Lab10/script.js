/*
Week 10 Lab Submission

Question 3
Create an application that generates an array of 5 random numbers 1-10. The user should then guess a number and the app will tell them how many time that number exists within the array.

*/
let RandomNums=[];
let count=0;
for(i=0;i<5;i++){
		RandomNums[i]=(Math.floor(Math.random() * 10) + 1);
	}
function go(){
	checkNum=parseInt(prompt("Please enter number between 1 and 10"));
	for(i=0;i<5;i++){
		if (checkNum==RandomNums[i]){
			count=count+1;
		}
	}
	
	/* I have also outputted the array to provide confirmation of the result */
	
	document.getElementById("main").innerHTML+=("The number "+checkNum+ " appears in the array "+count+" times<br /><br />Array contents: ");
	for(i=0;i<5;i++){
		document.getElementById("main").innerHTML+=(RandomNums[i]+", ");
	}
}