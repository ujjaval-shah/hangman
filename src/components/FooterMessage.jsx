import React, { Component } from 'react';

class FooterMessage extends Component {

    state = {
        isMobile: window.innerWidth < window.innerHeight,
    }

    updateIsMobile = () => {
        this.setState({
            isMobile: window.innerWidth < window.innerHeight
        });
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateIsMobile);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateIsMobile);
    }

    render() {
        return this.state.isMobile && (
            <div className='footer-message gamingfont'>
                <div className='footer-text'>
                    The game is designed for a wide display.
                    <br />
                    Please rotate your device.
                </div>
            </div>
        );
    }
}

export default FooterMessage;