import React from 'react';
require('prismjs');
import Prism from 'react-prism'

export default ({title, value}) =>
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