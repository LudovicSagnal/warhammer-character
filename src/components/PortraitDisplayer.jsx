import { portraitsFemale, portraitsMale } from '../data/portraits';
import { useState, useEffect } from 'react';

const PortraitDisplayer = ({ gender, choosenPortrait, setChoosenPortrait }) => {

    const portraitPath = './portraits/';

    const handlePortrait = (portrait) => {
        setChoosenPortrait(portrait);
    };

    return (
        <div className='modal-portrait'>
            {gender === 'male' && portraitsMale.map((portrait, index) => (
                <img key={index} src={portraitPath + portrait} alt="" onClick={() => handlePortrait(portrait)} />
            ))}
            {gender === 'female' && portraitsFemale.map((portrait, index) => (
                <img key={index} src={portraitPath + portrait} alt="" onClick={() => handlePortrait(portrait)} />
            ))}
        </div>
    );
};

export default PortraitDisplayer;