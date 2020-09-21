function startFunction() {
    let name = prompt("Welkom! Wat is je naam?", "Vul je naam in");
    alert("Hey " + name + "!");
    let numberTobeGuessed = Math.floor(Math.random() * 25) + 0;
    let numberGuess = prompt("Voer een getal in van 0 tot 25 om te beginnen met raden:");
    if (numberGuess == numberTobeGuessed) {
        alert("Gefeliciteerd, je hebt gewonnen!");
        alert("Dag " + name + ". Tot de volgende keer.")
    } else {
        alert("Dat is niet correct.");
        let numberGuess = prompt("Voer een getal in van 0 tot en met 25 om te beginnen met raden:");
        if (numberGuess == numberTobeGuessed) {
            alert("Gefeliciteerd, je hebt gewonnen!");
            alert("Dag " + name + ". Tot de volgende keer.")
        } else {
            alert("Dat is niet correct.");
        }
    }
}

startFunction(); 