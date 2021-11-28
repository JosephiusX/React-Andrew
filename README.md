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
