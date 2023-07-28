//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species
	}
	makeSound(){
		console.log('Animal Sound');
	}
}

class Dog extends Animal {
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}
const animal = new Animal('Unknown');
console.log(animal.species);
animal.makeSound();

const cat = new Cat('Felis catus');
console.log(cat.species);
cat.makeSound();
cat.purr();

const dog = new Dog();
console.log(dog.species);
dog.makeSound();
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
