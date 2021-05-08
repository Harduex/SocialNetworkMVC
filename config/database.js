import mongoose from 'mongoose';

const dbConnection = () => {
    // Manual configuration
    const dbPrefix = process.env.DB_PREFIX ? `${process.env.DB_PREFIX}` : 'mongodb';
    const dbUser = process.env.DB_USER ? `${process.env.DB_USER}:` : '';
    const dbPassword = process.env.DB_PASSWORD ? `${process.env.DB_PASSWORD}@` : '';
    const dbUrl = process.env.DB_URL || 'localhost';
    const dbPort = process.env.DB_PORT ? `:${process.env.DB_PORT}` : '';
    const dbName = process.env.DB_NAME || 'MyDb';

    // Or full db uri connection string if you prefer
    const fullDbUri = process.env.DB_URI || '';

    const dbUri = fullDbUri || `${dbPrefix}://${dbUser}${dbPassword}${dbUrl}${dbPort}/${dbName}`;

    // options
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }

    // connection
    mongoose.connect(dbUri, options);

    // if mongoose runs
    mongoose.connection.on('open', () => {
        console.log(`Mongodb Connected: ${dbUri}`);
    });
    // error
    mongoose.connection.on('error', (error) => {
        console.log(`Mongoose error: ${error}`);
    });

    mongoose.Promise = global.Promise;
}

export default dbConnection;