import React from 'react';

function Blanks({ word, discovered }) {
    return (
        <div className='grid1'>
            {[...word].map((ch, index) => <Character key={index} ch={ch} visible={discovered.has(ch)} />)}
        </div>
    );
}

function Character({ ch, visible }) {
    return (
        <>
            <div className={(ch !== ' ') ? 'ch gamingfont' : 'ch-space'}> {visible ? ch : ' '} </div>
        </>
    )
}

export default Blanks;