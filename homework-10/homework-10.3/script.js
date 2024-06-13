let contactBook = {
    contacts: [
        { name: "Іван", phone: "0985564232", email: "Ivan@gmail.com" },
        { name: "Микола", phone: "0970777700", email: "Mukola@gmail.com" },
        { name: "Оля", phone: "0977777077", email: "Olga@gmail.com" },
    ],

    searchContanct: function (name) {
        for (let contact of this.contacts) {
            if (contact.name === name) {
                return contact;
            }
        }
        return "Контакт не знайдено";
    },

    addContact: function (name, phone, email) {
        let newContact = { name: name, phone: phone, email: email };
        this.contacts.push(newContact);
        console.log("Новий контакт доданий:", newContact);
    }
};

console.log(contactBook.searchContanct("Микола"));

contactBook.addContact("Олег", "0986660866", "Oleg@gmail.com");

console.log(contactBook.contacts);