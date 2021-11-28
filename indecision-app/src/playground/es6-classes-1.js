class Person {
	// es6 allows defaults to be added to paramiters incase one is not given
	constructor(name = 'anonymus', age = 0) {
		this.name = name; // inside class methots 'this' refers to the class instance
		this.age = age;
	}

	// method to run when explicitly called
	getGreeting() {
		return `${this.name} is ${this.age} old`;
	}
}

// we can make as many instances of the class as we want by assigning them to new variables
const me = new Person('Andrew Mead', 30);
console.log(me.getGreeting());

const sister = new Person('Nicara', 36);
console.log(sister.getGreeting());

const noName = new Person(); // if we dont pass in a name the default that we specified above is used
console.log(noName); // Person {name: 'anonymus'}
