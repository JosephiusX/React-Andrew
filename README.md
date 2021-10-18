# React-Andrew

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
