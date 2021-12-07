class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0,
		};
	}
	handleAddOne(e) {
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			};
		});
	}
	handleMinusOne(e) {
		this.setState(prevState => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	handleReset(e) {
		this.setState(() => {
			return {
				count: 0,
			};
		});
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			};
		});
		// this.setState({ // Asynchronous
		// 	count: 0,
		// });
		// this.setState({ // the state change above dosent calculate the acync change above so adding one to the previous count
		// 	count: this.state.count + 1,
		// });
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// written before we knew about classes or the ability to create methods on those classes
// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
