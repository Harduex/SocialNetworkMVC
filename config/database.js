import mongoose from 'mongoose';

const dbConnection = () => {
    // credentials
    const dbUrl = 'localhost';
    const dbPort = '27017';
    const database = 'SocialNetwork';

    // options
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }

    // connection
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${database}`, options);
    // if mongoose runs
    mongoose.connection.on('open', () => {
        console.log('Mongodb Connected');
    });
    // error
    mongoose.connection.on('error', (error) => {
        console.log(`Mongoose error: ${error}`);
    });

    mongoose.Promise = global.Promise;
}

export default dbConnection;