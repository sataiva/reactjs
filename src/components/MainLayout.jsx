import React from "react"
import config from "../../data/SiteConfig"
import CtaButton from './CtaButton'
import Helmet from "react-helmet"
import Navigation from './Layout/Navigation'
import styled from "styled-components"

export default ({ children }) =>
    <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
            <IndexHeadContainer>
                <Navigation />
            </IndexHeadContainer>
            <BodyContainer>
                {children}
            </BodyContainer>
        </main>
    </div>

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.block};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`