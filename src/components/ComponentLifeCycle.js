/*
* Component LC
* state
* promise
* stateUpdate
* Next: Component properties
* */
import React , {Component} from 'react'
import ReactDom from 'react-dom'
import Header from "./Header";

class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("TRY:[1] First calling constructor");

        this.state = {currentState: "Initial state"};
    }

    componentWillMount() {
        console.log("TRY:[2] componentWillMount");
        const promisedApiData = this._mockApiCall();
        promisedApiData.then(
            response => {
                this.setState({currentState: response.data});
            }
        );
    }

    render() {
        console.log("TRY:[3] render");
        return (
            <h3>ComponentLifeCycle Sample rendered! : {this.state.currentState}</h3>
        );
    }

    componentDidMount() {
        console.log("TRY:[4] componentDidMount");
    }

    /* End of initial component mount */

    /* Triggers when updating the component */

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TRY:[5] shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("TRY:[6] componentWillUpdate");
        console.log(nextProps);
        console.log(nextState);
    }

    componentDidUpdate(nextProps, pS) {
        console.log("TRY:[7] componentDidUpdate");
        console.log(nextProps);
        console.log(pS);

    }

    _mockApiCall() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve({data: "Data received!!"});
                    },
                    3000
                );
            }
        );
    }
}

export default ComponentLifeCycle