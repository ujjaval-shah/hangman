import React, { useState } from 'react';
import Game from './Game';
import themeData from '../data/data.json';
import PageNotFound from './PageNotFound';
import { useParams } from 'react-router-dom';

// A function to get a random item from a given list
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}


function Theme(props) {

    var { theme, level } = useParams();
    const [word, setWord] = useState("");
    const [key, setKey] = useState(1);

    const setNewWord = () => {
        if (themeData[theme] && themeData[theme][level]) {
            let newWord = random_item(themeData[theme][level]);
            setWord(newWord);
            setKey(key + 1);
            console.log(newWord);
        }
    }

    if (word === "") setNewWord();

    return (
        word !== "" ? (
            <Game key={key} word={word.toUpperCase()} refreshPage={setNewWord} />
        ) : (
            <PageNotFound />
        )
    )
}

export default Theme;

// // OLD CODE: Router v6 props.match discontinued

// class Theme extends Component {

//     state = {
//         word: "",
//     }

//     componentDidMount = () => {
//         this.setNewWord();
//     }

//     refreshPage = () => {
//         this.setNewWord();
//     }

//     setNewWord = () => {
//         console.log(this.props.match);
//         // let { theme, level } = this.props.match.params;
//         // if (themeData[theme] && themeData[theme][level]) {
//         //     let word = random_item(themeData[theme][level]);
//         //     this.setState({ word })
//         // }
//     }

//     render() {
//         let { word } = this.state;

//         return (
//             word !== "" ? (
//                 <Game word={word.toUpperCase()} refreshPage={this.setNewWord} />
//             ) : (
//                 <PageNotFound />
//             )
//         );
//     }
// }

// export default withRouter Theme;