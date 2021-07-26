var player1 = true;
var player2 = false;
var ron = [[1,2,3],[4,5,6],[7,8,9]]
console.log(ron[0][2]);
var placeInArrayX;
var placeInArrayY;
var player1Sign = "x";
var player2Sign = "o";
var count = 0;
var isWin = false;
var isPick = false;
var myImage1 = '<img src="images/toy-space-ship.png" >'
var myImage2 = '<img src="images/dragon-toy.png" >'
var myImage3 = '<img src="images/boat-hand-drawn-toy.png" >'
var myImage4 = '<img src="images/dice-dotted-cube-toy.png" >'

function chooseImage(myImage,id,id2){
	if(!isPick){
		player1Sign = myImage;
		isPick=true;
		document.getElementById(id).style.backgroundColor="#faf1d9";
		document.getElementById(id).onclick="";
		document.getElementById("myH1").innerHTML = "Player 2 Choose simbol..";
		document.getElementById(id2).innerHTML = "Player 1 ";
		
		
	}else{
		player2Sign = myImage;
		document.getElementById(id2).innerHTML = "Player 2 ";
	document.getElementById(id).style.backgroundColor="#faf1d9";
		disableButtons();
		document.getElementById("grid").style.visibility = "visible";
		document.getElementById("myH1").innerHTML = "Player 1 turn..";
		
	}
	
}
function disableButtons(){
	
	for (var  i = 1; i < 5; i++) {
		document.getElementById("myImage"+i).onclick="";
		
			}
}


function myPlace(x,y){
	 placeInArrayX=x;
	  placeInArrayY=y;
}


function EnterSign(id){
	if(player1){
		
 document.getElementById(id).innerHTML =  player1Sign ;	
 document.getElementById(id).onclick="";
document.getElementById("myH1").innerHTML = "Player 2 turn..";
	
	player1=false;
	player2 = true;
	ron[placeInArrayX][placeInArrayY]=player1Sign;
	console.log(ron);
	
	
	}else{
		 document.getElementById(id).innerHTML =  player2Sign ;
 document.getElementById(id).onclick="";	
document.getElementById("myH1").innerHTML = "Player 1 turn.."; 
		player2=false;
		player1=true;
		ron[placeInArrayX][placeInArrayY]=player2Sign;
	console.log(ron);
	
	}
	count++;
	win();
	
}

function win(){
	
	if(ron[0][0]==ron[1][1]&&ron[0][0]==ron[2][2]){
		winDeclar();
		isWin = true;
	}else if(ron[0][2]==ron[1][1]&&ron[0][2]==ron[2][0]){
		winDeclar();
		isWin = true;
	}
	
	
	
	horizontal();
vertical();

if(count==9&&isWin==false){
	
	
	setTimeout(function(){ document.getElementById("grid").innerHTML="<h1>no winner.. refresh to play again</h1>"; }, 1000)
}


}
function vertical(){
	for ( var i = 0; i < 1; i++) {
		for (var  j = 0; j < 3; j++) {
			console.log(ron[i][j])
			if(ron[i][j]==ron[i+1][j]&&ron[i][j]==ron[i+2][j]){
				winDeclar();
				isWin = true;
			}
 
}
	 
}
	
}

function horizontal(){
	for ( var i = 0; i < 3; i++) {
		for (var  j = 0; j < 1; j++) {
			console.log(ron[i][j])
			if(ron[i][j]==ron[i][j+1]&&ron[i][j]==ron[i][j+2]){
				winDeclar();
				isWin = true;
			}
 
}
	 
}
	
}


function winDeclar(){
	document.getElementById("myH1").innerHTML = "";
	for (var  i = 1; i < 10; i++) {
		document.getElementById("box"+i).onclick="";
		
			}
	
	if(player1){
		 setTimeout(function(){ document.getElementById("grid").innerHTML="<h1 >player 2 wins! refresh to play again..</h1>"; }, 1000)
		
	}else{
		 setTimeout(function(){ document.getElementById("grid").innerHTML="<h1>player 1 wins! refresh to play again..</h1>"; }, 1000)
	}
	
	
}

