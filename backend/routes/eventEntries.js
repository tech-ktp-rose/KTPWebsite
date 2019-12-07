const express = require('express'),
    router = express.Router(),
    EventEntry = require('../models/EventEntry');

const methodOverride = require('method-override');
router.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

function handleError(err, res, msg) {
    err.message =`${err.message} ${msg}`;
    err.status = res.statusCode;
    res.json(err);
}

router.route('/').get((req,res) => {
    EventEntry.find({}, (err, EventEntry) => {
        if (err) {
            handleError(err, res, 'Could not find any textfields.');
            res.statusCode(400);
            return;
        } else {
            res.json(EventEntry);
            res.status(200);
        }
    });
});

module.exports = router;

