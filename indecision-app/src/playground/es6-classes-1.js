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

class Student extends Person {
	// here we need name and age from Person as well as the major peramiter
	constructor(name, age, major) {
		super(name, age); // defines name and age from person because it is extended to student
		this.major = major; // we define this because its unique to person
	}

	hasMajor() {
		return !!this.major;
	}
	getDiscription() {
		return 'testing';
	}
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.hasMajor(), me.getDiscription());

const other = new Student();
console.log(other.hasMajor(), other.getDiscription());

const person = new Person(); // with this we can see that getDiscription() works differently now when used Student as opposed to Person
console.log(person.getDiscription());

// Previous Lecture

// we can make as many instances of the class as we want by assigning them to new variables
// const me = new Person('Andrew Mead', 30);
// console.log(me.getGreeting()); // hello. I am Andrew Mead !
// console.log(me.getDiscription(30)); // Andrew Mead is 30 old.

// const sister = new Person('Nicara', 36);
// console.log(sister.getGreeting()); // hello. I am Nicara !
// console.log(sister.getDiscription()); // Nicara is 36 old.

// const noName = new Person(); // if we dont pass in a name the default that we specified above is used
// console.log(noName.getGreeting()); // Person {name: 'anonymus'}
// console.log(noName.getDiscription()); // anonymus is 0 old.
