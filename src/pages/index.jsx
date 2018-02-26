import React from "react"
import Helmet from "react-helmet"
import CtaButton from '../components/CtaButton'
import MainLayout from '../components/MainLayout'

class Index extends React.Component {

  render() {
    return (
      <MainLayout>
      <div> 
            <h2>Quick Reactjs introduction in 2018</h2>
            <p>Hope you would have seen the reasons on why use Reactjs. 
              If you are already a programmer who knows Java or C++ or python/Ruby,
               then you can learn reactjs through this tutorial in 15 mins.</p>
            <CtaButton to={'/react-intro/js-1'}>Let's start</CtaButton>
      </div>
      </MainLayout>
    );
  }
}

export default Index;

