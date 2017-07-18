import React, {Component} from 'react'
import WaterBoiler from './water_boiler'

export default class StateLift extends Component {
    constructor() {
        super();
        this.state = {
            current_temp: 0
        };
        this.inHandler = this.inHandler.bind(this);
        this.keyHandle = this.keyHandle.bind(this);
    }

    inHandler(e) {
        this.setState({
            current_temp: e.target.value
        })
    }

    keyHandle(e) {
        let update = this.state.current_temp;
        if (e.keyCode === 38) {
            update++;
        } else if (e.keyCode === 40) {
            update--;
        }
        this.setState({
            current_temp: update
        })
    }

    render() {
        return (
            <div>
                <input onKeyDown={this.keyHandle} type="text" onChange={this.inHandler}
                       value={this.state.current_temp}/>
                <WaterBoiler temp={this.state.current_temp}/>
            </div>
        );
    }
}