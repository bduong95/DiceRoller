var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = './images/dice' + randomNumber1 + '.png';
var dice2 = './images/dice' + randomNumber2 + '.png';
var heading = document.querySelector("h1");

var img1 = document.querySelector(".img1").setAttribute("src", dice1);
var img2 = document.querySelector(".img2").setAttribute("src", dice2);

console.log(dice1, dice2);

// Tie
if (randomNumber1 === randomNumber2)
{
    heading.innerHTML = "Draw! 🎌";
}
else if (randomNumber1 > randomNumber2)
{
    heading.innerHTML = "🏆 Player 1 Wins!"; 
}
else {
    heading.innerHTML = "Player 2 Wins! 🏆"; 
}
