import React from 'react';
import Drawing from './sketch';
// import ScriptTag from 'react-script-tag';

function Background(props) {
        return(
            <div style={{position:'absolute'}}>
                {Drawing()}
            </div>
        )
}

export default Background