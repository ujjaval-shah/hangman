import React from 'react';
import { Link } from 'react-router-dom';
import playButton from '../images/play-button-1.svg';

function Home(props) {
    return (
        <div className='gamingfont home'>
            Pick a theme.
            <br />
            <div className='theme'>
                1. Test cricketers of 21st century
                <br />
                <div className='level'>
                    <Link to={"/theme/test_cricketers/level/easy"}>
                        Easy<img className='play' src={playButton} alt="Play" />
                    </Link>
                </div>
                <div className='level'>
                    <Link to={"/theme/test_cricketers/level/moderate"}>
                        Moderate<img className='play' src={playButton} alt="Play" />
                    </Link>
                </div>
            </div>
            <div className='theme'>
                2. Top Indian Cities (By Population)
                <br />
                <div className='level'>
                    <Link to={"/theme/indian_cities/level/easy"}>
                        Easy<img className='play' src={playButton} alt="Play" />
                    </Link>
                </div>
                <div className='level'>
                    <Link to={"/theme/indian_cities/level/moderate"}>
                        Moderate<img className='play' src={playButton} alt="Play" />
                    </Link>
                </div>
            </div>
            <div className='theme'>
                3. States of India
                <br />
                <div className='level'>
                    <Link to={"/theme/states_of_india/level/easy"}>
                        Easy<img className='play' src={playButton} alt="Play" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;