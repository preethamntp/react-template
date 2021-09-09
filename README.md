# Steps followed to create React-TS-Webpack

## Steps 1 to 4
###### Created
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

## Step 5 to 8

###### ignore directory
        $ gitignore => node_modules
###### Create dependencies Packages that are required
        $ yarn add react react-dom
        $ yarn add -d typescript @types/react @types/react-dom
###### Add configuration for typescript compailer
        $ tsconfig.json
###### Setup the entry point and the root component of the application
        $ touch App.tsx
        $ touch index.tsx
###### Install Babble with the necessory plugins as dev dependency
        $ yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
###### Once added packages add .babelrc
        $ touch .babelrc
###### Install webpack related packages as dev dependency
        $ yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
###### Add Babel loader to transpile javascript files using babel and webpack
        $ yarn add -D babel-loader
###### Create an another folder called webpack and webpack.config.js
        specify the requirements such as 
        'path', 'HtmlWebpackPlugin'
        'entry', 'resolve', 'module', 'output', 'mode', 'plugins'
###### write npm script to run the app in package.json
        {
            "scripts":{
                "start": "webpack serve --config webpack/webpack.config.js --open",
                "test": "....."
            }
        }
        " --open is used to open up the app automatically in the browser if the webpack compiles successfully

## To work with css (As webpack doesn't know how to process .css)
###### Since we need appropriate loader to handle this kind of file. Configure loader to process this file.
        $ yarn add -D css-loader style-loader
###### Once installed add them to "module rules" in webpack config
         module: {
                rules: [{
                        test: /\.(ts|js)x?$/,
                        exclude: /node_modules/,
                        use: [{
                        loader: "babel-loader"
                        }]},
                        {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                }]
         },
## Since we have several images and svgs in our app we have to congigure the webpack to incorporate them.
###### in the src folder create a file declarations.d.ts
        declare module '*.png';
        declare module '*.svg';
        declare module '*.ico';

        "Here webpack throw an error"
###### For image to load we need additional loaders like the file loader (in >webpack-4), but, in webpack 5 we have support for that out of the box through asset modules

###### In webpack modules add new rule as follows in "modules.rules"

        {
                test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
                type:'asset/resource'
        }

###### To load .svg files we need to add one more rule as asset/inline in "modules.rules",
###### it should be used for svg's and fonts
        {
                test:/\.(woff(2)?|eot|ttf|otf|svg|)$/
                use:'asset/inline
        }