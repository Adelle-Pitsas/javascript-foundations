class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job === undefined) {
      this.job = "scallywag"
    } else {
      this.job = job
    };
    this.cursed = false;
    this.booty = 0
    this.numberOfShipsRobbed = 0
  }
  robShip() {
    this.booty+= 100
    this.numberOfShipsRobbed++
    if (this.numberOfShipsRobbed > 5) {
      this.cursed = true
      this.booty = 500
      return "ARG! I've been cursed!"
    }
    return "YAARRR!"
  }
  liftCurse() {
    if(this.cursed === true) {
    this.booty-= 300
    this.cursed = false
    return "Your curse has been lifted!"
  } else {
    return "You don't need to lift a curse!"
  }
}
}

module.exports = Pirate
