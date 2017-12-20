import React, {Component} from 'react'

class AnotherComponent extends Component {
    constructor(props) {
        super(props);
        console.log("TRY:[x1] AnotherComponent:constructor");
        console.log(props);
        this.modifiedProps = "MOD: " + props.testing;
        this.state = {
            modifiedProps: "MOD: " + props.testing
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("TRY:[x2] AnotherComponent:componentWillReceiveProps");
        console.log(nextProps);
        this.modifiedProps = "MOD: " + nextProps.testing;
        this.setState({modifiedProps: "MOD: " + nextProps.testing});
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TRY:[x3] AnotherComponent:shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        console.log("nextProps.testing % 2 = " + nextProps.testing % 2);
        return nextProps.testing % 2;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("TRY:[x4] AnotherComponent:componentWillUpdate");
        console.log(nextProps);
        console.log(nextState);
    }

    render() {
        return (
            <div>
                <h1>
                    New props = {this.state.modifiedProps}
                </h1>
            </div>
        );
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("TRY:[x6] AnotherComponent:componentDidUpdate");
        console.log(prevProps);
        console.log(prevState);
    }
}

export default class ComWillRecProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleButton = this.handleButton.bind(this);

    }

    handleButton() {
        console.log("TRY: [y1] ComWillRecProps:handleButton");
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <h1>
                    Sample Com will Rec Props
                </h1>
                <AnotherComponent testing={this.state.count}/>
                <button onClick={this.handleButton}>Change Me!</button>
            </div>
        );
    }
}