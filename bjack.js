let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard,secondCard];
let newcard=4;
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;

let message="";

let messageEl= document.querySelector("#message-el");
let sumEl=document.getElementById("Sum-el");
let cardsEl=document.getElementById("cards-el");


function getRandomCard(){
    return 3;
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
    let card=getRandomCard();
    sum=sum+card;
    cards.push(card);
    renderGame()
}

function startGame(){
    renderGame();
}
