import React from 'react'
import ReactDom from 'react-dom'
import Header from "./Header";

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newState: "Initial state"
        };
        console.log("TRY:[1] First calling constructor");
    }

    componentWillMount() {
        console.log("TRY:[2] componentWillMount");
        setTimeout(
            () => {this.setState({newState: "This is a new state"})},
            3000
        );
    }

    render() {
        console.log("TRY:[3] render");
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        console.log("TRY:[4] componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TRY:[5] shouldComponentUpdate");
        console.log(nextProps);
        console.log(nS);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("TRY:[6] componentWillUpdate");
        console.log(nextProps);
        console.log(nS);
    }

    componentDidUpdate(nextProps,pS) {
        console.log("TRY:[7] componentDidUpdate");
        console.log(nextProps);
        console.log(pS);

    }
}

export default Base