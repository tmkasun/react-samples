import React, {Component} from 'react'

export default class SearchField extends Component {

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="searchField">Enter Search query: </label>
                    <input name="searchField" type="text"/>
                    <input onChange={this.props.checkBoxhandler} type="checkbox" checked={this.props.isTechOnly}/>
                </form>
            </div>
        );
    }
}