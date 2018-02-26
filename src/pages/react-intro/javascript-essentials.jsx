import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'

const api = `
`

export default (props) =>
    <MainLayout>
        <Block title="1. Variable declarations - 3 ways" value={api} />
        <p>Let's learn few more features that I think is a must if you work on any js project</p>
        <CtaButton to="/react-intro/javascript-crash-course">I'm ready, lets go</CtaButton>
    </MainLayout>