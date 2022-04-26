import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};
        case 'RESET':
            return{
                count: state.count = 0
            }
		default:
			return state;
	}
});

console.log(store.getState());

// Actions - an object that gets sent to the store

//I'd like to increment the cont
store.dispatch({
	type: 'INCREMENT',
});
store.dispatch({
	type: 'DECREMENT',
});
store.dispatch({
	type: 'RESET',
});

// I'd like to reset the count to zero

console.log(store.getState());
