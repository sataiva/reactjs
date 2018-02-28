import React from "react"
import Helmet from "react-helmet"
import CtaButton from '../components/CtaButton'
import MainLayout from '../components/MainLayout'

class Index extends React.Component {

  render() {
    return (
      <MainLayout>
        <Helmet title={"Quick Reactjs introduction in 2018"} />
      <div>
            <h2>Quick Reactjs introduction</h2>
            <p>Hope you would have seen the reasons on why use Reactjs.
              If you are already a programmer who knows Java or C++ or python/Ruby,
               then you can learn reactjs through this tutorial in 9 mins.</p>
            <CtaButton to={'/react-intro/js-1'}>Let's start with JS</CtaButton>
        <CtaButton to="/react-intro/dom">Skip JS part</CtaButton>
      </div>
      <div>
            <h2>Flying start with Redux</h2>
            <p>You or your team has decided to go with redux and you know bit of reactjs.
               Then you can learn reduxjs through this tutorial in 14 mins. Sit tight</p>
            <CtaButton to={'/redux-intro/library'}>Let's go</CtaButton>
      </div>
      </MainLayout>
    );
  }
}

export default Index;

