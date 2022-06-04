var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage="dice"+randomNumber1+".png";
var randomImagesource="images/"+randomImage;
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage="dice"+randomNumber2+".png";
var randomImagesource="images/"+randomImage;
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImagesource);

if (randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if (randomNumber2 > randomNumber1)
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else
document.querySelector("h1").innerHTML = "Draw!";
