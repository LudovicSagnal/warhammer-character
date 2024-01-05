import React from 'react';

const Portrait = ( { choosenPortrait } ) => {

    const portraitPath = './portraits/';

    return (
        <div className='portrait-frame'>
            <img className='frame' src="./portraits/frame.webp" alt="" />
            <img src={portraitPath + choosenPortrait} alt="" />
        </div>
    );
};

export default Portrait;