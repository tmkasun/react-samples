import React, {Component} from 'react'

const fakeAuth = {
    isAuth: false,
    doLogin(method) {
        this.isAuth = true;
        setTimeout(method, 500);
    },
    doLogOut(method) {
        this.isAuth = false;
        setTimeout(method, 1000);
    }
};

class Login extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        fakeAuth.doLogin(() => {
            this.setState({redirect: true});
            this.props.history.push('/home');
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.login.bind(this)}>
                    Click To Login
                </button>
            </div>
        );
    }
}

export {fakeAuth, Login}