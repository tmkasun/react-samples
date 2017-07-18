import React, {Component} from 'react'
import TempIn from './TempIn'
import WaterVerdict from './water_boiler'

export default class TempCal extends Component {
    constructor() {
        super();
        this.state = {
            temperature: '',
            type: 'c'
        };
        this.handleTempChange = this.handleTempChange.bind(this);
    }

    toCelcius(val) {
        return (val - 32) * 5 / 9;
    }

    toFarenhite(val) {
        return (val * 9 / 5) + 32;
    }

    tryConvert(temp, toConverter) {
        let input = parseFloat(temp);
        if (Number.isNaN(input)) {
            return ''
        }
        let convertedVal = toConverter(input);
        let rounded = Math.round(convertedVal * 1000) / 1000;
        return rounded.toString();
    }

    handleTempChange(newVal, type) {
        this.setState({
            temperature: newVal,
            type: type
        })
    }

    render() {
        let c_type = this.state.type;
        let c_temp = this.state.temperature;
        let def_c = c_type === 'c' ? c_temp : this.tryConvert(c_temp, this.toCelcius);
        return (
            <div>
                <TempIn type={'c'}
                        temperature={def_c}
                        tempHandler={this.handleTempChange}/>
                <TempIn type={'f'}
                        temperature={c_type === 'f' ? c_temp : this.tryConvert(c_temp, this.toFarenhite)}
                        tempHandler={this.handleTempChange}/>
                <WaterVerdict temp={def_c}/>
            </div>
        );
    }
}