const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
mongoose.set('strictQuery', true);

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
