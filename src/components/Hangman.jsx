import React from 'react';


function Hangman({ health }) {
    return (
        <div className='hangman'>
            <svg class="hangman_parent" x="0px" y="0px" viewBox="0 0 236 330">
                <Gallows />
                {health === 0 && <HangmanFace />}
                <LeftHand on={health === 0} />
                <RightHand on={health <= 1} />
                <RightLeg on={health <= 2} />
                <LeftLeg on={health <= 3} />
                <Torso on={health <= 4} />
                <Head on={health <= 5} />
            </svg>
        </div>
    );
}


function Head({ on }) {
    const headClass = on ? "hangman_on" : "hangman_dim"
    return <circle class={headClass} cx="139.4" cy="89.1" r="35.6"></circle>
}

function Torso({ on }) {
    const torsoClass = on ? "hangman_on" : "hangman_dim"
    return <line class={torsoClass} x1="139.4" y1="124.7" x2="139.4" y2="220"></line>
}

function LeftLeg({ on }) {
    const leftlegClass = on ? "hangman_on" : "hangman_dim"
    return <line class={leftlegClass} x1="139.4" y1="218.7" x2="114.2" y2="299.3"></line>
}

function RightLeg({ on }) {
    const rightlegClass = on ? "hangman_on" : "hangman_dim"
    return <line class={rightlegClass} x1="139.4" y1="218.7" x2="167.5" y2="291.4"></line>
}

function RightHand({ on }) {
    const righthandClass = on ? "hangman_on" : "hangman_dim"
    return <line class={righthandClass} x1="139.4" y1="134.3" x2="164.2" y2="210.8"></line>
}

function LeftHand({ on }) {
    const lefthandclass = on ? "hangman_on" : "hangman_dim"
    return <line class={lefthandclass} x1="139.4" y1="133.9" x2="111.6" y2="212.4"></line>
}

function Gallows() {
    return (
        <>
            <line class="hangman_on" x1="0" y1="330" x2="236" y2="330"></line>
            <line class="hangman_on" x1="59" y1="0" x2="59" y2="330"></line>
            <line class="hangman_on" x1="139.4" y1="53.5" x2="139.4" y2="0"></line>
            <line class="hangman_on" x1="58" y1="2.5" x2="139.4" y2="2.5"></line>
        </>
    )
}

function HangmanFace() {
    return (
        <>
            <line class="hangman_face" x1="122.9" y1="83.4" x2="131.1" y2="91.6"></line>
            <line class="hangman_face" x1="122.6" y1="91.9" x2="131.6" y2="82.9"></line>
            <line class="hangman_face" x1="147" y1="83.5" x2="155.3" y2="91.8"></line>
            <line class="hangman_face" x1="146.8" y1="92" x2="155.8" y2="83"></line>
            <path class="hangman_face" d="M126.4,106.5c0-1.8,5.6-3.2,12.4-3.2"></path>
            <path class="hangman_face" d="M150.9,106.5c0-1.8-5.6-3.2-12.4-3.2"></path>
        </>
    );
}

export default Hangman;