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
    if(this.name !== 'Frodo') {
      return "You can't have it!"
      this.hasRing = false
    } else {
      return "Here is the ring!"
      this.hasRing = true
    }
  }
}



module.exports = Hobbit;
