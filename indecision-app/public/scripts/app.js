'use strict';

console.log('Visibility toggle app running');

var appRoot = document.getElementById('app');
var visible = true;

var app = {
	title: 'Visibility Toggle',
	message: 'Now you can see this message'
};

// const messageStatus =

var toggle = function toggle() {
	if (visible) {
		visible = false;
	} else {
		visible = true;
	}
	render(); // need to render after each function
};

var render = function render() {
	var toggleApp = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: toggle },
			'Hide the details'
		),
		React.createElement(
			'p',
			null,
			visible ? app.message : ''
		)
	);
	ReactDOM.render(toggleApp, appRoot);
};

render();
