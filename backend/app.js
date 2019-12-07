//load express library
const express = require('express');
// Parse incoming request bodies in a 
// middleware before your request handlers process them.
const bodyParser = require('body-parser'); 

const textFieldRoutes = require('./routes/textFields');
const EventEntryRoutes = require('./routes/eventEntries');
const photoCarouselEntryRoutes = require('./routes/photoCarouselEntries');

//instantiate instance of express webserver
const app = express();

//Using CORS to share between origins------
const cors = require('cors');
app.use(cors());
//-----------------------------------------

//load db connection
require('./models/db');

//use port 3000, only one connection per port at a time
const port = process.env.PORT || 3000;

// Only parse JSON bodies
app.use(bodyParser.json()); 
//  extended: true means to parse deeply nested objects
//  extended: false means users should not post nested
//  objects because they will not be parsed. 
app.use(bodyParser.urlencoded({extended: true})); 

//-------------------------------------------------------------------------------
const logger = require('morgan');  // require morgan logging middleware library
app.use(logger('dev')); // use the middleware function returned by logger(“dev”)



//  Respond to get request on the root path '/'
//    Send a 'Hello World' response 
app.get('/', (req, res) => {
    //commentout line to see waiting status on server
    res.send('Hello World');
});

// Route traffic sent to /contacts to the mini app
app.use('/textfields', textFieldRoutes);
app.use('/eventEntries', EventEntryRoutes);
app.use('/photoCarouselEntries', photoCarouselEntryRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


