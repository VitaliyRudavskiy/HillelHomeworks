function User(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.displayInfo = function () {
        console.log("Ім'я:", this.name);
        console.log("Вік:", this.age);
        console.log("Місце проживання:", this.location);
    }
}

let user1 = new User("Віталій", 22, "Тернопіль");

user1.displayInfo();