/* Floating Flowers */

for(let i=0;i<30;i++){

let flower=document.createElement("div");

flower.classList.add("flower");

const icons=["🌸","✨","⭐","🦋"];

flower.innerHTML=
icons[Math.floor(Math.random()*icons.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(6+Math.random()*10)+"s";

document.body.appendChild(flower);

}

/* Flip Cards */

function flipCard(card){

card.classList.toggle("flipped");

}

/* Cake Room */

let candlesBlown=0;

function blowCandle(candle){

if(candle.dataset.blown) return;

candle.innerHTML="💨";

candle.dataset.blown=true;

candlesBlown++;

if(candlesBlown===5){

document.getElementById("cakeMessage").innerHTML=
"🎊 A birthday wish has been sent to the stars! ✨";

launchConfetti();

}

}

/* Confetti */

function launchConfetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div");

conf.innerHTML=["🎊","✨","⭐","🌸"]
[Math.floor(Math.random()*4)];

conf.style.position="fixed";
conf.style.left=Math.random()*100+"vw";
conf.style.top="-20px";
conf.style.fontSize="25px";
conf.style.zIndex="9999";

document.body.appendChild(conf);

let duration=3000+Math.random()*3000;

conf.animate(
[
{transform:"translateY(0)"},
{transform:"translateY(110vh) rotate(720deg)"}
],
{
duration:duration
}
);

setTimeout(()=>{
conf.remove();
},duration);

}

}

/* Literary Library */

function toggleQuote(id){

let quote=document.getElementById(id);

if(
quote.style.display==="block"
){

quote.style.display="none";

}else{

quote.style.display="block";

}

}

/* Quiz */

let quizScore=0;

function correctAnswer(){

quizScore++;

document.getElementById("quizScore")
.innerHTML=quizScore;

alert("Correct! 🎉");

}

function wrongAnswer(){

alert("Not this one 😄");

}

/* Secret Flower */

function secretFlower(){

alert(
"🏆 Achievement Unlocked!\n\nThe Pulkita Chapter 🌸"
);

}

/* Memory Match Game */

let firstCard=null;
let secondCard=null;
let lockBoard=false;

function flipMemoryCard(card){

if(lockBoard) return;

if(card===firstCard) return;

card.classList.add("flipped");

if(!firstCard){

firstCard=card;

return;

}

secondCard=card;

checkMatch();

}

function checkMatch(){

let match=
firstCard.dataset.icon===
secondCard.dataset.icon;

if(match){

resetBoard();

}else{

lockBoard=true;

setTimeout(()=>{

firstCard.classList.remove("flipped");
secondCard.classList.remove("flipped");

resetBoard();

},1000);

}

}

function resetBoard(){

[firstCard,secondCard]=[null,null];

lockBoard=false;

}