'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wordBank = ['FINICKY', 'ENCOURAGE', 'DANGEROUS', 'UNABLE', 'MUNDANE', 'SATISFY', 'PLUCKY', 'GREASY', 'LUMBER', 
    'TESTED', 'CLASSY', 'FROGS', 'JAGGED', 'MINUTE', 'LEARNED', 'REMINISCENT', 'RIGHTEOUS', 'BELIEVE', 'EXPENSIVE', 
    'MILKY', 'DAPPER', 'PEACE', 'KNOWING', 'BLACK', 'ADORABLE', 'SCHOOL', 'ZEALOUS', 'SASSY', 'DETAILED', 'APPAREL', 
    'SPOTLESS', 'FESTIVE', 'CURVED', 'GROUP', 'HALLOWED', 'QUARRELSOME', 'OPTIMAL', 'THUMB', 'TRUCK', 'NUTTY', 'VACATION',
    'SUBSTANTIAL', 'MAMMOTH', 'CHERRY', 'TRUST', 'FRIENDS', 'BROWN', 'SOLID', 'THEORY', 'SPARKLING', 'LIMPING', 
    'SYMPTOMATIC', 'RIFLE', 'KNOWLEDGE', 'QUILL', 'ROTTEN', 'TERRIBLE', 'AIRPORT', 'ENJOY', 'SKIRT', 'MELTED', 'FIELD', 
    'WHISPER', 'AWESOME', 'REJOICE', 'SHAKY', 'ARGUMENT', 'FLOWER', 'WHOLESALE', 'BOORISH', 'AGGRESSIVE', 'SCARED', 
    'ERROR', 'HELLO', 'MOUNTAINOUS', 'TACKY', 'GHOST', 'OBTAINABLE', 'SNIFF', 'LUNCHROOM', 'CHARMING', 'WHIRL', 'GREEDY',
    'SYSTEM', 'WOUND', 'ARRANGE', 'OVERCONFIDENT', 'ABANDONED', 'HUNGRY', 'OFFBEAT', 'AWARE', 'NEEDLESS', 'CREATURE', 
    'HANDY', 'SQUASH', 'TRADE', 'EMINENT', 'DIVERGENT', 'SPELL', 'ORGANIC']
const word = wordBank[Math.round(Math.random() * 100)]
const wordArr = word.split('')
let dashArr = []
let chances = 7

const setDashArray = (hangWord) => {
    for (let i = 0; i < hangWord.length; i++) {
        dashArr[i] = '_'
    }
}

setDashArray(wordArr)

const fillIn = (guess) => {
    const letter = guess.toUpperCase().trim()
    let loss = 1
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === letter) {
            dashArr[i] = letter
            loss = 0
        }
    }
    if (loss) {
        chances--
    }
}

const checkForWin = () => {
    let keepGoing = 0
    for (let i = 0; i < dashArr.length; i++) {
        if (dashArr[i] == '_') {
            keepGoing = 1
        }
    }
    if (chances == 0) {
        console.log(`You lose! The correct word is ${word}.`)
    } else if (keepGoing) {
        getPrompt()
    } else {
        console.log(`${dashArr.join(' ')}`)
        console.log('You win!')
    }
}

const getPrompt = () => {
    if (chances == 7) {
        console.log(`You are allowed 7 wrong guesses.`)
    } else if (chances == 1) {
        console.log(`You have 1 wrong guess left.`)
    } else {
        console.log(`You have ${chances} wrong guesses left.`)
    }
    console.log(`${dashArr.join(' ')}`)
    rl.question('Guess a letter: ', (letter) => {
        fillIn(letter)
        checkForWin()
    });
  }
  getPrompt()