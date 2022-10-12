import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import themeData from '../data/data.json';

function Title(props) {

    return (
        <div className='title gamingfont'>
            HANGMAN
            <Routes>
                <Route path="/theme/:theme/level/:level" element={<ThemeInfo />} />
            </Routes>
        </div>
    );
}

function ThemeInfo() {
    let { theme, level } = useParams();
    let themeInfo = "";
    if (themeData[theme] && themeData[theme][level]) {
        themeInfo = `: ${themeData[theme]["theme"]}`;
    }

    return <> {themeInfo} </>
}

export default Title;