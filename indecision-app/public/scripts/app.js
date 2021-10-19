'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var app = {
	title: 'Indecision App',
	paragraph: 'Put your life in the hands of a computer'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.paragraph
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);

var user = {
	name: 'Andrew',
	age: 26,
	location: 'Philadelphia'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age:',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
