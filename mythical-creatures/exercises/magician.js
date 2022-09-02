class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    if (magician.clothing === undefined) {
      this.favoriteAccessory = "top hat"
    } else {
      this.favoriteAccessory = magician.clothing
    }
    this.confidencePercentage = 10
  }

  performIncantation(message) {
    var incantation = message.toUpperCase()
    return (`${incantation}!`)
  }

  performTrick() {
    this.confidencePercentage+=10
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT"
    } else {
      return "PULL DOVE FROM SLEEVE"
    }
  }
}



module.exports = Magician
