console.log('Visibility toggle app running');

var appRoot = document.getElementById('app');
let visible = true;

let app = {
	title: 'Visibility Toggle',
	message: 'Now you can see this message',
};

// const messageStatus =

const toggle = () => {
	if (visible) {
		visible = false;
	} else {
		visible = true;
	}
	render(); // need to render after each function
};

const render = () => {
	const toggleApp = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggle}>Hide the details</button>
			<p>{visible ? app.message : ''}</p>
		</div>
	);
	ReactDOM.render(toggleApp, appRoot);
};

render();
