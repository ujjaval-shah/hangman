import React from 'react';
import AZButton from './AZButton';

const alphabet = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"];

function KeyBoard({ discovered, btnOnClick }) {
    return (
        <div className='keyboard'>
            <div className='grid2'>
                {alphabet.slice(0, 7).map(ch =>
                    <AZButton
                        ch={ch}
                        visible={!discovered.has(ch)}
                        btnOnClick={btnOnClick}
                    />
                )}
            </div>
            <div className='grid2'>
                {alphabet.slice(7, 14).map(ch =>
                    <AZButton
                        ch={ch}
                        visible={!discovered.has(ch)}
                        btnOnClick={btnOnClick}
                    />
                )}
            </div>
            <div className='grid2'>
                {alphabet.slice(14, 21).map(ch =>
                    <AZButton
                        ch={ch}
                        visible={!discovered.has(ch)}
                        btnOnClick={btnOnClick}
                    />
                )}
            </div>
            <div className='grid2'>
                {alphabet.slice(21).map(ch =>
                    <AZButton
                        ch={ch}
                        visible={!discovered.has(ch)}
                        btnOnClick={btnOnClick}
                    />
                )}
            </div>
        </div>
    );
}

export default KeyBoard;