import React from 'react';
import Button from '../components/Button'
import MainLayout from '../components/MainLayout'

export default class Intro extends React.Component {
    state = {
        step: 1
    }
    next = () => {
        const step = this.state.step;
        this.setState({step: step+1});
    }
    render() {
        return (
            <MainLayout>
            </MainLayout>
        )
    }
}