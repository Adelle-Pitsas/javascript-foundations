class Hobbit {
  constructor(name) {
    this.name = name.name
    this.age = 0
    this.adult = false
    this.old = false
    this.hasRing = false
  }
  celebrateBirthday() {
    this.age++
    if(this.age > 32) {
      this.adult = true
    }
    if(this.age > 100) {
      this.old = true
    }
  }
  getRing() {
    if(this.name !== "Frodo") {
      this.hasRing = false
      return "You can't have it!"
    } else {
      this.hasRing = true
      return "Here is the ring!"
    }
  }
}



module.exports = Hobbit;
