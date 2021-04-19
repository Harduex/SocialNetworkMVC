import React from 'react';
import Layout from './layouts/layout';


function Register(props) {
    return (
        <Layout title={props.message}>
            <div class="container">
                <form action="/auth/login" method="post">
                    <fieldset>
                        <legend>{props.message}</legend>
                        <p>{props.messages.error && props.messages.error}</p>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" name="username" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </fieldset>
                </form>
                <a href="/auth/register">Sign up</a>
            </div>
        </Layout>
    )
}


export default Register;
