const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db-aenima', { useNewUrlParser: true, useUnifiedTopology: true}, console.log("Database connected successfully"))