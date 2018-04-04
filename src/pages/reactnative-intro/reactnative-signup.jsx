import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const inputboxes = `
import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
class SignupScreen extends Component{
    state = {
        name:"",
        phone: "",
        password: "",
        message:""
    };

    signup=()=>{
    }

    render(){
        return <View>
                <TextInputplaceholder="Name" style={styles.input} onChangeText={e => this.setState({ name: e })}/>
                <TextInputplaceholder="Phone" style={styles.input} onChangeText={e => this.setState({ phone: e })}/>
                <TextInputplaceholder="Password" style={styles.input} onChangeText={e => this.setState({ password: e })}/>
                <Text style={styles.messagetext}>{this.state.message}</Text>
                <Button onPress={this.createaccount}>Signup</Button>
                </View>
    }
}
`;

const signupfunction = `
createaccount = () => {
    const { phone, password, name, message } = this.state;
    this.props
      .mutate({
        variables: {
          phone: phone.trim(),
          password: password.trim(),
          name: name.trim()
        }
      })
      .then(resp => {
        if (resp.data.createUser) {
          const id = resp.data.createUser.id;
          this.setState({message: "Successfully created an account", phone: "", password: "", name: ""});
        } else {
          this.setState({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        this.setState({ message: "Invalid credentials" });
      });
  };
`;

const signupquery = `
const SignupQuery = gql'
  mutation CreateUser($phone: String!, $password: String!, $name: String!) {
    createUser(phone: $phone, password: $password, name: $name) {
      id
    }
  }
';
const SignupScreenWithQuery = graphql(SignupQuery)(SignupScreen);
`;

export default props =>
  <MainLayout>
    <h2>React Native Sign Up</h2>
    <p>
      Like login,<b> Signup</b> is also a primary function needed for Mobile
      Application.User authentication will perform only after the successful
      user creation in the database.
    </p>
    <ul style={{ paddingLeft: 8, listStyleType: "none" }}>
      <li>
        <h4>1. Creat a signup screen</h4>
        <p>
          To create a signup screen, i am using TextInput components to get
          values from user and a Button component to invoke signup
          functionality.
        </p>
        <Block value={inputboxes} />
      </li>
      <li>
        <h4>2. Define a login function</h4>
        <p>
          Here i am gonna use this.mutate() method to pass user values as
          arguments to a query and register a user.
        </p>
        <p>
          To use this method we should wrap our component inside database
          connectivity components.Here i am using the
          <a href="https://github.com/apollographql/react-apollo">
            <b> react-apollo </b>
          </a>
          package to establish a database connection and a query execution.
        </p>
        <Block value={signupquery} />

        <p>
          This is nothing but getting values from input boxes and do some
          validations.After validation success hit the database to authenticate
          user login details.
        </p>
        <Block value={signupfunction} />
      </li>
      <li>
        <h4>3. Display result</h4>
        <p>
          Now we have to enter a name, phone number and password to create user
          account.The database result will be displayed as a message.
        </p>
      </li>
    </ul>
    <CtaButton to="/reactnative-intro/reactnative-login">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-signup">Next</CtaButton>
  </MainLayout>;
