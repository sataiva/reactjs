import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import YouTube from 'react-youtube';

export default (props) =>
    <MainLayout>
        <div>
            <h2>What is DOM?</h2>

        <YouTube videoId="rTzMymVuELg" />
            <p>It's a simple concept. Before learning Reactjs, if you could brush up on your knowledge on
                DOM, you'd greatly appreciate and learn Reactjs. </p>
        <CtaButton to="/react-intro/hello-world">Next</CtaButton>
        </div>
</MainLayout>