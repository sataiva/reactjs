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
   var ele = <h1>Hello world</h1>
   var para = <p> This is going to be awesome </p>
   var parent = <div>{ele} {para}</div>
   ReactDOM.render(parent, app)
</script>
</html>
`
export default (props) =>
    <MainLayout>
        <div>
            <Block title="Multiple elements in JSX" lang="html" value={initReactJsx} />
            <p> Please try without the curly braces to see what happens. 
                So far we saw how to create react dom elements and finally render into an actual DOM element.
                Next, you to need learn 3 things, then you're done learning Reactjs</p>
                <p>The three things are:</p>
            <ul>
                <li>Component</li>
                <li>State</li>
                <li>Lifecycle methods</li>
            </ul>
            <CtaButton to="/react-intro/component">What is a component?</CtaButton>
        </div>
</MainLayout>