const express = require('express');
require('./db/mongoose'); 
const userRoute = require('./routes/User');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json()); 
app.use(cors());


app.use('/api', userRoute);


app.listen(port, () => {
    console.log("Server is up and running on port " + port);
});
