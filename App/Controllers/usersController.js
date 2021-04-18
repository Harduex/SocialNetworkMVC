// Users model
import User from '../Models/usersSchema';

const addUser = (req, res) => {
    const user = new User({ username: req.query.username , password: req.query.password });
    const promise = user.save();

    promise.then((data) => {
        res.render('index', { title: 'New User Created', text: data.username });
    }).catch((err) => {
        res.render('index', { title: 'Error', text: 'Error' });
    });
};

export { addUser };