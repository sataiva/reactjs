import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'


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
   function Hello() {
    var ele = <h1>Hello world</h1>
    var para = <p> This is going to be awesome </p>
    var parent = <div>{ele} {para}</div>
    return parent;
   }
   // ReactDOM.render(Hello(), app)
   ReactDOM.render(<Hello />, app)
</script>
</html>
`
const component = `
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
   function Hello(props) {
    var ele = <h1>{props.msg}</h1>
    var para = <p> This is going to be awesome </p>
    var parent = <div>{ele} {para}</div>
    return parent;
   }
   ReactDOM.render(<Hello msg="hello world" />, app)
</script>
</html>
`
export default (props) =>
    <MainLayout>
        <div>
            <Block title="Component is like a function and a html tag" lang="html" value={initReactJsx} />
            <p>A component is like a html tag but defined by you! And it is defined as a function. 
                Since it is a function, it should also be able to accept arguments, right? 
                Since it is a html tag, it should also be able to accept attributes, right?
                </p>
            <Block title="HTML attributes are passed to the function in an object" lang="html" value={component} />
            <CtaButton to="/react-intro/component-as-a-class">What is a state?</CtaButton>
        </div>
</MainLayout>