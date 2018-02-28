import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'
import {FaTwitter, FaFacebook, FaYoutube} from 'react-icons/lib/fa'
import styled from 'styled-components'
import Helmet from "react-helmet"

const UserIcon = styled.a`
  margin-left: 25px;
  color: white;
  &:hover {
    color: rgba(0, 0, 0, .2);
    border-bottom: none;
  }


`
const initReactJsx = `
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.js"></script>
<script>
const niravModiInstructions = (balance = {amount: 11000, name: "Nirav Modi"}, action) => {
    switch (action.type) {
        case "ABORT":
         return {amount: 0, name: "Nirav Modi"}
        default:
            return balance;
    }
};
const swissBankAccount = Redux.createStore(niravModiInstructions)        

console.log('balance', swissBankAccount.getState() )
swissBankAccount.dispatch({type: "ABORT"}
console.log('balance', swissBankAccount.getState() )
</script
</head>

<body>
  <div id="app">
  </div>
</body>
</html>
`
const iconStyle = {
  color: "#35495E",
  width: '20px',
  height: '20px',
}


export default (props) =>
    <MainLayout>
        <div>
            <h1>Redux in reactjs</h1>
            <h3>[WIP] Update on Saturday</h3>
            <p>You could subscribe to the following to receive the updates:</p>
        <UserIcon href='https://twitter.com/SataivaT'>
          <FaTwitter style={iconStyle} />
        </UserIcon>
        <UserIcon href='https://fb.com/sataiva'>
          <FaFacebook style={iconStyle} />
        </UserIcon>
        <UserIcon href='https://www.youtube.com/channel/UC1F-wHR6SqoSjM7Nyxtkl7g'>
          <FaYoutube style={iconStyle} />
        </UserIcon>
        </div>
</MainLayout>
