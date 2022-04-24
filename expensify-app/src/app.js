import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// stateless functional components
const ExpenseDashboardPage = () => <div>This is from mydashboard component</div>;

const AddExpensePage = () => <div>This is from add expense component </div>;

const EditExpensePage = () => <div>This is from Edit component</div>;

const  HelpPage = () => <div>This is from Help component </div>;

const  NotFoundPage = () => <div>404! </div>;

const routes = (
	<BrowserRouter>
     <Switch >
     <Route path="/" component={ExpenseDashboardPage} exact={true}/>
     <Route path="/create" component={AddExpensePage} />
     <Route path="/edit" component={EditExpensePage} />
     <Route path="/help" component={HelpPage} />
     <Route component={NotFoundPage} />
     </Switch>
	</BrowserRouter>  
);

ReactDOM.render(routes, document.getElementById('app'));
