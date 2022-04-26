const person = {
	name: 'Andrew',
	age: 31,
	location: {
		city: 'Philadelphia',
		temp: 92,
	},
};

// console.log(`${person.name} is ${person.age}.`);

// lets say we want to use variables for name and age

// before destructureing
// const name = person.name;
// const age = person.age;

// destructureing
// setting default name incase person dosent have one
// renameing name as well
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

// selecting location within person
// renanme variable after restructure
const {city, temp: temprature} = person.location;
console.log(`its ${temprature} in ${city}`);

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin',
	},
};

const {publisher: publisherName = 'self-published'} = book

console.log(publisherName)