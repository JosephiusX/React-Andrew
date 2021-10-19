console.log('app.js is running');

// JSX - Javascript XML
var app = {
	title: 'Indecision App',
	paragraph: 'Put your life in the hands of a computer',
};

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.paragraph}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var user = {
	name: 'Andrew',
	age: 26,
	location: 'Philadelphia',
};

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age:{user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
