import { portraitsFemale, portraitsMale } from '../data/portraits';

const PortraitDisplayer = ({ gender, setChoosenPortrait, handleModalPortrait }) => {

    const portraitPath = './portraits/';

    const handlePortrait = (portrait) => {
        setChoosenPortrait(portrait);
    };

    return (
        <div className='modal-portrait'>
            {gender === 'male' && portraitsMale.map((portrait, index) => (
                <img key={index} src={portraitPath + portrait} className='portrait' alt="" onClick={() => handlePortrait(portrait)} />
            ))}
            {gender === 'female' && portraitsFemale.map((portrait, index) => (
                <img key={index} src={portraitPath + portrait} className='portrait' alt="" onClick={() => handlePortrait(portrait)} />
            ))}
            <img className='cross' src="./images/white-cross.webp" alt="" onClick={handleModalPortrait} />
        </div>
    );
};

export default PortraitDisplayer;