// function deckOfCards(input) {

//     function creatCard(face, suit) {

//         const listOfFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//         const listOfSuits = {
//             S: `\u2660`,
//             H: `\u2665`,
//             D: `\u2666`,
//             C: `\u2663`
//         }

//         if (listOfFace.includes(face) === false || Object.keys(listOfSuits).includes(suit) === false) {
//             return false;
//         }
//         return {
//             face,
//             suit,
//             toString() {
//                 return `${face}${listOfSuits[suit]}`;
//             }
//         }

//     }

//     let toPrint = [];
//     let isValid = true;
//     for (let item of input) {
//         let card = item.split('');
//         let suit = card.pop();
//         let face = card.join('');
//         const newCard = creatCard(face, suit);

//         if (newCard === false) {
//             isValid = false;
//             console.log(`Invalid card: ${face}${suit}`);
//         } else {
//             toPrint.push(newCard);
//         }
//     }
//     if (isValid) {
//         console.log(toPrint.join(' '));
//     }
// }

// deckOfCards(['5S', '3D', 'QD', '2A']);


function deckOfCards(input) {

    function creatCard(cards) {
        let cardList = cards.split('');
        let suit = cardList.pop();
        let face = cardList.join('');
        const listOfFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const listOfSuits = {
            S: `\u2660`,
            H: `\u2665`,
            D: `\u2666`,
            C: `\u2663`
        }

        if (listOfFace.includes(face) === false || listOfSuits.hasOwnProperty(suit) === false) {
            return false;
        } else {
            return `${face}${listOfSuits[suit]}`
        }
    }

    let toPrint = [];
    let isValid = true;
    for (let item of input) {
        let card = creatCard(item);
        if (card == false) {
            isValid = false;
            console.log(`Invalid card: ${item}`);
        } else {
            toPrint.push(card);
        }
    }
    if (isValid) {

        console.log(toPrint.join(' '));
    }
}

deckOfCards(['5S', '3D', 'QD', '2A']);