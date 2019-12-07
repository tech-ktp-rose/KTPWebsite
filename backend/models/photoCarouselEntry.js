const mongoose = require('mongoose');

// Use native promises since the default mpromise is deprecated.
mongoose.Promise = global.Promise;


/* Create a schema to give structure to contacts data. */
const PhotoCarouselEntrySchema  = new mongoose.Schema({
    title: String,
    text: String,
    location: String
}, { collection: 'photoCarouselEntries'});


const PhotoCarouselEntry = mongoose.model('PhotoCarouselEntry', PhotoCarouselEntrySchema);
module.exports = PhotoCarouselEntry;