function playingCards(arg1, arg2) {
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = {
        S: `\u2660`,
        H: `\u2665`,
        D: `\u2666`,
        C: `\u2663`
    }

    if (faces.includes(arg1) === false) {
        throw new Error('Ivalid face');
    } else if (Object.keys(suits).includes(arg2) === false) {
        throw new Error('Ivalid suit');
    };

    return {
        arg1,
        arg2,
        toString() {
            return `${arg1}${suits[arg2]}`;
        }
    }
}
const deck =  playingCards(2,'D');
console.log(deck.toString());