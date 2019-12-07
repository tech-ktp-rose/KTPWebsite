const mongoose = require('mongoose');

// Use native promises since the default mpromise is deprecated.
mongoose.Promise = global.Promise;


/* Create a schema to give structure to contacts data. */
const TextFieldSchema  = new mongoose.Schema({
    location: String,
    text: String
}, { collection: 'textFields'});


const TextField = mongoose.model('TextField', TextFieldSchema);
module.exports = TextField;