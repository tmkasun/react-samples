import React, {Component} from 'react'

export default class FormsTM extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            text: 'Auto Encoder :)',
            selected: 'bus'
        };
        this.formSubmitter = this.formSubmitter.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.grandHandler = this.grandHandler.bind(this);
    }

    formSubmitter(e) {
        e.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandler(e) {
        e.target.value = e.target.value.toUpperCase();
        this.setState({value: e.target.value})
    }

    handleText(e) {
        this.setState({text: e.target.value});
    }

    handleSelect(e) {
        this.setState({
            selected: e.target.value
        })
    }

    grandHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.grandHandler}>
                    <input name="nameField" type="text" onChange={this.grandHandler}/>
                    <p>
                        Input Value: {this.state.nameField}
                    </p>
                    <textarea name="articleField" onChange={this.grandHandler}/>
                    <p>
                        Input Value: {this.state.articleField}
                    </p>
                    <select name="carsField" value={this.state.selected} onChange={this.grandHandler}>
                        <option value={"car"}>Car</option>
                        <option value={"van"}>Van</option>
                        <option value={"bus"}>Bus</option>
                        <option value={"bicycle"}>Bicycle</option>
                    </select>
                    <p>
                        Input Value: {this.state.carsField}
                    </p>
                    <input type="submit" value={"Ok submit"}/>
                </form>
            </div>
        );
    }
}