import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'

export default (props) =>
    <MainLayout>
        <div>
            <h2>Before diving into reactjs</h2>
            <p>Let's do a quick intro to Javascript language.</p>
            <p>If you're learning a new language like French or Japanese, you'll start with greetings, 
                then asking questions - What is your name and others. Then you'll learn how the sentences are formed (Subject-Verb-Object)
          and then learn different words.</p>
            <p>In any programming language there will be only 6 common syntaxes or features
                which you need to know to learn 80% of the language. So this will be easier than learning 
                German or Spanish. Cheers!
            </p>

            <p>And those 6 features are: </p>
            <ul style={{ paddingLeft: 8 }}>
                <li>Variable declaration,</li>
                <li>Variable types like string, number, float, array, object,</li>
                <li>conditionals (if else or switch),</li>
                <li>Loops (for loop, while loop),</li>
                <li>functions,</li>
                <li>System or enivronment api like reading file/dir, creating file/dir.</li>
            </ul>
        <CtaButton to="/react-intro/javascript-crash-course">Let's see them in js</CtaButton>
        </div>
</MainLayout>