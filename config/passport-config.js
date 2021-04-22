const LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcrypt';
import passport from 'passport';
import { getUserById, getUserByUsername } from '../App/Models/userModel';


function initialize(passport, getUserByUsername, getUserById) {
    const authenticateUser = async (username, password, done) => {
        const user = await getUserByUsername(username);
        if (user == null) {
            return done(null, false, { message: 'No user with that username' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'username' },
        authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });
}

// Init user auth
export default () => initialize(
    passport,
    getUserByUsername,
    getUserById
);

