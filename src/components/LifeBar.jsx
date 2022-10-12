import React from 'react';
import heartSVG from '../images/heart.svg';
import heartfilledSVG from '../images/heart-filled.svg';

function LifeBar({ health }) {
    return (
        <div className='inline-div'>
            Life Bar =
            {' '}
            {<WhiteHeart n_times={6 - health} black={false} />}
            {<WhiteHeart n_times={health} black={true} />}
        </div>
    );
}

function WhiteHeart({ n_times, black }) {

    let svgSource = black ? heartfilledSVG : heartSVG
    let altText = black ? "1" : "0"

    return (
        <>
            {
                Array.apply(null, { length: n_times }).map((value, index) => (
                    <>
                        <img key={index} className='heart' src={svgSource} alt={altText} />
                    </>
                ))
            }
        </>
    )
}

export default LifeBar;