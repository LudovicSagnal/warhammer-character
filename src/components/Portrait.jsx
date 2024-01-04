import React from 'react';

const Portrait = ( gender ) => {

    return (
        <div className='portrait-frame'>
            <img className='frame' src="./portraits/frame.webp" alt="" />
            {gender.gender === 'female' && <img className='avatar' src="./portraits/default_woman.webp" alt="portrait femme" /> }
            {gender.gender === 'male' && <img className='avatar' src="./portraits/default_man.webp" alt="portrait homme" /> }
        </div>
    );
};

export default Portrait;