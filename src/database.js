const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-fantastidog',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(db =>console.log('base de dato conectada'))
.catch(err => console.error(err));