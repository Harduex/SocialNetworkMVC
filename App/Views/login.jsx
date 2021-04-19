import React from 'react';
import Layout from './layouts/layout';


function Register(props) {
    return (
        <Layout title={props.message}>
            {props.messages.error && props.messages.error}
            <div class="form-container">
                <h1 class="mobile">{props.message}</h1>
                <form action="/auth/login" method="post">
                    <input class="mobile input-div" placeholder="Username" type="text" name="username" />
                    <input class="mobile input-div" placeholder="Password" type="password" name="password" />
                    <input class="mobile input-div" id="login" type="submit" value="Log In" />
                </form>
            </div>
            <a href="/auth/register" type="button" class="btn btn-primary">Register</a>
        </Layout>
    )
}


export default Register;
