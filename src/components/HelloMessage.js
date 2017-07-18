import React, {Component} from 'react'
import EventH from './EventHandling'
import Forms from './Forms'
import MapRed from './MapRed'
import StateLift from './StateLift'
import TempCal from './TempCal'
import ProductContainer from "./ProductList/ProductContainer"
import ComWillRecProps from './componentWillReceivePropsTests/ComRecTest'

class FunctionalComponent extends Component {
    constructor() {
        super();
        this.state = {
            selectedComponent: 'eventh'
        };
        this.handleSelection = this.handleSelection.bind(this)
    }

    handleSelection(e) {
        this.setState({
            selectedComponent: e.target.value
        })
    }

    render() {
        let selection = this.state.selectedComponent;
        return (<div>
            <h1>
                Hallow routing <span style={{color: 'red'}}> Home </span>
            </h1>
            <select value={this.state.selectedComponent} onChange={this.handleSelection}>
                <option value="eventh">EventH</option>
                <option value="forms">Forms</option>
                <option value="mapred">MapRed</option>
                <option value="statelift">StateLift</option>
                <option value="tempcal">Temperature Calculator</option>
                <option value="products">Products Container</option>
                <option value="compwillrecprops">componentWillReceiveProps</option>
            </select>
            {
                selection === "eventh" ? <EventH needEventH={true}/> :
                    selection === "mapred" ? <MapRed/> :
                        selection === "forms" ? <Forms/> :
                            selection === "statelift" ? <StateLift/> :
                                selection === "tempcal" ? <TempCal/> :
                                selection === "products" ? <ProductContainer/> :
                                selection === "compwillrecprops" ? <ComWillRecProps/> : ""
            }
        </div>);
    }
}

export default FunctionalComponent