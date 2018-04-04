import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const state = `
class Page extends React.Component{
    state={
        title:"Sample"
    };

    // user defined function
    changeState=()=>{
        this.setState({title:"changed title"});
    }

    render(){
        return <View>
        // Text will change based on state variable value
        <Text>{this.state.title}</Text>
        <Button onPress={this.changeState}>Change State</Button>
        </View>
    }
}
`;

const dummycomponent = `
function Page{
    return <View>
    <Text>Hello world!!!</Text>
    </View>
}
`;

const smartcomponent = `
class Page extends React.Component{
    state={};
    render(){
        return <View>
        <Text>Hello World!!1</Text>
        </View>
    }
}
`;

export default props =>
  <MainLayout>
    <div>
      <h2>React Native</h2>

      <p>
        React Native lets you build mobile apps using only JavaScript. It uses
        the same design as React, letting you compose a rich mobile UI from
        declarative components.
      </p>

      <h4>3 important things you must known before starting react-native</h4>
      <ol style={{ paddingLeft: 8 }}>
        <li>
          <h5>State</h5>
          <p>
            State is an object variable which is used to store some values.
            State variables are mutable. Using state we can change Content or
            Screen.
          </p>
          <p>You can access a state variable using "this.state.variablename"</p>
          <p>
            You can modifty a state variable using "this.setState({`variablename:value`})"
          </p>
          <Block value={state} />
        </li>
        <li>
          <h5>Component</h5>
          <p>
            Component is an element like HTML element which is used to build
            User Interfaces (UI).
          </p>
          <ul style={{ paddingLeft: 8 }}>
            <li>
              <h6>Dummy component</h6>
              <Block value={dummycomponent} />
            </li>
            <li>
              <h6>Smart component</h6>
              <Block value={smartcomponent} />
            </li>
          </ul>
        </li>
        <li>
          <h5>Life Cycle</h5>
          <p>
            React and Reactnative js are executing certain methods in certail
            order.
          </p>
          <p>Ex. "render()" must be called.</p>
        </li>
      </ol>
      <CtaButton to="/reactnative-intro/reactnative-login">Next</CtaButton>
    </div>
  </MainLayout>;
