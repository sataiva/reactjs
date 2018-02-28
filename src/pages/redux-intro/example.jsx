import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'
import YouTube from 'react-youtube';
import Helmet from "react-helmet"

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
swissBankAccount.dispatch({type: "ABORT"})
console.log('balance', swissBankAccount.getState() )
</script>
</head>

<body>
  <div id="app">
  </div>
</body>
</html>
`
export default (props) =>
    <MainLayout>
         <Helmet title={"Redux simple example tutorial- 2018"} />
        <div>
            <YouTube videoId="ndTbiDQjbiE" />
            <p>Jordan Belford from The Wolf of Wall Street movie. 
                He goes to Switzerland and to a bank to secure his money.
                He has written down a list of instructions in a piece of paper.
                He then creates an account associated with this instructions.
                The bank has to strictly follow that instructions with regards to his account.
                Recently in India a guy swindled $2 Billion, so starting Nirav Modi as Jordan Belford
                as an example let's learn reduxjs.
                </p>
            <YouTube videoId="-8_HQ-fEthU" />
            <Block title="Reduxjs ft Nirav Modi" lang="html" value={initReactJsx} />
            <p>Copy, paste the above code in a new index.html file and open your browser console and play with it</p>
            <CtaButton to="/redux-intro/react-redux">So far good, next</CtaButton>
        </div>
</MainLayout>