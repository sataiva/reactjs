import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Helmet from "react-helmet"
import Block from '../../components/Block'
import img from '../../images/redux.png';

const initReactJsx = `
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.js"></script>
</head>

<body>
  <div id="app">
  </div>
</body>
</html>
`
export default (props) =>
    <MainLayout>
         <Helmet title={"Redux introduction tutorial - 2018"} />
        <div>
            <p>Reduxjs is a very simple js library. So, create an index.html in your Desktop with this content</p>
            <Block title="" lang="html" value={initReactJsx} />
            <p>Open the file in your browser. In your js console, as you type Re, it'd autocomplete as Redux.
                Meaning we have access to the redux class, let's use it.
            </p>
            <img src={img} alt="simple redux"/>
            <CtaButton to="/redux-intro/example">Cool, next</CtaButton>
        </div>
</MainLayout>