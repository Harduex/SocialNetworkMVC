import React from 'react';
import Layout from './layouts/layout';


function Register(props) {
    return (
        <Layout title={props.message} logged={props?.logged === false}>
            <div className="container">
                <form action="/auth/register" method="post">
                    <fieldset>
                        <legend>{props.message}</legend>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username" required/>
                        </div>
                        <div className="form-group">
                            <label for="full-name">Full Name</label>
                            <input type="text" name="fullName" className="form-control" id="username" aria-describedby="full-name" placeholder="Firstname Lastname" />
                        </div>
                        <div className="form-group">
                            <label for="full-name">Email</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="email" placeholder="email@domain.com" required/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Registration</button>
                    </fieldset>
                </form>
                <a href="/auth/login" className="mb-2 d-block">Sign in</a>
                <a href="/contact">Contact Us</a>
            </div>
        </Layout>
    )
}


export default Register;
