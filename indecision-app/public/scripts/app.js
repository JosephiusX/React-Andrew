'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
	// es6 allows defaults to be added to paramiters incase one is not given
	function Person() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymus';
		var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Person);

		this.name = name; // inside class methots 'this' refers to the class instance
		this.age = age;
	}

	// method to run when explicitly called


	_createClass(Person, [{
		key: 'getGreeting',
		value: function getGreeting() {
			return this.name + ' is ' + this.age + ' old';
		}
	}]);

	return Person;
}();

// we can make as many instances of the class as we want by assigning them to new variables


var me = new Person('Andrew Mead', 30);
console.log(me.getGreeting());

var sister = new Person('Nicara', 36);
console.log(sister.getGreeting());

var noName = new Person(); // if we dont pass in a name the default that we specified above is used
console.log(noName); // Person {name: 'anonymus'}
