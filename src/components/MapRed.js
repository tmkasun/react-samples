import React, {Component} from 'react'

export default class MapRed extends Component {

    constructor() {
        super();
        this.list = [11, 121, 1, 321, 32221, 3, 211, 3, 32, 12, 1, 1, 12, 32, 131, 3, 2131];
    }

    render() {
        let lements = this.list.map((value, index) => {
            return (
                <li key={index}>{value}</li>
            );
        });

        return (
            <ul>
                {lements}
                <h2>
                    Other way
                </h2>
                <ul>
                    {this.list.map((value, index) => {
                        return(
                            <li key={index}>
                                {value} + new value
                            </li>
                        );
                    })}
                </ul>
            </ul>
        );
    }
}