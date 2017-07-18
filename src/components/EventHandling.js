import React, {Component} from 'react'

export default class EventH extends Component {

    constructor() {
        super();
        this.state = {
            what: "Nothing ..",
            toggled: "ohh changes",
            toggle: false
        };
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e) {
        console.log("Handle button click");
        this.setState({toggle: !this.state.toggle});
    }

    render() {
        if (!this.props.needEventH) {
            return null;
        }
        return (
            <div>
                {this.state.toggle &&
                <h2>
                    Yes I got toggled :)
                </h2>}
                <span
                    style={{color: 'red'}}> Current state is : {this.state.toggle ? this.state.what : this.state.toggled}</span>
                <button onClick={this.handleButton}>
                    Click meee
                </button>
            </div>
        );
    }
}