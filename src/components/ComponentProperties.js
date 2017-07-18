import React, {Component} from 'react'
/*
 * How to get props in Functional Components
 * How to get props in Class Components
 * Binding this
 * */

const ChildComponent = (props) => {
    return (
        <div>
            <h2>
                This is ChildComponent
                <span style={{color: 'red'}}>{props.sampleProperty.sampleKey}</span>
            </h2>
        </div>
    );
};


export default class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parentState: " Count is: ",
            count: 0
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const childProp = this.state.parentState + this.state.count;
        return (
            <div>
                <ChildComponent sampleProperty={{sampleKey: childProp}}/>
                <button onClick={this.handleButtonClick}>Update Props</button>
            </div>
        );
    }

}