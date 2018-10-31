import React from 'react';
import './help.css';

class Help extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    getHelpContent = () => {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    };

    toggle = () => {
        let currentVal = this.state.isOpen;

        this.setState({isOpen: !currentVal})
    };

    render() {
        const {
            toggle,
            state: {isOpen}
        } = this;

        console.log(isOpen);

        return (
            <div className={`help ${isOpen ? 'collapsed' : ''}`} onClick={toggle}>
                <i className="icon ion-help"/> Help
                {
                    isOpen &&
                    <div className="help-text">
                        <p>
                            Society is always hard on the odd ones and so is this game. Seperate as many odd boxes from
                            the
                            matrix as you can while the Timer is still ticking.
                        </p>
                        <p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>
                    </div>
                }
            </div>
        )
    }
}

export default Help;