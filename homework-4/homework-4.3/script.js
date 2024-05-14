let birthYear = prompt("Введіть рік вашого народження:");

if (birthYear === null) {
    alert("Шкода, що ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("Введіть місто, де ви живете:");

    if (city === null) {
        alert("Шкода, що ви не захотіли ввести місто.");
    } else {
        let isCapital = city === "Київ" || city === "Вашингтон" || city === "Лондон";
        let cityMessage;
        if (isCapital) {
            if (city === "Київ") {
                cityMessage = "Ти живеш у столиці України...";
            } else if (city === "Вашингтон") {
                cityMessage = "Ти живеш у столиці США...";
            } else if (city === "Лондон") {
                cityMessage = "Ти живеш у столиці Великобританії...";
            }
        } else {
            cityMessage = "Ти живеш у місті " + city + "...";
        }

        let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");
        if (favoriteSport === null) {
            alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            let sportMessage;
            let champions = {
                "футбол": "Круто! Хочеш стати Роналдо?",
                "теніс": "Круто! Хочеш стати Федерером?",
                "баскетбол": "Круто! Хочеш стати Джорданом?"
            };
            if (champions[favoriteSport.toLowerCase()]) {
                sportMessage = champions[favoriteSport.toLowerCase()];
            } else {
                sportMessage = "Твій улюблений вид спорту: " + favoriteSport;
            }

            let currentYear = new Date().getFullYear();
          
            let age = currentYear - birthYear;

            let message = cityMessage + "\nТвій вік: " + age + " років\n" + sportMessage;

            alert(message);
        }
    }
}