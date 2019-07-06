const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://debasishbhol:Debasish@143@cluster0-irwb9.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, err => {
    if(!err) { console.log('Connection Succeded!!');}
    else {console.log('connection failed');}
});