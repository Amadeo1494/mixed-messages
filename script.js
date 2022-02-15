
// Arrays for random zodiac signs, and tarot cards:
const astroDeck = {
    starSign: [
        'Aries', 
        'Taurus', 
        'Gemini', 
        'Cancer', 
        'Leo', 
        'Virgo', 
        'Libra', 
        'Scorpio', 
        'Sagittarius', 
        'Capricorn', 
        'Aquarius', 
        'Pisces'
    ],

    cardOfTheDay: [
        'The Fool: New Beginnings / Recklessness',
        'The Magician: Desire / Trickery',
        'The Hierophant: Conformity / Rebellion', 
        'The Empress: Fertility / Dependence',
        'The Hermit: Contemplation / Loneliness ',
        'The Chariot: Willpower / Aggression',
        'The Lovers: Duality / Disharmony',
        'The World: Harmony / Incompletion',
        'The Sun: Success / Depression',
        'The Moon: Intuition / Fear', 
        'The Devil: Freedom / Addiction',
        'The Hanged Man: Sacrifice / Stalling',
    ]

};

// A function to get a randomized number between 0 - 1:
function genRanNum(num) {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

// A blank array to store the complete message in:
let zodiacMes = [];

//A "for loop" to iterate through the astroDeck arrays, and randomize messages:
for (let sign in astroDeck) {
    let starId = genRanNum(astroDeck[sign].length)

    switch (sign) {
        case 'starSign':
            zodiacMes.push(`The star sign: ${astroDeck[sign][starId]}.`)
            break
        case 'cardOfTheDay':
            zodiacMes.push(`The card of the day: ${astroDeck[sign][starId]}.`)
            break
        default:
            zodiacMes.push('Please provide more info.')
    }
};

// A function to log the final message in, and create separation between the starSign, and cardOfTheDay:
function tarotOfTheDay(card) {
    const separation = zodiacMes.join('\n')
    console.log(separation);
}

tarotOfTheDay(zodiacMes);
