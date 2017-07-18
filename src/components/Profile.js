import React, {Component} from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        document.title = props.match.params.name + "' Profile page";
    }

    render() {
        return (
            <div style={{backgroundColor: 'aqua'}}>
                <p>
                    This is User profile page!!
                </p>
                <h3>
                    Hello <span style={{color: 'blue'}}>{this.props.match.params.name}</span>
                </h3>
            </div>
        );
    }
}