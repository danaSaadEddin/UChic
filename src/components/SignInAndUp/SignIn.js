import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { signInWithPopup } from '../../firebase/firebaseUtility';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="signIn-wrapper">
                <Form onSubmit={this.handleSubmit}
                    className="w-50 m-auto bg-light p-4">
                    <h2>I Already Have An Account </h2>
                    <h4>Sign In With Your Email And Password</h4>
                    <Form.Field>
                        <label>Email</label>
                        <input name='email' type='email' value={this.state.email} required onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>password</label>
                        <input name="password" type="password" value={this.state.password} required onChange={this.handleChange} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                    <Button color='google plus' onClick={signInWithPopup}>
                        <Icon name='google plus' />   sign in with google
                    </Button>
                </Form>
            </div>

        );
    }
}
export default SignIn;