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

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
});

// SET TEXT FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense]; //state and action into new
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
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
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
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
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

const user = {
	name: 'Jen',
	age: 24,
};

console.log({
	age: 27, // not overwritten before the spreade
	...user,
	location: 'Philadelphia',
	// age: 27, // age is overwritten to 27
});
