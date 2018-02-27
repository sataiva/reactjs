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
   class Hello extends React.Component {
       render() {
           var ele = <h1>Hello world</h1>
           var para = <p> This is going to be awesome </p>
           var parent = <div>{ele} {para}</div>
           return parent;
       }
   }
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
   class Hello extends React.Component {
       render() {
           var ele = <h1>{this.props.msg}</h1>
           var para = <p> This is going to be awesome </p>
           var parent = <div>{ele} {para}</div>
           return parent;
       }
   }
   ReactDOM.render(<Hello msg="Hello world" />, app)
</script>
</html>
`
export default (props) =>
    <MainLayout>
        <div>
            <p>Previously we saw a simple dumb Component which returns html tags based on the inputs. 
                What if we want a timer or some value that keeps changing because user pressed some button.
                We need to track that value or state. Function does not have such feature. But classes
                have the ability to have property, so let's define Component as a class.
            </p>
            <Block title="Component as a class inheriting React" lang="html" value={initReactJsx} />
            <p>In such a class, the render method is invoked by react when calling that component.
                render() is the place where all your rendering related tags goes. You must define
                the function. 
            </p>
            
            <Block title="Props are passed as object variable" lang="html" value={component} />
            <CtaButton to="/react-intro/state">What is a state?</CtaButton>
        </div>
</MainLayout>