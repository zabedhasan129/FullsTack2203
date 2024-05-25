const mongoose = require('mongoose');
const mognodbConfig = () => {

    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.yddjriz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log('Mongodb Database Connected!'));
}

module.exports = mognodbConfig;