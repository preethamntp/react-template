# Steps followed to create React-TS-Webpack

# Steps 1 to 4

    ## Created
        $ mkdir react-template
        $ mkdir src
        $ mkdir build
        $ touch .gitignore
            add build to it
        $ git init
            Initialized empty Git repository in /Users/admin01/Documents/reactTutorial/REACT-TEMPLATE/.git/
        $ npm init --y
            wrote /react-template/package.json:
        $ touch src/index.js
            <body> <div id="root"></div></body>
        $ commit

# Step 5 to 8

    ## ignore directory
        $ gitignore => node_modules
    ## Create dependencies Packages that are required
        $ yarn add react react-dom
        $ yarn add -d typescript @types/react @types/react-dom
    ## Add configuration for typescript compailer
        $ tsconfig.json
    ## Setup the entry point and the root component of the application
        $ touch App.tsx
        $ touch index.tsx
    ## Install Babble with the necessory plugins as dev dependency
        $ yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
    ## Once added packages add .babelrc
        $ touch .babelrc
    ## Install webpack related packages as dev dependency
        $ yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
    ## Add Babel loader to transpile javascript files using babel and webpack
        $ yarn add -D babel-loader
    ## Create an another folder called webpack and webpack.config.js
        specify the requirements such as 
        'path', 'HtmlWebpackPlugin'
        'entry', 'resolve', 'module', 'output', 'mode', 'plugins'
    ## write npm script to run the app in package.json
        {
            "scripts":{
                "start": "webpack serve --config webpack/webpack.config.js --open",
                "test": "....."
            }
        }
        " --open is used to open up the app automatically in the browser if the webpack compiles successfully