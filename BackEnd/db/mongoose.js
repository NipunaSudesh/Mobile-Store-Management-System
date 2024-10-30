const mongoose = require('mongoose');

const mongodbUrl = "mongodb+srv://nipuna:pass123@cluster0.lvhm2yt.mongodb.net/smartMobile?retryWrites=true&w=majority&appName=Cluster0";

// Remove deprecated options
mongoose.connect(mongodbUrl)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

// If you want to keep strict query mode:
mongoose.set('strictQuery', true);
