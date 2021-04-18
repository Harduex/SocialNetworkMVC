import mongoose from 'mongoose';

const database = () => {
    // credentials
    const dbUrl = 'localhost';
    const dbPort = '27017';
    const database = 'testdb';

    // connection
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
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

export default database;