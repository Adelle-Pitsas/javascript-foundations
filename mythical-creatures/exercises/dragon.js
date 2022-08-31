class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.hungryCount = 0
  }
  greet(greeting) {
      return `Hi, ${this.rider}!`
  }
  eat() {
    this.hungryCount++
    if (this.hungryCount >=3) {
      return this.hungry = false
    }
  }
}


module.exports = Dragon
