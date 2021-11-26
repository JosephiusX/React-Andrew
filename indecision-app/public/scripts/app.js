'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var app = {
	title: 'Indecision App',
	paragraph: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault(); // prevent full page refresh

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}

	render();
};

var wipe = function wipe() {
	app.options = [];
	render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtite && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: wipe },
			'Remove All'
		),
		app.options.map(function (option) {
			return React.createElement(
				'li',
				{ key: option },
				option
			);
		}),
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
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
