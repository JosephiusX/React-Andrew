'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
			return 'hello. I am ' + this.name + '!';
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			return this.name + ' is ' + this.age + ' old.';
		}
	}]);

	return Person;
}();

var Student = function (_Person) {
	_inherits(Student, _Person);

	// here we need name and age from Person as well as the major peramiter
	function Student(name, age, major) {
		_classCallCheck(this, Student);

		// defines name and age from person because it is extended to student
		var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

		_this.major = major; // we define this because its unique to person
		return _this;
	}

	_createClass(Student, [{
		key: 'hasMajor',
		value: function hasMajor() {
			return !!this.major;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

			if (this.hasMajor()) {
				description += ' Their major is ' + this.major;
			}
			return description;
		}
	}]);

	return Student;
}(Person);

// MY SOLUTION - seems to work but seems i misunderstood the problem
// class Travler extends Person {
// 	constructor(name, age, location) {
// 		super(name, age);
// 		this.location = location;
// 	}

// 	homeLocation() {
// 		return this.location;
// 	}

// 	getGreeting() {
// 		return `Hi. I am ${this.name}. I'm visiting from ${this.homeLocation()}`;
// 	}
// }

// COURSE SOLUTION:


var Travler = function (_Person2) {
	_inherits(Travler, _Person2);

	function Travler(name, age, homeLocation) {
		_classCallCheck(this, Travler);

		var _this2 = _possibleConstructorReturn(this, (Travler.__proto__ || Object.getPrototypeOf(Travler)).call(this, name, age));

		_this2.homeLocation = homeLocation;
		return _this2;
	}

	// overwrite parent method


	_createClass(Travler, [{
		key: 'getGreeting',
		value: function getGreeting() {
			// bring in parent method functionality back to be used along with new functionality
			var greeting = _get(Travler.prototype.__proto__ || Object.getPrototypeOf(Travler.prototype), 'getGreeting', this).call(this);

			if (this.homeLocation) {
				greeting += ' I am visiting from ' + this.homeLocation + '.';
			}

			return greeting;
		}
	}]);

	return Travler;
}(Person);

var me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getGreeting());

var other = new Student();
console.log(other.getGreeting());

var i = new Travler('Gramkracker', 33, 'Oakland');
console.log(i.getGreeting());

// const person = new Person(); // with this we can see that getDescription() works differently now when used Student as opposed to Person
// console.log(person.getDescription());

// Previous Lecture

// we can make as many instances of the class as we want by assigning them to new variables
// const me = new Person('Andrew Mead', 30);
// console.log(me.getGreeting()); // hello. I am Andrew Mead !
// console.log(me.getDescription(30)); // Andrew Mead is 30 old.

// const sister = new Person('Nicara', 36);
// console.log(sister.getGreeting()); // hello. I am Nicara !
// console.log(sister.getDescription()); // Nicara is 36 old.

// const noName = new Person(); // if we dont pass in a name the default that we specified above is used
// console.log(noName.getGreeting()); // Person {name: 'anonymus'}
// console.log(noName.getDescription()); // anonymus is 0 old.
