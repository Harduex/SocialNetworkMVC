var bcrypt = require('bcrypt');
import passport from 'passport';
import { User } from '../Models/usersModel';


const RegisterView = (req, res) => {
    res.render('register', { message: 'Registration' });
};

const LoginView = (req, res) => {
    res.render('login', { message: 'Login' });
};

const Register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        password: hashedPassword,
    });

    user.save()
        .then((data) => {
            res.render('login', { message: 'User added' });
        })
        .catch((err) => {
            res.render('register', { message: 'User already exist' });
        });
};

const Login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
});

const Logout = (req, res) => {
    req.logOut();
    res.redirect('/auth/login');
};


function checkAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect('/auth/login');
}

function checkNotAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return response.redirect('/');
    }
    return next();
}


export { RegisterView, LoginView, Register, Login, Logout, checkAuthenticated, checkNotAuthenticated };
