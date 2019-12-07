const express = require('express'),
    router = express.Router(),
    PhotoCarouselEntry = require('../models/photoCarouselEntry');

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
    PhotoCarouselEntry.find({}, (err, photoCarouselEntry) => {
        if (err) {
            handleError(err, res, 'Could not find any photos.');
            res.statusCode(400);
            return;
        } else {
            res.json(photoCarouselEntry);
            res.status(200);
        }
    });
})
.post((req, res) => {
    console.log(req.body)
    // PhotoCarouselEntry.create({
    //     name: req.body.name,
    //     description: req.body.description,
    //     location: req.body.location,
    //     date: new Date(req.body.date)
    // }, (err, photoCarouselEntry) => {
    //     if (err) {
    //         handleError(err, res, 'Error creating event Entry.');
    //         res.status(400);
    //         return;
    //     } else {
    //         res.json(photoCarouselEntry);
    //         res.status(201);
    //     }
    // });
})
.delete((req, res) => {
    PhotoCarouselEntry.remove({
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        location: req.body.location
    }, (err, photoCarouselEntry) => {
        if (err) {
            handleError(err, res, 'Error creating event Entry.');
            res.status(400);
        } else {
            res.json(null);
            res.status(204);
        }
    })
});

module.exports = router;