class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`
    this.assistant = magician.assistant
  }
}

//the argument being passed through on lines 19 and 20 are objects in themselves
//So I need to find a way to access that whole object

module.exports = Magician
