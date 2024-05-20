document.getElementById('rollButton').addEventListener('click', () => {
    rollDice();
});

const rollDice = () => {
    // Generate a random number between 1 and 6
    const result = Math.floor(Math.random() * 6) + 1;

    // Set the dice image based on the result
    const diceImage = document.getElementById('diceImage');
    diceImage.src = `dice${result}.png`;
    diceImage.alt = `Dice showing ${result}`;
};
