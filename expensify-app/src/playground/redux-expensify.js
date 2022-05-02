import {createStore, combineReducers} from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// store creation
// combineing reducers
const store = createStore(
	combineReducers({
		expences: expensesReducer,
        filters: filtersReducer
	}),
);

console.log(store.getState());

const demoState = {
	expenses: [
		{
			id: 'asdf',
			description: 'January Rent',
			note: 'This was the final payment for that address',
			amount: 54500,
			createdAt: 0,
		},
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date of amount
		startDate: undefined,
		endDate: undefined,
	},
};
