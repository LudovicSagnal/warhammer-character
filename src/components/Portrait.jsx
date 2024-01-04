import React from 'react';

const Portrait = ( gender ) => {

    return (
        <div>
            {gender.gender === 'female' && <img src="./portraits/default_woman.webp" alt="portrait femme" /> }
            {gender.gender === 'male' && <img src="./portraits/default_man.webp" alt="portrait homme" /> }
        </div>
    );
};

export default Portrait;