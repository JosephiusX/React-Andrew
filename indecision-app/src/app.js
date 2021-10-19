console.log('app.js is running');

// JSX - Javascript XML
var app = {
	title: 'Indecision App',
	paragraph: 'Put your life in the hands of a computer',
	options: ['One', 'Two'],
};

var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtite && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var user = {
	age: 17,
};

// function takes in location
var user = {
	name: 'Andrew',
	age: 26,
	location: 'Philadelphia',
};
function getLocation(location) {
	// if there is a location paramiter
	if (location) {
		return <p>Location:{location}</p>; // return this paragraph
	}
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{user.age && user.age >= 18 && <p>Age:{user.age}</p>}
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
