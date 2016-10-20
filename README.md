# Compile Command
Frontend watch and compile :npm run dev
Start Server: npm run start

To deploy: npm run build

## Command history
 npm init
 npm run test
 - create the server.js
 - create public/index.html
 - create public/app.js
 npm install --save express

### webpack
 npm install webpack --save
 - create webpack.config.js
 webpack
 rm public/app.js
 touch src/index.jsx
 - add some code there
 webpack (at webpack.config.js)
 - create the index.jsx with React code

### babel
 npm install babel-loader babel-preset-es2015 babel-preset-react --save
 - edit the webpack.config.js
 - create .babelrc
 webpack

### react, react-dom
 - remove the CDN 
npm install react react-dom --save
 - edit the src/index.jsx
 webpack
 webpack --watch --progress --color
 - edit the npm file for combo
 - Tune webpack.config.js plugins for better size

### exporting module
 - create another file in src 
 - copy over the component
 - export default class....
 - import that component and put it in render

### react state
 - define initial state
 - display the state

### react eventHandler
 - create a button
 - add Event handler 
 - add state
 - bind the event

### node express endpoint
 - simple express result
 - create another component
 - import the component 
 - add event handler
 - fetch() api

