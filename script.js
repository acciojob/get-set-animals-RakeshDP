//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  // Method for purring
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  // Method for barking
  bark() {
    console.log("woof");
  }
}

const animal = new Animal("Unknown");
console.log(animal.species); // Output: Unknown
animal.makeSound(); // Output: Animal sound

const cat = new Cat("Siamese");
console.log(cat.species); // Output: Felis catus
cat.makeSound(); // Output: Animal sound
cat.purr(); // Output: purr

const dog = new Dog("Golden Retriever");
console.log(dog.species); // Output: Canis lupus familiaris
dog.makeSound(); // Output: Animal sound
dog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
