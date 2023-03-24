/*let firstCard=4;
let secondCard=4;
let card=[firstCard,secondCard]
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message;

let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    if(sum<=20){
        message="Do you want to draw a new card?";

    }

    else if(sum===21){
        message="Wohoo! you've got Blackjack";
        hasBlackJack=true;
    }

    else {
        message="You are out of the game!";
        isAlive=false;
    }
messageEl.textContent=message;
sumEl.textContent="sum:"+sum;
cardsEl.textContent="Cards:" + card[0] +" "+card[1];
   
}

function newCard(){
   
    var card=13;
    sum=sum+card;
    renderGame();
}*/

let card=[2,4,5];
card.push(3);
console.log(card);
card.push("kibreab");
console.log(card);
console.log(card.length)
card.pop();
console.log(card)
