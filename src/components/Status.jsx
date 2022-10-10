import React from 'react';

function Status({ ended, victory, health }) {

    const status = ended ? (
        victory ? "Congratulations!! You won!!" : "Game Over!"
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