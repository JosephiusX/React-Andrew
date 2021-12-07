# React-Andrew

## Startup Reminder

to run the react app on my machine for development purposes:

        - In indecision-app dir run babel command in lesson 9:
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

this tells babel to watch src/app.js and translate it to public/scripts/app.js

        - open indx.html in the scripts folder in the public directory with live server.

## Section 3.7

install live server

    -yarn:
        yarn global  add live-server

        -or-

    -NPM:
        npm i -g live-server

## Sec 3.9 Setting up Babel

in indecision app

    -babel command line interface:
        yarn global add babel-cli@6.24.1
            ||
        npm i -g babel-cli@6.24.1

            run babel --help to confirm

setting up react and env presets

    -initalize indecision-app creating a package.json file
        yarn:
            yarn init
            yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
                ||
        node:
            npm init
            npm i babel-preset-react@6.24.1 babel-preset-env@1.5.2

not a bad time to add node modules to .gitignore

    -specify path to our code in indecision-app dir:
        babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

this sets up babel so that it watches for changes in our src/app.js and translate it to our public/app.js

## 3.10 Exploring ejx

vs code extension babel es6/es7 is helpful as well as path intelisense

CHALLANGE: Create a templateTwo var JSX expression

    -div
    -h1 -Andrew Mead
    -p Age: 26
    -p location: Philadelphia

    - RECAP

    - Adjacent JSX elements must be wrapped in an enclosing tag.

when working with jsx I can only have a single root element.

    - within '{}' in jsx javascript expressions can be placed

JSX allows me to represent html in my javascript file wrapped un a div. In the html like language I can reference variables in the javascript code in the file.

render template Two instead of template

## 3.11 JSX Expressions

Challange:

    -create app object title/subtitle
    -use title/subtitle in the template
    -render template

## 3.12 Conditional Rendering in JSX

    && operator
        true && 'Some age'
            returns: 'Some age'

        false && 'Some age'
            returns: false

        - conditional statements
            true ? 'joseph' : 'Anonymos'

the above translates : if the first name is true than output 'joseph', else output 'Anonymos

challange

    -only render the subtitle (and p tag) if subtitle exist - logical && operator
    -render new p tag - if options.length > 0 'Here are your options' 'no options'

## 3.16 Events and Attributes

in JSX

    -class:
        className

    -React Dom Elements Docs:
        https://reactjs.org/docs/dom-elements.html
            -All Supported HTML Attributes is a good reference

Challange:

    -make button -1  - setup minusOne function and register - log 'minusOne'
    -make reset button "reset" - setup reset function - log "reset"

## 3.17 Manual Data Binding

Challange:

    -subtract 1 from count - render
    -set count to 0 - render - render

JSX does not have data binding built in

    ?? what is data binding

it would seem that data binding would refer to data to the web automatically updating when changes are made. React doesen't have data binding so we need to make a function to update our page when changes are made.

    -create renderCounterApp() to solve this

now when fn count() runs for instance, the first line incrimemts the count, and after the change is made programatically we run the renderCounterApp() fn to update the changes on the user end.

Rerendering the entire app whenever a change is made would be an intensive way of handleing things. Thats why Reacts virtual dom algorithm knows to only update elements within the dom that have changed. No energy is wasted.

## 18. Forms and Inputs

this page gives a rundown of the event handlers available to us.

    -for the form we are going to use onSubmit={onFormSubmit} and create a function with that name

    CHALLANGE:

        - create render function that renders the new jsx
        - call it right away
        - call it after options array added to

    CHALLANGE:

        - create "Remove All" button above list
        - on click -> wipe the array -> rerender

## 19. Arrays in JSX

JSX supports strings as well as numbers. It does not support objects, and it ignores booleans, null , and undefined.

I can use JSX within an array. Each child of an array needs a unique identifier so that JSX can optomize the rendering process.

        CHALLANGE:

            - map over add.options getting back an array of lis (set key and text)

        SOLUTION:

            {app.options.map(option => (
    			<li key={option}>{option}</li>
    		))}

