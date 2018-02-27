import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'

export default (props) =>
    <MainLayout>
        <div>
            <p>React calls few functions in a certain order. render() is a lifecylce method after which
                componentDidMount() and other functions are called. You can make your ajax or async request
                inside this componentDidMount method.
                From this point you could check <a href="https://reactjs.org/docs">the official docs</a>
                  to learn more about Reactjs.
                So far what we have seen is for learning purpose. In actual development, we will use
                webpack and other tools (like create-react-app, next.js, gatsbyjs) to organize components
                and build.
            </p>
            <p>If you want to update this tutorial, you could give a PR to <a href="https://github.com/sataiva/reactjs">this github repo</a></p>
        </div>
</MainLayout>