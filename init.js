/*
* Creates a deck of cards
* Contains shuffle and deal functions
* */

// immediate function which does not pollute the global namespace
(function (){

    var suitDescription = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var valDescription = ['Ace',2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King'];
    // build a deck of cards --> Array
    // Every card has the following setup
    // { suit: 0 to 3; val: 0 to 12 }

    // deck of cards
    var deck = [];

    var cardPrototype = {
        toString: function(){
            return valDescription[this.val] + ' of ' + suitDescription[this.suit];
        }
    };

    // loop for suit
    for (var i = 0; i < 4; i++ ) {
        // loop for value of card
        for (var j = 0; j < 13; j++) {
            var card = Object.create(cardPrototype);
            card.suit = i;
            card.val = j;
            deck.push(card);
        }
    }

    var deck_description = deck.map(function(elem){
        return card.toString();
    });
    console.log(deck_description);


}());