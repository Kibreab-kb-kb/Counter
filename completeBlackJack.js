/*let cards=[];
let newcard=4;
let sum=0;
let hasBlackJack=false;
let isAlive=true;

let message="";
console.log(cards)

let messageEl= document.querySelector("#message-el");
let sumEl=document.getElementById("Sum-el");
let cardsEl=document.getElementById("cards-el");

let player={
    name:"per",
    chips:"145"
}



let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips


function getRandomCard(){
let randomNumber=Math.floor(Math.random()*13)+1
if(randomNumber==1){
    return 11;
}
else if(randomNumber>10)
{
    return 10;
}
else{
    return randomNumber;
}

   
}


function renderGame(){

    if(sum<=20){
        message="Do you want to draw a new card?";
    }
    
    else if(sum===21){
        message="Wohoo! you've got a BlackJack";
        hasBlackJack=true;
    }
    
    else{
        message="Yor're out of the game";
        isAlive=false;
    }
    
   messageEl.textContent=message;
   sumEl.textContent="Sum:"+ sum;

   cardsEl.textContent="Cards:";

   for(let i=0;i<cards.length;i++){
   cardsEl.textContent+=cards[i] +" ";
   }
   


}

function newCard(){
    if(isAlive===true&&hasBlackJack===false){
    let card=getRandomCard();
    sum=sum+card;
    cards.push(card);
    
    renderGame()
}}

function startGame(){
    isAlive=true;

   let firstCard=getRandomCard();
   let secondCard=getRandomCard();
   cards=[firstCard,secondCard];
   sum=firstCard+secondCard;
    renderGame();
}
*/


