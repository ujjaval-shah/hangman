import React from 'react';

function AZButton({ ch, visible, btnOnClick }) {
    return (
        <>
            <div
                className={visible ? 'btn gamingfont' : 'btn btn-gone'}
                onClick={btnOnClick}
                name={ch}
            >
                {visible ? ch : ''}
                {/* {ch} */}
            </div>
        </>
    )
}

export default AZButton;