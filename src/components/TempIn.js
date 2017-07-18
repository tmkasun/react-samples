import React, {Component} from 'react'


export default class TempIn extends Component {
    constructor() {
        super();
        this.keyHandle = this.keyHandle.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(e) {
        this.props.tempHandler(e.target.value, e.target.getAttribute('datatype'));
    }

    keyHandle(e) {
        let update = this.props.temperature;
        if (e.keyCode === 38) {
            update = parseFloat(update)+1;
        } else if (e.keyCode === 40) {
            update = parseFloat(update)-1;
        }
        this.props.tempHandler(update, e.target.getAttribute('datatype'));
    }

    render() {
        let temp_type = this.props.type;
        let c_temp = this.props.temperature;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in <span style={{color: 'red'}}>{TempIn.types[temp_type]}</span></legend>
                    <input onKeyDown={this.keyHandle} datatype={temp_type} value={c_temp}
                           onChange={this.inputHandler}/>
                </fieldset>
            </div>
        );
    }
}

TempIn.types = {
    c: 'Celsius',
    f: 'Fahrenheit'
};