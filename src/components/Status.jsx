import React from 'react';

function Status({ ended, victory, health, word }) {

    const status = ended ? (
        victory ? "Congratulations!! You won!!" : `Game Over! The Correct Ans is ${word}.`
    ) : (
        "Life Bar = " + "♡".repeat(6 - health) + "♥".repeat(health)
    );

    return (
        <div className='status'>
            Status: {status}
            {ended &&
                <>
                    {'   '}
                    <a href='/'>Restart</a>
                    {'   '}
                    <a href='/'>Home</a>
                </>
            }
        </div>
    );
}

export default Status;