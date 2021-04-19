import React from 'react';
import Layout from './layouts/layout';


function Register(props) {
    return (
        <Layout title={props.message}>
            <div class="container">
                <form action="/auth/register" method="post">
                    <fieldset>
                        <legend>{props.message}</legend>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username" />
                        </div>
                        <div class="form-group">
                            <label for="full-name">Full Name</label>
                            <input type="text" name="fullName" class="form-control" id="username" aria-describedby="full-name" placeholder="Firstname Lastname" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Registration</button>
                    </fieldset>
                </form>
                <a href="/auth/login">Sign in</a>
            </div>
        </Layout>
    )
}


export default Register;
