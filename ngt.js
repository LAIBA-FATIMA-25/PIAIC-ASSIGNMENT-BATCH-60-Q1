import promptSync from 'prompt-sync';
const prompt = promptSync();
class NumberGuessingGame {
    constructor() {
        this.targetNumber = this.generateRandomNumber(1, 100);
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getGuess() {
        const guess = parseInt(prompt('Enter your guess (between 1 and 100): '), 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('Invalid input. Please enter a number between 1 and 100.');
            return this.getGuess();
        }
        return guess;
    }
    play() {
        console.log('Welcome to the Number Guessing Game!');
        let guessedCorrectly = false;
        while (!guessedCorrectly) {
            const guess = this.getGuess();
            if (guess < this.targetNumber) {
                console.log('Too low! Try again.');
            }
            else if (guess > this.targetNumber) {
                console.log('Too high! Try again.');
            }
            else {
                console.log(`Congratulations! You guessed the correct number: ${this.targetNumber}`);
                guessedCorrectly = true;
            }
        }
    }
}
const game = new NumberGuessingGame();
game.play();
