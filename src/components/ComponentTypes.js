/*
 * Different between Component types
 * Next: Life Cycle
 * */
import React, {Component} from 'react'

const FunctionalComponent = () => {
    return <h2>Hello i'm FunctionalComponent</h2>
};

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "default name",
            tel: 231321,
        };
        this.inHandler = this.inHandler.bind(this);
    }

    inHandler(e) {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});

    }

    render() {
        return (
            <div>
                <form>
                    <input  onChange={this.inHandler} value={this.state.username} type="text" name="username"/>
                    <br/>
                    <input onChange={this.inHandler} type="number" name="tel"/>
                    <br/>
                    <input onChange={this.inHandler} type="checkbox" name="check"/>
                </form>
                <br/>
                <button>
                    Submit
                </button>
            </div>
        );
    }
}

const ComponentTypes = () => {
    return (
        <div>
            <FunctionalComponent/>
            <ClassComponent/>
        </div>
    );
};

export default ComponentTypes;