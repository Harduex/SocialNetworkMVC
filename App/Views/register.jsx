import React from 'react';
import Layout from './layouts/layout';


function Register(props) {
    return (
        <Layout title={props.message}>
            <div class="form-container">
                <h1 class="mobile">{props.message}</h1>
                <form action="/auth/register" method="post">
                    <input class="mobile input-div" placeholder="Username" type="text" name="username" />
                    <input class="mobile input-div" placeholder="Password" type="password" name="password" />
                    <input class="mobile input-div" type="submit" value="Register" />
                </form>
            </div>
            <a href="/auth/login" type="button" class="btn btn-primary">Login</a>
        </Layout>
    )
}


export default Register;