## 20. Picking an Option

21. Build it: Visibility Toggle

babel command for setting up babel:

    babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch


          CHALLANGE:

              - h1 with title visibility toggle
              - detail string
              - button called hide details that hides details when clicked

          SOLUTION:

                build-it-visible.js

in his solution the button text changes as well depending on weather the text is visible.

        - easally solved by adding a turnary operator to the jsx button within brackets so that the button text changes appropriately based on the current visibility.

        - switch back to app.js with babel:

            - In indecision-app dir run babel command in lesson 9:
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

22. React Components

React components allow us to take our big application and break it up into small pieces. For example we could have a component for the header, another for the user profile and a different component for signing in and handleing user interaction when the form is submitted.

23.   Thinking in React

24.   ES6 Classes: Part 1

      -  Set up babel to use our es6-classes-1.js: babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

React components are made using classes

        CHALLANGE:
            - Setup constructor to take name and age (default to 0)
            - getDiscription - Andrew Mead is 26 years old.

25. ES6 Classes: Part II

We can create a subclass of person called Students which is a person with a name and age, but we also want to track a major for the student.

        - we make a new class called Student
        - we extends the use of the Person methods to be used in students(students are people!)
        - then we make methods in Student for our student spacific needs

Before adding any methods to student we can already use it exactly like the Person class due to those properties being extended from Person to Student

        -using logical not operator

            ! true:
                false

            ! false:
                true

            !! true
                true

            !! false
                false

a single '!' (not operator) will flip the value of a boolean. '!!' flips the value twice.

we know that this.major will either be a string or undefined. so we flip it twice.

    ?? im not understanding the utility of this in this case
    ** The point is that instead of returning the variable, it returns either false or true, it also turns null and undefined to false.

the result however is that when I run the method on students it returns true if a major is included and false if the student dosent have a major in the paramiters

if I use getDiscription() in the student class it works just like in the parent class that it is inherited from. I can override that by making a new method in Student with the same getDiscription() name.

Now getDiscription() is different from the parent.

I can access the parent functionality agan by nameing a variable in the Student getDistribution() method and setting it equal to super.getDescription(). I have overwritten it and now have included it superemposed from the parent to be used along with new functionality.

            CHALLANGE: Travler -> Person

            - Add support for home location
            - Override getGreeting()
            - 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
            - 2. Hi I am andrew Mead

26.   Creating a React Component

          - first we cut contents from app.js and paste into new file in playground called jsx-indecision

          - then we setup the babel command to run src/app.js:
              babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

27.   Nesting Components

            -  make React Component IndecisionApp
            -  place in the div from const jsx.
            -  delete const jsx
            -  add '<IndecisionApp />' to the render function at the bottem of the code

      CHALLANGE:

            - Create brand new component called option with text 'Option component here'

      SOLUTION:

            - create class component:

            class Option extends React.Component {
                render() {
                    return (
                        <div>
                            <p>this is an option</p>
                        </div>
                    );
                }
            }

            - then nest It within Options div:

            class Options extends React.Component {
                render() {
                    return (
                        <div>
                            <Option />
                        </div>
                    );
                }
            }

we learned that our components can render jsx meaning they can render other components. That allows us to create the nested structure we need for our applications.

28. Component Props

props are the core of how components communicate with each other

        - similar to html props as they are key value pairs.

        EXAMPLE:
            - we can add "title="Test value" to <Header /> in IndecisionApp

            - in header we can use it by using this before the return statememt:
                console.log(this.props)

The value in the nested <Header /> are logged to the console

now we can use this.props.title in jsx. we have successfully used our first prop.

        CHALLANGE:
            - Setup options prop for Options component
            - Render the length of the array
            - create new paragraph element for every item in the page

        SOLUTION:
            - in Indecision app component pass options variable into the props:
                <Options options={options} />

            - in Options use the variable:
                <h3>{this.props.options.length}</h3>

            -pt.2
                <ol>
    				{this.props.options.map(option => (
    					<p> key{option}</p>
    				))}
    			</ol>

