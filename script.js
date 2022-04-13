
	var num1=Math.round((Math.random()*6)+1);
	var num2=Math.round((Math.random()*6)+1);
	if(num1>num2){
		console.log("player1 wins!")
		document.querySelector("h1").innerHTML="Player 1 Wins!";
	}
	else if(num1<num2){
		console.log("player2 wins!")
		document.querySelector("h1").innerHTML="Player 2 Wins!";
	}
	else{
		console.log("DRAW")
		document.querySelector("h1").innerHTML="Draw!";
	}
	var pathName1="images/dice"+num1+".png";
	var pathName2="images/dice"+num2+".png";
	console.log(pathName1);
	console.log(pathName2);
	document.querySelectorAll("img")[0].setAttribute("src",pathName1);
	document.querySelectorAll("img")[1].setAttribute("src",pathName2);