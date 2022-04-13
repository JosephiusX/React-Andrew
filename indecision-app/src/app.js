import IndecisionApp from './components/IndecisionApp';
import React from 'react'
import ReactDOM from 'react-dom';

ReactDOM.render(
	<IndecisionApp options={['Default Option One', 'Default Option Two']} />,
	document.getElementById('app'),
);
