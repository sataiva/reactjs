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
       constructor(props) {
           super(props)
           this.count = 0
       }
       inc = () => {
           this.count = this.count + 1
       }
       render() {
           return(
               <div>
               <p>{this.count}</p>
               <button onClick={this.inc}> Inc </button>
               </div>
           )
       }
   }
   ReactDOM.render(<Hello msg="Hello world" />, app)
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
       constructor(props) {
           super(props)
           this.state = {
               count:  0
           }
       }
       inc = () => {
           const count = this.state.count + 1
           this.setState({count: count})
       }
       render() {
           return(
               <div>
               <p>{this.state.count}</p>
               <button onClick={this.inc}> Inc </button>
               </div>
           )
       }
   }
   ReactDOM.render(<Hello msg="Hello world" />, app)
</script>
</html>
`
export default (props) =>
    <MainLayout>
        <div>
            <Block title="Keep track of change using object variable" lang="html" value={initReactJsx} />
            <p>Here everything is pure js, nothing special with regards to React yet. Though
                the instance variable this.count changes we don't see any result in the browser, because
                React does not call the render function again and execute it.
            </p>
            <Block title="setState - sets object variable and calls render again" lang="html" value={component} />
            <p>setState function does two things, it changes the object variable this.state and also
                makes React invoke render() again, at this point of time the values are different so we 
                will get the expected result
            </p>
            <CtaButton to="/react-intro/lifecycle">What is a lifecycle?</CtaButton>
        </div>
</MainLayout>