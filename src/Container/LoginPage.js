import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const mockResponse = {
    profileObj: {
        email: 'thirawut.p@appman.co.th',
        imageUrl: 'https://lh4.googleusercontent.com/-ya_p50CJcz4/AAAAAAAAAAI/AAAAAAAAAAs/-YR2bLh0QBk/s96-c/photo.jpg',
        name: 'MockFName MockLastName',
    },
    tokenObj: {
        accessToken: 'thisismockaccesstoken',
    }
}

class LoginPage extends Component {
    state = {
        isLogedIn: false
    }

    handleLoginSuccess = (data) => {
        data = mockResponse
        this.props.router.push({
            pathname: '/home',
            state: data,
        })
    }

    handleLoginFailure = () => {
        if (this.state.isLogedIn) {
            this.handleLoginSuccess()
        }
        this.setState({ isLogedIn: true })
        // TODO : handle fail case
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <GoogleLogin
                    clientId="641800244467-7rc34tcaa2bh0mu7i109blv72n8ilnse.apps.googleusercontent.com"
                    hostedDomain="appman.co.th"
                    buttonText="Login"
                    onSuccess={this.handleLoginSuccess}
                    onFailure={this.handleLoginFailure}
                />
            </div>
        );
    }
}

export default LoginPage;