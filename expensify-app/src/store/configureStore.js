import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
	// store creation
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
		}),
	);

	return store;
};


// looks the same
// import { createStore, combineReducers } from 'redux';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';

// export default () => {
//   const store = createStore(
//     combineReducers({
//       expenses: expensesReducer,
//       filters: filtersReducer
//     })
//   );

//   return store;
// };