this solves it but to go further we can just pass in <Option /> instead

what we learned is that when we create instances of react components we can also choose to pass data into it that looks very much like html attributes (key value pairs) key is a string and the value can be anything we like, string number or any other js expression. Then we can use that information with this.props. this gives us oneway communication.

29. Events & Methods

instead of having global functions for our events we can add them as methods to our components

    CHALLANGE:
        - Add Remove All button to Options component
        - Setup handleRemoveAll -> alert some message
        - setup onClick to fire method

    SOLUTION:
        class Options extends React.Component {
            handleRemoveAll() {
                alert('handleRemoveAll');
            }
            render() {
                return (
                    <div>
                        {this.props.options.map(option => (
                            <Option key={option} optionText={option} />
                        ))}
                        <button onClick={this.handleRemoveAll}>Remove All</button>
                    </div>
                );
            }
        }

    PT.2:
        - setup the form in AddOption with a text input and a button
        - wire up onSubmit
        - handleAddOption -> fetch the value typed typed -> if value, then alert

    SOLUTION:
        class AddOption extends React.Component {
            handleAddOption(e) {
                e.preventDefault();

                const option = e.target.elements.option.value;

                if (option) {
                    alert(option);
                }
            }
            render() {
                return (
                    <div>
                        <form onSubmit={this.handleAddOption}>
                            <input type="text" name="option" />
                            <button>Add Option</button>
                        </form>
                    </div>
                );
            }
        }

30. Method Binding

we are using bind to reset the context

?? check MDN for more useful things I can do with bind

31. What Is Component State?

state allows our components to manage data so that we dont have to re-render when changes are made

        - setup default state object
        - the component is rendered with default state values *
        - state changes based on event
        - Component re-rendered using new state values
        - ??Start at 3

component state is essential for interactive applications

we learned that our state is an object with key value pairs. we define our initial data and that allows us to get that rendered to the screen(if count is set to 0 it starts at 0). we can change the state object based off of an event.

32.   Adding State to Counter App: Part 1

          - setup babel to run counter-example.js as source:
                babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

          CHALLANGE:
            - create 3 methods: handleAddOne, handleMinusOne, handleReset - Use console.log to print the method name

          SOLUTION:
            class Counter extends React.Component {
                constructor(props) {
                    super(props);
                    this.handleAddOne = this.handleAddOne.bind(this);
                    this.handleMinusOne = this.handleMinusOne.bind(this);
                    this.handleReset = this.handleReset.bind(this);
                }
                handleAddOne(e) {
                    console.log('add one');
                }
                handleMinusOne(e) {
                    console.log('minus one');
                }
                handleReset(e) {
                    console.log('reset');
                }
                render() {
                    return (
                        <div>
                            <h1>Count: </h1>
                            <button onClick={this.handleAddOne}>+1</button>
                            <button onClick={this.handleMinusOne}>-1</button>
                            <button onClick={this.handleReset}>reset</button>
                        </div>
                    );
                }
            }

            ReactDOM.render(<Counter />, document.getElementById('app'));

33.   Adding State to counter App: Part II

            - In the constructor fn set this. state = {}

34.   Alternative setState Syntax

                  - this way has been around for a while:
                      handleReset(e) {
                          this.setState(prevState => {
                              return {
                                  count: 0,
                              };
                          });
                      }

                  - An alternative method that is now concitered preferred:

      our calls to this.setState are asynchronous so they can move to the next line without making a change to the state resulting in the only the last instance being registered.

35.   Build It: Adding State to Visibility toggle

              - srtup babble:
                 babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

              CHALLANGE:
                - VisibilityToggle - render, constructor, handleToggleVisibility - visibility -> false
