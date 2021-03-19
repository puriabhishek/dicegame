// image1
var randomNumber = Math.random(randomNumber) * 6 + 1;//generate random number 1
randomNumber = Math.floor(randomNumber);// whole rn 1
var randomImage = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomImage);


var randomNumber1 = Math.random(randomNumber1) * 6 + 1;//generate rn2
randomNumber1 = Math.floor(randomNumber1);//whole rn2
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src", randomImage1);

if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerText = "player 1 wins😍";
}
else if(randomNumber < randomNumber1){
    document.querySelector("h1").innerText = "player 2 wins😍";

}   
else{
    document.querySelector("h1").innerText = "draw! TRY AGAIN";

}