import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
	constructor() {
		this.name = 'Mike';
		this.getGreeting = this.getGreeting.bind(this);
	}
	getGreeting() {
		return `Hi. My name is ${this.name}`;
	}
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax); // result: OldSyntax {name: 'Mike'}
console.log(oldSyntax.getGreeting()); // the 'this' binding works in this case
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
	name = 'Jen';
	newGetGreeting = () => {
		return `Hi. My name is ${this.name}.`;
	};
}
const newSyntax = new NewSyntax();
console.log(newSyntax); // result same as above without writing out a constructor function
const newGetGreeting = newSyntax.newGetGreeting;
console.log(newGetGreeting());
