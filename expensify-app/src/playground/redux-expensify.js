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

// SORT_BY_AMOUNT
const sortByAmount = (text = '') => ({
	type: 'SORT_BY_AMOUNT',
	text,
});

// SORT_BY_DATE
const sortByDate = (text = '') => ({
	type: 'SORT_BY_DATE',
	text,
});

// SET_START_DATE
const setStartDate = startDate => ({
	type: 'SET_START_DATE',
	startDate,
});

// SET_END_DATE
const setEndDate = endDate => ({
	type: 'SET_END_DATE',
	endDate,
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
		case 'SORT_BY_AMOUNT':
			return {
				...state, // spread
				sortBy: 'amount',
			};
		case 'SORT_BY_DATE':
			return {
				...state, // spread
				sortBy: 'date',
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate,
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

// Timestamps (miliseconds)
// January 1st 1970 (unix epoch): starting point for all timestamps
// 3340, 10, -203
// time zone undependant

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter(expense => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
		//CHALLANGRE: figure out if expenses.description as has the text variable string inside of it
		// convert both strings to lower case
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	});
};
// store creation
// combineing reducers
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	}),
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({discription: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({discription: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// //CHALLANGE
store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

// //CHALLANGE
// store.dispatch(sortByAmount('Ammmmount'));
// store.dispatch(sortByDate('40283947'));

// CHALLANGE
// store.dispatch(setStartDate(-2000)); //	startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

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

// const user = {
// 	name: 'Jen',
// 	age: 24,
// };

// console.log({
// 	age: 27, // not overwritten before the spreade
// 	...user,
// 	location: 'Philadelphia',
// 	// age: 27, // age is overwritten to 27
// });
