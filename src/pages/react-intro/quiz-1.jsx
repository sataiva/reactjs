import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'
import styled from 'styled-components';

const QuestionBox = styled.div`
 border: 1px solid grey;
 margin: 5px 0px;
`
const Container = styled.div`
padding: 4px;
`
const val = [{name: "Array"}, {name: "Object"}, {name: "Function"}]
class Quiz extends React.Component {
    state = {
        res: null,
        checked: "Two"
    }
    render() {
        
        return(
            <QuestionBox>
                <Container>
                <div style={{width: "30%"}}>
                <Block title="" value={this.props.ques} />
                </div>
                <div>
                    {val.map((i) => 
                <label className="container">{i.name}
                        <input type="radio" checked={i.name == this.state.checked} name="radio" onChange={() => {
                            const res = this.props.ans === i.name;
                            this.setState({checked: i.name, res})
                        }}/>
                        <span className="checkmark"></span>
                </label>
                    )}
                    {this.state.res == null ? null : this.state.res ? <p> You're right </p> : <p> Please try again </p>  }
                </div>
                </Container>
            </QuestionBox>
        );
    }
}
export default (props) =>
    <MainLayout>
        <h3>  A quick quiz </h3>

        <p>Next time when you see curly braces or dot or parenthesis, it should be your cue</p>
        <Quiz key="1" ques={`[]`} ans="Array"/>
        <Quiz key="2" ques={`function {}`} ans="Function"/>
        <Quiz key="3" ques={`{}`} ans="Object"/>
        <Quiz key="4" ques={`() => {}`} ans="Function"/>
        <Quiz key="5" ques={`a()`} ans="Function"/>
        <Quiz key="6" ques={`b.name`} ans="Object"/>
        <CtaButton to="/react-intro/javascript-essentials">Done, next.</CtaButton>
    </MainLayout>