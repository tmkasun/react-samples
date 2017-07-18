import React , {Component} from 'react'

const FunctionalComponent = (props) => {
    return <h2>Hello i'm FunctionalComponent</h2>
};

class ClassComponent extends Component {
    render() {
        return <h2>Hello i'm ClassComponent</h2>
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