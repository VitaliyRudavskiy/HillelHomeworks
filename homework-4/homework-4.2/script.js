let number = prompt("Будь ласка, введіть тризначне число:");

if (!isNaN(number) && number.length === 3) {
    let digit1 = parseInt(number[0]);
    let digit2 = parseInt(number[1]);
    let digit3 = parseInt(number[2]);

    let allDigitsSame = digit1 === digit2 && digit2 === digit3;

    let anyTwoDigitsSame = digit1 === digit2 || digit2 === digit3 || digit1 === digit3;

    if (allDigitsSame) {
        alert("Усі цифри у числі однакові.");
    } else if (anyTwoDigitsSame) {
        alert("Серед цифр числа є хоча б дві однакові.");
    } else {
        alert("Усі цифри у числі різні.");
    }
} else {
    alert("Введено некоректне значення. Будь ласка, введіть тризначне число.");
}

