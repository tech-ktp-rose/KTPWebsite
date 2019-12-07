const express = require('express'),
    router = express.Router(),
    TextField = require('../models/textField');

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

router.route('/:name').get((req, res) => {
    TextField.find({location: req.params.name}, (err, textField) => {
        if (err) {
            handleError(err, res, 'Could not find any textfields.');
            res.statusCode(400);
            return;
        } else {
            res.json(textField[0]);
            res.status(200);
        }
    });
})
.put((req, res) => {
    TextField.find({location: req.params.name}, (err, textField) => {
        if (err) {
            handleError(err, res, 'Could not find any textfields.');
            res.statusCode(400);
            return;
        } else {
            textField[0].text = req.body.text;
            textField[0].save();
            res.json(textField[0]);
            res.status(200);
        }
    });
});
    
module.exports = router;