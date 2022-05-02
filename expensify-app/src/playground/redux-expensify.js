import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'; // generate random id

// ADD-EXPENSE
// to keep 'addExpense' as a pure function we
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense]; //state and action into new
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => id !== action.id);
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
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
		filters: filtersReducer,
	}),
);

store.subscribe(() => {
	console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({discription: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({discription: 'Coffee', amount: 300}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

console.log(expenseOne);

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
