import React, { Component } from 'react'
import Navigation from "./Navigation";

class AboutPage extends Component {

    componentDidMount() {
        console.log("Will redirect to homepage in 2sec");
        setTimeout(
            () => {
                this.props.history.push({ pathname: "/home", search: "reference=" + this.props.location.pathname })
            }, 2000
        );
    }

    render() {
        return ( <
            div >
            <
            h1 > This is About page! < /h1> <
            Navigation / >
            <
            /div>
        );
    }
}

export default AboutPage