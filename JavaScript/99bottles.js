
	
	//99 bottles of beer on the wall
	for(i=99;i>2;i=i-1){

		document.getElementById("song").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer, "+" Take one down and pass it around, "+(i-1)+" bottles of beer on the wall"+"<br />";
	
	}
	
	//2 bottles, 1 bottle left
	document.getElementById("song").innerHTML+="2 bottles of beer on the wall, 2 bottles of beer, Take one down and pass it around, 1 bottle of beer on the wall"+"<br />";
	
	//1 bottle, no bottles left
	document.getElementById("song").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer, Take one down and pass it around, no more bottles of beer on the wall"+"<br />";
	
	//Need more beer
	document.getElementById("song").innerHTML+="No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall";