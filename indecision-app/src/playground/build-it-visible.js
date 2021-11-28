console.log('Visibility toggle app running');

var appRoot = document.getElementById('app');
let visible = true;

let app = {
	title: 'Visibility Toggle',
	message: 'Now you can see this message',
};

const render = () => {
	const jsx = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggle}>{visible ? 'Hide text' : 'Show text'}</button>
			<p>{visible ? app.message : ''}</p>
		</div>
	);
	ReactDOM.render(jsx, appRoot);
};

// if statement converted to turnary operator
const toggle = () => {
	visible ? (visible = false) : (visible = true);
	render();
};
render();
