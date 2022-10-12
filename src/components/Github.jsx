import React from 'react';
import githubSVG from '../images/github.svg'

function Github(props) {
    return (
        <div className='github-repo-link'>
            <a href='https://github.com/ujjaval-shah/hangman'>
                <img className='github' src={githubSVG} alt={"Github Repo"} />
            </a>
        </div>
    );
}

export default Github;