import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'

const initHtml = `
<html>
<head></head>
<body>
  <div id="app">
    <h1> Hello world </h1>
   </div>
</body>
</html>
`
const initJS= `
<html>
<head></head>
<body>
  <div id="app">
   </div>
</body>
<script>
  var app = document.getElementById('app')
  var ele = document.createElement('h1')
  ele.textContent = "Hello world"
  app.appendChild(ele)
</script>
</html>
`
const initReact = `
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js"></script>
</head>

<body>
  <div id="app">
  </div>
</body>

<script>
   var app = document.getElementById('app')
   var ele = React.createElement('h1', null, 'Hello world')
   ReactDOM.render(ele, app)
</script>
</html>
`
const initReactHTML = `
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js"></script>
</head>

<body>
  <div id="app">
  </div>
</body>

<script>
   var app = document.getElementById('app')
   var ele = <h1>Hello world</h1>
   ReactDOM.render(ele, app)
</script>
</html>
`
const initReactJsx = `
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>

<body>
  <div id="app">
  </div>
</body>

<script type="text/babel">
   var app = document.getElementById('app')
   var ele = <h1>Hello world</h1>
   ReactDOM.render(ele, app)
</script>
</html>
`
export default (props) =>
    <MainLayout>
        <div>
            <h2>Hello world</h2>

           <p>Create an index.html in your Desktop. You could copy paste and check your result in the browser
               at each step.
           </p>

           <Block title="Hello world using html" lang="html" value={initHtml} />
           <Block title="Hello world using javascript" lang="html" value={initJS} />
           <p>Instead of browser creating the DOM by reading from HTML, here we create DOM element 
               and append it to an existing DOM element.
           </p>
            <Block title="Hello world using reactjs" lang="html" value={initReact} />
            <p>Reactjs is a simple JS library, there is nothing special about it.
                If you know JS (latest features of it - es5, es6..) you are ready 90%. 10%
                is the react terminology or the way of doing.
            </p>
            <Block title="HTML tag inside Reactjs" lang="html" value={initReactHTML} />
            <p>The above code won't work in the browser. But it would be nice to have it working instead of writing
                React.createElement every single time.
                So we need some library which transform this html style tag into React.createElement syntax.
                This html syntax which gets converted back to react or js syntax is called jsx.
            </p>
            <Block title="Reactjs with working html tag" lang="html" value={initReactJsx} />
            <p> We have included the babel library and changed the script tag type </p>
            <CtaButton to="/react-intro/more-on-jsx">Awesome, next!</CtaButton>
        </div>
</MainLayout>