import React from 'react';
import { Link } from 'react-router-dom';
import playButton from '../images/play-button-1.svg';
import LifeBar from './LifeBar';


function Status({ ended, victory, health, word, refreshPage }) {

    const status = ended ? (
        victory ? "Congratulations!! You won!!" : `Game Over! The Correct Ans is ${word}.`
    ) : (
        <LifeBar health={health} />
    );

    return (
        <div className='status gamingfont'>
            Status: {status}
            {ended &&
                <>
                    {'   '}
                    <div className='a' onClick={refreshPage}>Restart<img className='play' src={playButton} alt="Play" /></div>
                    {'   '}
                    <Link to={'/'}>Home</Link>
                </>
            }
        </div>
    );
}

export default Status;