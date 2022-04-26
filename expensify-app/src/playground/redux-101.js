import {createStore} from 'redux';

// Store object
const store = createStore((state = {count: 0}, action) => {
	switch (
		action.type // switch instead of if else
	) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incrementBy,
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy,
			};
		case 'SET':
			return {
				count: action.count,
			};
		case 'RESET':
			return {
				count: (state.count = 0),
			};
		default:
			return state;
	}
});

// How do we watch for changes in the redux state
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Actions - an object that gets sent to the store

//I'd like to increment the cont
store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5,
});

store.dispatch({
	type: 'INCREMENT',
});

store.dispatch({
	type: 'RESET',
});

store.dispatch({
	type: 'DECREMENT',
	decrementBy: 5,
});

store.dispatch({
	type: 'SET',
	count: 101,
});

// I'd like to reset the count to zero
