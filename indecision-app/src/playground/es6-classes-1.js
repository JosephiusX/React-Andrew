class Person {
	// es6 allows defaults to be added to paramiters incase one is not given
	constructor(name = 'anonymus', age = 0) {
		this.name = name; // inside class methots 'this' refers to the class instance
		this.age = age;
	}

	// method to run when explicitly called
	getGreeting() {
		return `hello. I am ${this.name} !`;
	}

	getDiscription() {
		return `${this.name} is ${this.age} old.`;
	}
}

// we can make as many instances of the class as we want by assigning them to new variables
const me = new Person('Andrew Mead', 30);
console.log(me.getGreeting()); // hello. I am Andrew Mead !
console.log(me.getDiscription(30)); // Andrew Mead is 30 old.

const sister = new Person('Nicara', 36);
console.log(sister.getGreeting()); // hello. I am Nicara !
console.log(sister.getDiscription()); // Nicara is 36 old.

const noName = new Person(); // if we dont pass in a name the default that we specified above is used
console.log(noName.getGreeting()); // Person {name: 'anonymus'}
console.log(noName.getDiscription()); // anonymus is 0 old.
