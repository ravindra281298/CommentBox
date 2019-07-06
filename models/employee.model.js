const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {type: String},
    comments: {type: String},
    likes: {type: Integer},

});

mongoose.model('Comments', employeeSchema);