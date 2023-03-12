const messageNames = [];
function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
        messageNames.push(["Thank you, ${names[i]}, for the wonderful ${value} gift!"]);
    return messageNames; }
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")