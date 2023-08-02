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

const word = 'HELLO'
const wordArr = word.split('')
let dashArr = []

const setDashArray = (hangWord) => {
    for (let i = 0; i < hangWord.length; i++) {
        dashArr[i] = '_'
    }
}

setDashArray(wordArr)

const fillIn = (guess) => {
    const letter = guess.toUpperCase().trim()
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === letter) {
            dashArr[i] = letter
        }
    }
}

const checkForWin = () => {
    let keepGoing = 0
    for (let i = 0; i < dashArr.length; i++) {
        if (dashArr[i] == '_') {
            keepGoing = 1
        }
    }
    if (keepGoing) {
        getPrompt()
    } else {
        console.log(`${dashArr.join(' ')}`)
        console.log('You win!')
    }
}

const getPrompt = () => {
    console.log(`${dashArr.join(' ')}`)
    rl.question('Guess a letter: ', (letter) => {
        fillIn(letter)
        checkForWin()
    });
  }
  getPrompt()