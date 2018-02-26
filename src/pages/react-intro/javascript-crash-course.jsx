import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
require('prismjs');
import Prism from 'react-prism'

const variables = `
var name;
var name = "Javascript";
// Tip: Never ever use var, there are downsides

const name = "Javascript";
// Always use const 

let name;
let name = "Javascript";
name = "js";
// If you need to modify or 
// reassign your variable
// instead of const, use let
`

const variableTypes = `
const name = "Javascript"
const rank = 1
const worth = 12000000.50
const friends = ["html", "css"]
const bio = {
    debut: 1995,
    nickname: "the rockstar cool kid"
}
`

const conditionals = `
const looksEasy = true;
if(looksEasy) {
} else {
}
// similar to most languages. yay! :)

const key = 12;
switch (key) {
   case 12:
   break;

   default:
   break;
}
// don't try to remember this.
// you could use snippets feature of your editor
`

const looping = `
for (let index = 0; index < 5; index++) {
    ///...
}
// we will not use this most of the time.
// there are plenty of other ways to loop.
// we will see in few minutes. 
`
const functions = `
function sum(a, b) {
    return a+b;
}

const sum = function(a, b) {
    return a+b;
}

const sum = (a, b) => {
    return a+b;
}

// all these are a way to create a function named "sum"
sum(1, 2)

// the function can accept arguments of any 
// data types - string, float, array, object
// and even another function.

function brushTeeth() {
    console.log("eeeee")
}

function wakeUp(activity) {
    activity()
}
wakeup(brushTeeth) // eeeee

`

const api = `
// in java or c++ or python, you have api to do 
// things with system -- like creating a file/dir, listening on port.
// javascript runs in the browser. So it will have access to browser related
// functionality through "window" object.

window.console.log("I can write it to the console of the browser, yay!")
window.location.host
window.localStorage // access browser's storage.
window.document.write("I can modify the DOM! DOM is like the PSD file of the browser")

// window is optional, you can omit it.
console.log("this works fine too")
`
const Block = ({title, value}) =>
        <div>
            <h3>{title}</h3>
            <div className="gatsby-highlight">
                <pre>
                    <Prism className="language-javascript">
                        {value}
                    </Prism>
                </pre>
            </div>
        </div>

export default (props) =>
    <MainLayout>
        <Block title="1. Variable declarations - 3 ways" value={variables} />
        <Block title="2. Variable types - 5 types" value={variableTypes} />
        <Block title="3. Conditionals" value={conditionals} />
        <Block title="4. Looping" value={looping} />
        <Block title="5. Functions - 3 ways" value={functions} />
        <Block title="6. Environment api - window" value={api} />
        <p>Congratulations! You now know 80% javascript to work with most apps.</p>
        <p>Let's learn few more features that I think is a must if you work on any js project</p>
        <CtaButton to="/react-intro/quiz-1">I'm ready, lets go</CtaButton>
    </MainLayout>