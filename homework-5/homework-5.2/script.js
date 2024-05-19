let exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const costInHryvnia = dollars * exchangeRate;
    console.log(`${dollars} доларів коштують ${costInHryvnia} гривень`);
}
