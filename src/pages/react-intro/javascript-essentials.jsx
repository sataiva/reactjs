import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'

const api = `
`

export default (props) =>
    <MainLayout>
        <Block title="1. String related functions" value={api} />
        <Block title="2. Array CRUD" value={api} />
        <Block title="3. Object CRUD" value={api} />
        <Block title="4. Loops with array" value={api} />
        <Block title="5. class, constructor, object variable" value={api} />
        <CtaButton to="/react-intro/javascript-crash-course">I'm ready, lets go</CtaButton>
    </MainLayout>