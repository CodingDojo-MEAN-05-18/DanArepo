class Deck{

  constructor(){
    this.cards = this.resetDeck;
  }

  shuffleDeck(deck){
    if (Array.isArray(deck)){
      deck.sort(function(a,b){return 0.5 - Math.random()});
    }
    return this;
  }

  get resetDeck(){
    let suits = ['spades', 'clubs', 'hearts', 'diamonds'];
    let deck = [];
    for (let suit = 0; suit < suits.length; suit++ ){
      for (let card = 2; card <= 14; card++){
        switch(card){
          case 11:
            deck.push('jack of ' + suits[suit]);
            break;
          case 12:
            deck.push('queen of ' + suits[suit]);
            break;
          case 13:
            deck.push('king of ' + suits[suit]);
            break;
          case 14:
            deck.push('ace of ' + suits[suit]);
            break;
          default:
            deck.push(card + ' of ' + suits[suit]);
            break;
        }
      }
    }
    return deck;
  }

  get dealCard(){
    if (this.cards.length <=0){
      console.log('Deck needs to be reset');
      this.resetDeck;
      console.log('Deck has been reset');
    }
    let card = this.cards.shift();
    return card;
  }
}

class Player extends Deck{
  constructor(name){
    super();
    this.name = name;
    this.hand = [];
  }

  get takeCard(){
    let card = super.dealCard;
    this.hand.push(card);
    return card;
  }

  get discardCard(){
    let card = this.hand.pop();
    return card;
  }
}

const player1 = new Player('Jim');
console.log(player1.takeCard);
console.log(player1.hand);
console.log(player1.discardCard);
console.log(player1.hand);
