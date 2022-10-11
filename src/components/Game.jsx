import React, { Component } from 'react';
import Blanks from './Blanks';
import Hangman from './Hangman';
import KeyBoard from './KeyBoard';
import Status from './Status';



class Game extends Component {

    state = {
        health: 6,
        discovered: new Set([]),
        ended: false,
        victory: false
    }

    isAVictory = (discovered) => {
        const { word } = this.props;
        let win = true;
        for (const ch of word) {
            if (ch === ' ') continue;
            console.log(ch, discovered.has(ch));
            win &&= discovered.has(ch);
        }
        console.log(win);
        return win;
    }

    btnOnClick = (event) => {
        var ch = event.target.innerText;
        if (!this.state.discovered.has(ch)) {
            this.setState((state, props) => {
                let discovered = new Set(state.discovered);
                discovered.add(ch);
                let health = state.health;
                if (this.props.word.indexOf(ch) === -1) {
                    health--;
                }
                let victory = this.isAVictory(discovered);
                let ended = victory || (health === 0);
                return { health, discovered, ended, victory };
            })
        }


    }

    render() {
        const { word, refreshPage } = this.props;
        const { ended, victory, health, discovered } = this.state;

        return (
            <>
                <Status ended={ended} victory={victory} health={health} word={word} refreshPage={refreshPage} />
                <Blanks word={word} discovered={discovered} />
                <div className='game'>
                    <div className='left'>
                        <Hangman health={this.state.health} />
                    </div>
                    <div className='right'>
                        <KeyBoard discovered={discovered} btnOnClick={this.btnOnClick} />
                    </div>
                </div>
            </>
        );
    }
}

export default Game;