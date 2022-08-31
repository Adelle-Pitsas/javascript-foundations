class Vampire {
  constructor (name, pet) {
    this.name = name
    if (pet === undefined) {
      this.pet = "bat"
    } else {
      this.pet = pet
    }
    this.thirsty = true
    this.timesDrank = 0
    this.ouncesDrank = 0
  }
  drink() {
    this.timesDrank++
    if (this.timesDrank > 0) {
      this.thirsty = false
    }
    if(this.ouncesDrank <= 40) {
      this.ouncesDrank+=10
    } else {
      this.ouncesDrank = 50
      return "I'm too full to drink anymore!"
    }
  }
}

module.exports = Vampire
