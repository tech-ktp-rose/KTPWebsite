const mongoose = require('mongoose');

// Use native promises since the default mpromise is deprecated.
mongoose.Promise = global.Promise;


/* Create a schema to give structure to contacts data. */
const EventEntrySchema  = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    date: Date
}, { collection: 'eventEntries'});


const EventEntry = mongoose.model('EventEntry', EventEntrySchema);
module.exports = EventEntry;