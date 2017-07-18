import React, {Component} from 'react'

export default class WaterBoiler extends Component {
    render() {
        return (
            <div>
                {this.props.temp > 100 ?
                    <h2 style={{color: 'rgb(' + this.props.temp + ', 100, 0)'}}> ohoo boiling</h2> :
                    <h2 style={{color: 'rgb(100, ' + this.props.temp + ', 0)'}}> not warm enough</h2>}
            </div>
        );
    }

}