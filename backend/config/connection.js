const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db-aenima', { useNewUrlParser: true, useUnifiedTopology: true}, console.log("Database connected successfully"))

//mongoose.connect('mongodb+srv://coco:1234@cluster0.6yo8q.mongodb.net/db-aenima?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}, console.log("Database connected successfully"))