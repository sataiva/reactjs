import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const inputboxes = `
import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
class LoginScreen extends Component{
    state = {
        phone: "",
        password: "",
        message:""
    };

    login=()=>{
    }

    render(){
        return <View>
                <TextInputplaceholder="Phone" style={styles.input} onChangeText={e => this.setState({ phone: e })}/>
                <TextInputplaceholder="Password" style={styles.input} onChangeText={e => this.setState({ password: e })}/>
                <Text style={styles.messagetext}>{this.state.message}</Text>
                <Button onPress={this.login}>Login</Button>
                </View>
    }
}
`;

const loginfunction = `
login=()=>{
    const {phone,password} = this.state;
    this.props
      .mutate({
        variables: {
          phone: phone.trim(),
          password: password.trim()
        }
      })
      .then(resp => {
        if (resp.data.AuthenticateUser.result) {
          const id = resp.data.AuthenticateUser.result.id;
          AsyncStorage.setItem("userid", id);
          this.setState({message: "Loggedin successfully" });
        } else {
          this.setState({message: "Invalid credentials" });
        }
      })
      .catch(() => {
        this.setState({message: "Invalid credentials" });
      });
}
`;

const loginquery = `
const LoginQuery = gql'
  mutation AuthenticateUser(
    $phone: String!
    $password: String!
  ) {
    AuthenticateUser(phone: $phone, password: $password) {
      result
      error
    }
  }
';
export default graphql(LoginQuery)(LoginScreen);
`;

export default props =>
  <MainLayout>
    <h2>React Native Login</h2>
    <p>
      User login and authentication is a primary functionality. Let's see how to
      create a Login Page and authenticate user.
    </p>
    <ul style={{ paddingLeft: 8, listStyleType: "none" }}>
      <li>
        <h4>1. Creat a component</h4>
        <p>
          To create a login page we need an input components like Input boxes to
          enter username and password and Button component to submit values and
          invoke authentication functions.
        </p>
        <Block value={inputboxes} />
      </li>
      <li>
        <h4>2. Define a login function</h4>
        <p>
          Here i am gonna use this.mutate() method to pass arguments to a query
          and authenticate a user.
        </p>
        <p>
          To use this method we should wrap our component inside database
          connectivity components.Here i am using the
          <a href="https://github.com/apollographql/react-apollo">
            <b> react-apollo </b>
          </a>
          package to establish a database connection and a query execution.
        </p>
        <Block value={loginquery} />

        <p>
          This is nothing but getting values from input boxes and do some
          validations.After validation success hit the database to authenticate
          user login details.
        </p>
        <Block value={loginfunction} />
      </li>
      <li>
        <h4>3. Display result</h4>
        <p>
          Now we have to enter a phone number and password to login.The
          Authenticaiton result will be displayed in message text and then we
          need to navigate if the result is success.
        </p>
      </li>
    </ul>
    <CtaButton to="/reactnative-intro/introduction">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-signup">Next</CtaButton>
  </MainLayout>;
