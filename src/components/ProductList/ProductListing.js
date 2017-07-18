import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ProdItem from "./ProdItem";

export default class ProductListing extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(prod => {
                        return this.props.isTechOnly && prod.cat !== "Tech" ? null : <ProdItem key={prod.name} prod={prod}/>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired
};