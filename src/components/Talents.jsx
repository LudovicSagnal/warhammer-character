import { talents } from '../data/talents';

const Talents = () => {

    return (
        <div className='talents'>
            <h2>Talents</h2>
            {talents.map(talent =>
                <div>
                    <h3>{talent.name}</h3>
                    <p>{talent.description}</p>
                </div>
            )};
        </div>
    );
};

export default Talents;