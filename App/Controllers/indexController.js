// Users model
import User from '../Models/usersSchema';

const Index = (req, res) => {
    const user = new User({username: 'user123'});
    const promise = user.save();

    promise.then((data) => {
        res.render('index', { title: 'Express', text: data.username });
    }).catch((err) => {
        res.render('index', { title: 'Express', text: 'Error text messsage' });
    });
};

export default Index;