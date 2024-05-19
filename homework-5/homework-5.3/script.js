const N = parseInt(prompt("Введіть ціле число N:"));

if (!isNaN(N)) {
    let i = 1;
    while (i * i <= N && i <= 100) {
        console.log(i);
        i++;
    }
} else {
    console.log("Некоректне введення. Будь ласка, введіть ціле число.");
}