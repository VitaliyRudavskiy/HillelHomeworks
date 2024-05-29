function promptUntilValid() {
    let userInput;
    for (let i = 0; i < 10; i++) {
        userInput = prompt(`Введіть число більше 100 (ітерація ${i + 1}):`);
        if (userInput === null) {
            console.log("Користувач скасував запит.");
            return;
        }
        userInput = Number(userInput);
        if (userInput > 100 || i === 9) {
            console.log("Останнє дійсне введення:", userInput);
            return;
        } else {
            console.log("Будь-ласка введіть число більше 100.");
        }
    }
}

promptUntilValid();
