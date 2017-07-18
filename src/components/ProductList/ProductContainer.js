import React, {Component} from 'react'
import SearchField from "./SearchField";
import ProductListing from "./ProductListing";

export default class ProductContainer extends Component {

    constructor() {
        super();
        this.state = {
            isTechOnly: false
        };
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
    }

    checkBoxHandler(e) {
        this.setState({isTechOnly: e.target.checked});
    }

    render() {
        const products = [
            {name: "WSO2 APIM", price: "12321$", cat: 'Tech', lead: 'Nuwan'},
            {name: "WSO2 CEP", price: "98231$", cat: 'Res', lead: 'Suho'},
            {name: "WSO2 IOT", price: "8123$", cat: 'Res', lead: 'Sumedha'},
            {name: "WSO2 IS", price: "650991$", cat: 'Tech', lead: 'Johan'},
            {name: "WSO2 EI", price: "53451$", cat: 'Tech', lead: 'NuwanD'}
        ];
        return (
            <div>
                <h3>
                    This are the WSO2 products
                </h3>
                <SearchField checkBoxhandler={this.checkBoxHandler} isTechOnly={this.state.isTechOnly}/>
                <ProductListing isTechOnly={this.state.isTechOnly} products={products}/>
            </div>
        );
    }
}