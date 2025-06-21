var rnd1=Math.random();
var n1=Math.floor(rnd1*6)+1;

var randomDiceImage = "dice"+n1+".png"; //dice1
var randomImageSource = "images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var rnd2=Math.random();
var n2=Math.floor(rnd2*6)+1;

var randomDiceImage2 = "dice"+n2+".png"; //dice1
var randomImageSource2 = "images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);



if (n1>n2){
    document.getElementById("title").innerHTML="🚩 Play 1 Wins!";
}
else if (n2>n1){
    document.getElementById("title").innerHTML="🚩 Play 2 Wins!";
}
else{
    document.getElementById("title").innerHTML="🚩 Draw!";
}

