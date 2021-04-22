import React from 'react';
import Layout from './layouts/layout';


function Login(props) {
    return (
        <Layout title={props.message}>
            <div className="container">
                <form action="/auth/login" method="post">
                    <fieldset>
                        <legend>{props.message}</legend>
                        <p>{props.messages.error && props.messages.error}</p>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text" name="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </fieldset>
                </form>
                <a href="/auth/register">Sign up</a>
            </div>
        </Layout>
    )
}


export default Login;
